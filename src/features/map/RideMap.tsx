import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

// Use a loose type for libraries to avoid mismatches with @react-google-maps/api Library type
const libraries: any[] = ['places']

const containerStyle = { width: '100%', height: '100%' }
const defaultCenter = { lat: 40.4169, lng: -3.7033 }


function Map(propObj: any) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    libraries: libraries
  })

  //Map Configuration
  console.log('propObj', propObj)
  
  const originLat = Number(propObj.propObj.origin_lat)
  const originLng = Number(propObj.propObj.origin_lng)
  const destinationLat = Number(propObj.propObj.destination_lat)
  const destinationLng = Number(propObj.propObj.destination_lng)

  const center = (originLat && originLng)
    ? { lat: originLat, lng: originLng }
    : defaultCenter
  const [map, setMap] = React.useState(null)

  // test
  console.log('Ride Map', propObj)
  console.log('center', center)


  const onLoad = React.useCallback(function callback(map: any) {
    
    const bounds = new window.google.maps.LatLngBounds(center)
    //map.fitBounds(bounds)
    setMap(map)
  }, [center])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

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
        {/*<Marker //User Position
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
        />*/}

        
          <Marker
          position={{
            lat:originLat,
            lng:originLng
          }}
          />

          <Marker
          position={{
            lat:destinationLat,
            lng:destinationLng
          }}
          />
      </GoogleMap>
    </>
  ) : (
    <div className='flex justify-center items-center'>
        <h2 className='text-center'>Loading...</h2>
    </div>
  )
}

export default React.memo(Map)