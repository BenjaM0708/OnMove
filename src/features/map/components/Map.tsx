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
  const [showInfoSelected, setShowInfoSelected] = React.useState<{lat:number, lng:number} | null>(null)
  
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
          onClick={() => setShowInfoSelected({
            lat:nearRide.origin_location_lat,
            lng:nearRide.origin_location_long
          })}
          title={`${nearRide.driver_nam}'s Ride`}
          position={{
            lat:nearRide.origin_location_lat,
            lng:nearRide.origin_location_long
          }}
          />
        ))}

        {showInfoSelected ? (<InfoWindow
          position={showInfoSelected}
          /*onCloseClick={() => {setShowInfoSelected(null)}
          }*/
          options={{
            headerDisabled:true,
            headerContent:'You',
            maxWidth:200
          }}
        >
          <div className='text-center'>
            <div className="flex justify-between items-center m-1">
              <h2 className='text-zinc-950'>Ride</h2>
              <button onClick={() => setShowInfoSelected(null)} className='text-gray-700 text-xl font-bold self-start'>x</button>
            </div>
          This is your location lat:{center.lat} and long:{center.lng}
          </div>
        </InfoWindow>) : null}

      </GoogleMap>
    </>
  ) : (
    <><h2 className='text-center'>Loading...</h2></>
  )
}

export default React.memo(Map)