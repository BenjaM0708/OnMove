import React from 'react'
import { GoogleMap, Marker, useJsApiLoader, DirectionsRenderer, DirectionsService } from '@react-google-maps/api'
import { IoFlag, IoFlagOutline, IoCar, IoPin } from "react-icons/io5";

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

  const boundsMarkers = [
      { lat: originLat, lng: originLng },
      { lat: destinationLat, lng: destinationLng }
    ]

  const center = (originLat && originLng)
    ? { lat: originLat, lng: originLng }
    : defaultCenter
  const [map, setMap] = React.useState(null)

  const [requested, setRequested] = React.useState(true)
  const [response, setResponse] = React.useState(null)

  const callback = (response: any, status: any) => {
    if (status === 'OK') {
      setResponse(response)
      setRequested(false)
    }}
    console.log('response', response)

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds()
    boundsMarkers.forEach(m => bounds.extend({ lat: m.lat, lng: m.lng }))
    map.fitBounds(bounds)
    setMap(map)
  }, [boundsMarkers])

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
         {requested && (
          <DirectionsService
            options={{
              origin: boundsMarkers[0],
              destination: boundsMarkers[1],
              travelMode: window.google.maps.TravelMode.DRIVING,
            }}
            callback={callback}
          />
        )}

        {response && (
          <DirectionsRenderer
            directions={response}
            options={{
              polylineOptions: { strokeColor: '#05c9f0', strokeWeight: 5, strokeOpacity: 0.5},
              suppressMarkers: false,
              markerOptions: { icon:  {
                    path: window.google.maps.SymbolPath.CIRCLE,
                    scale: 5,
                    fillColor: '#dbb15c',
                    fillOpacity: 1,
                    strokeColor: '#705011',
                    strokeWeight: 2,
              }},
              suppressInfoWindows: false,
            }}
          />
        )}

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