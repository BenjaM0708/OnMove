import React from 'react'
import { GoogleMap, InfoWindow, Marker, StandaloneSearchBox, useJsApiLoader } from '@react-google-maps/api'
import { useGeolocation } from '../../../hooks/useGeolocation'

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

  const {coordinates, error, loaded} = useGeolocation() 

  if(coordinates != undefined){console.log("Those are the user's coordinates", coordinates)}
  if(error != undefined){console.log("This is the user error", error)}
  if(loaded){console.log("This is the loaded state", loaded)}

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
  const [showInfo, setShowInfo] = React.useState(false)
  
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
        <Marker
        position={center}
        title='Current Location'
        onClick={() => setShowInfo(true)}
        icon={{
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: "#4285F4",    
          fillOpacity: 0.9,        
          scale: 8,                
          strokeColor: "#FFFFFF",  
          strokeWeight: 2,  
              }}
        />
        {showInfo && <InfoWindow
          position={center}
          onCloseClick={() => {setShowInfo(false)}
          }
          options={{
            headerDisabled:true,
            headerContent:'You',
            maxWidth:200
          }}
        >
          <div className='text-center'>
            <div className="flex justify-between items-center m-1">
              <h2 className='text-zinc-950'>Title</h2>
              <button onClick={() => setShowInfo(false)} className='text-gray-700 text-xl font-bold self-start'>x</button>
            </div>
          This is your location lat:{center.lat} and long:{center.lng}
          </div>
        </InfoWindow>
        }
      </GoogleMap>
    </>
  ) : (
    <>Loading...</>
  )
}

export default React.memo(Map)