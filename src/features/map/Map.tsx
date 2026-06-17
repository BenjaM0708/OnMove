import React from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useGeolocation } from '../../hooks/useGeolocation'
import { useGetRides } from '../../hooks/useGetRides'
import { Link } from 'react-router-dom'

// Use a loose type for libraries to avoid mismatches with @react-google-maps/api Library type
const libraries: any[] = ['places']

const containerStyle = { width: '100%', height: '100%' }
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

  const rideData : any = useGetRides()

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
    //map.fitBounds(bounds)
    setMap(map)
  }, [center])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  //Data from click
  
  const [coordOnClick, setCoordOnClick] = React.useState<{lat: number, lng: number} | null>(null)

  const onClick = React.useCallback(function callback(event: google.maps.MapMouseEvent /* | any */) {
     const lat = event.latLng?.lat()
     const lng = event.latLng?.lng()

    if(lat === undefined || lng === undefined) return

     setCoordOnClick({lat, lng})
     console.log("Click's coordinates", lat, lng)
  }, [])
  const [closeCoordOnClick, setCloseCoordOnClick] = React.useState< any | null>(null)

  //InfoWindow Controllers
  const [infoSelected, setInfoSelected] = React.useState< any | null>(null)

  //Map Render

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
          zoomControl: true,
          draggableCursor:"default",
          draggingCursor: 'grabbing',
          gestureHandling: 'greedy'
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

        {rideData.map((ride: any) => (
          <Marker
          key={ride.car_ride_id}
          onClick={() => setInfoSelected(ride)}
          position={{
            lat:ride.origin_location_lat,
            lng:ride.origin_location_long
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
  <div className='flex flex-col font-body'>
    <div className="flex justify-between items-center mb-2 gap-3">
  <h2 className='font-display text-base font-semibold text-brand-navy'>{infoSelected.driver_name}'s Ride</h2>
  <button onClick={() => setInfoSelected(null)} className='text-brand-dark/50 text-lg font-bold hover:text-brand-dark transition-colors flex-shrink-0'>×</button>
</div>
    <div className='flex flex-col gap-1 text-sm text-brand-dark'>
      <p><span className='font-medium text-brand-gold'>Origin</span>: {infoSelected.origin_description}</p>
      <p><span className='font-medium text-brand-gold'>Destination</span>: {infoSelected.destination_description}</p>
      {/* Commented now until backend update
      <p><span className='font-medium text-brand-gold'>Free Seats</span>: {infoSelected.free_seats}</p>
      */}
      <p><span className='font-medium text-brand-gold'>Date</span>: {new Date(infoSelected.origin_datetime).toLocaleDateString()}</p>
      <p><span className='font-medium text-brand-gold'>Time</span>: {new Date(infoSelected.origin_datetime).toLocaleTimeString()}</p>
    </div>

    <Link to={`/rides/${infoSelected.car_ride_id}`}>
      <button className='mt-3 w-full bg-brand-navy text-brand-light text-sm font-medium py-2 rounded-md hover:bg-brand-navy/80 transition-colors'>
        Check this Ride
      </button>
    </Link>

  </div>
</InfoWindow>) : null}

      </GoogleMap>
    </>
  ) : (
    <div className='flex justify-center items-center'>
        <h2 className='text-center'>Loading...</h2>
    </div>
  )
}

export default React.memo(Map)