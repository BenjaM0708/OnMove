import React from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useGeolocation } from '../../hooks/useGeolocation'

// Use a loose type for libraries to avoid mismatches with @react-google-maps/api Library type
const libraries: any[] = ['places']

const containerStyle = { width: '100%', height: '100%' }
const defaultCenter = { lat: 40.4169, lng: -3.7033 }


function Map(object: any) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    libraries: libraries
  })

  //Map Configuration
  const coordinates = { lat:object.origin.lat, lng:object.origin.lng }
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
            lat:object.origin_lat,
            lng:object.origin_lng
          }}
          />

          <Marker
          position={{
            lat:object.destination_lat,
            lng:object.destination_lng
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