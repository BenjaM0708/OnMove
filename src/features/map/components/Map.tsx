import React from 'react'
import { GoogleMap, InfoWindow, Marker, StandaloneSearchBox, useJsApiLoader } from '@react-google-maps/api'
import { useGeolocation } from '../../../hooks/useGeolocation'
import { useGetNearRide } from '../../../hooks/useGetNearRide'

// Use a loose type for libraries to avoid mismatches with @react-google-maps/api Library type
const libraries: any[] = ['places']

const containerStyle = { width: '100%', height: '600px' }
const defaultCenter = { lat: 40.4169, lng: -3.7033 }


function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    libraries: libraries
  })

  //Geolocation for User

  const {coordinates, error, loaded} = useGeolocation() 

  if(coordinates != undefined){console.log("Those are the user's coordinates", coordinates)}
  if(error != undefined){console.log("This is the user error", error)}
  if(loaded){console.log("This is the loaded state", loaded)}

  //GetRides to the Map

  const nearRideData : any = useGetNearRide()

  /*this is the getNearRide object
    car_ride_id: bigint
    destination_description: string | null
    destination_location: unknown
    driver_contact_details: string
    driver_name: string
    free_seats: number
    origin_datetime: string
    origin_description: string | null
    origin_location: unknown

    origin_location_long: string;
    origin_location_lat: string;

    dist_meters: number;

    destination_location_long: string;
    destination_location_lat: string;
*/

  //Map Configuration

  const center = coordinates || defaultCenter

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    
    const bounds = new window.google.maps.LatLngBounds(center)
  //  map.fitBounds(bounds. Change in future

    setMap(map)
  }, [center])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  //InfoWindow
  const [infoSelected, setInfoSelected] = React.useState< any | null>(null)
  console.log(center)
  return isLoaded ? (
    <>
    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13.5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          disableDefaultUI: true,
          zoomControl: true
        }}
      >
        <Marker //User Position
        position={center} 
        title='Current Location'
        icon={{
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: "#4285F4",    
          fillOpacity: 0.9,        
          scale: 8,                
          strokeColor: "#FFFFFF",  
          strokeWeight: 2,  
              }}
        />

        //CarRide Position

        {nearRideData.map((nearRide: any) => (
          <Marker
          key={nearRide.car_ride_id}
          onClick={() => setInfoSelected(nearRide)}
          title={`${nearRide.driver_nam}'s Ride`}
          position={{
            lat:nearRide.origin_location_lat,
            lng:nearRide.origin_location_long
          }}
          />
        ))}

        {infoSelected ? (<InfoWindow
          position={{
            lat:infoSelected.origin_location_lat,
            lng:infoSelected.origin_location_long
          }}
          options={{
            headerDisabled:true,
            maxWidth:250
          }}
        >
          <div className='flex flex-col'>
            <div className="flex justify-between items-center m-1">
              <h2 className='text-zinc-950'>{infoSelected.driver_name}'s Ride</h2>
              <button onClick={() => setInfoSelected(null)} className='text-gray-700 text-xl font-bold self-start p-1'>x</button>
            </div>
            <div className='flex flex-col mx-1 text-left text-black font-normal'>
              <p><span className='font-bold text-yellow-400'>Origin</span>: {infoSelected.origin_description}</p>
              <p><span className='font-bold text-yellow-400'>Destination</span>: {infoSelected.destination_description}</p>
              <p><span className='font-bold text-yellow-400'>Free Seats</span>: {infoSelected.free_seats}</p>
              <p><span className='font-bold text-yellow-400'>Date</span>:{new Date(infoSelected.origin_datetime).toLocaleDateString()}</p> 
              <p><span className='font-bold text-yellow-400'>Time</span>: {new Date(infoSelected.origin_datetime).toLocaleTimeString()}</p>
            </div>
          </div>
        </InfoWindow>) : null}

      </GoogleMap>
    </>
  ) : (
    <><h2 className='text-center'>Loading...</h2></>
  )
}

export default React.memo(Map)