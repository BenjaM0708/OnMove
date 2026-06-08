import React from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useGeolocation } from '../../hooks/useGeolocation'

const libraries: any[] = ['places']

const containerStyle = { width: '100%', height: '300px' }
const defaultCenter = { lat: 40.4169, lng: -3.7033 }


function MiniMap() {
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

  //Map Render

  return isLoaded ? (
    <>
    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13.5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onClick}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          draggableCursor:"default",
          draggingCursor: 'grabbing'
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

        {coordOnClick && (
          <>
            <Marker
              position={coordOnClick}
              onClick={()=> setCloseCoordOnClick(true)}
            />

            {closeCoordOnClick ? <InfoWindow
              position={coordOnClick}
              onCloseClick={() => setCloseCoordOnClick(null)}
            >
              <button>Add</button>
            </InfoWindow> : null
            }

            {/* Variant without callBack and head
              <Marker
              position={coordOnClick}
              />

              <InfoWindow
              position={coordOnClick}
              options={{
                headDisable:true
              }}
              >
              <button>Add</button>
              </InfoWindow>
            
            */}
          </>
        )}
      </GoogleMap>
    </>
  ) : (
    <><h2 className='text-center'>Loading...</h2></>
  )
}

export default React.memo(MiniMap)