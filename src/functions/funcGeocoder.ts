import { GoogleMap } from "@react-google-maps/api";
import { useState, useRef, useEffect } from "react";

type CoordsEnterAsString = {
    location?: {lat: number, lng: number} | null,
    placeId?: string,
    formattedAddress?: string,
    addressComponents?: google.maps.GeocoderAddressComponent[]
}

 let geocoderObject: CoordsEnterAsString = {
            location: null,
            placeId: '',
            formattedAddress: '',
            addressComponents: []
        }

export const funcGeocoder = (addressString: string, addressCoord: {lat:number, lng:number}) => {

    if((!addressString && !addressCoord) || (addressString && addressCoord)) return alert('Format is not Valided')

    //Instance Created
    const geocoderRef = useRef<google.maps.Geocoder | null>(null)
    geocoderRef.current = new window.google.maps.Geocoder()

    //Coords as String to LatLng
    if(addressString && !addressCoord){
        
        geocoderRef.current?.geocode(
            { address: addressString, componentRestrictions: { country: 'es' } },
            (results, status) => {
              if(status !== 'OK' && !results?.[0]) return alert("Somethig wrong happened")
              if (status === 'OK' && results?.[0]) {
                const loc = results[0].geometry.location

                geocoderObject = {
                    location: {lat: loc.lat(), lng: loc.lng()},
                    placeId: results[0].place_id,
                    formattedAddress: results[0].formatted_address,
                    addressComponents: results[0].address_components
                }
              }
            }
        )
    }

    //Coords as LanLng to String
    if(!addressString && addressCoord){

        geocoderRef.current?.geocode(
            { location: { lat: addressCoord.lat, lng: addressCoord.lng } },
            (results, status) => {
                if(status !== 'OK' && !results?.[0]) return alert("Somethig wrong happened")
                if (status === 'OK' && results?.[0]) {
                    geocoderObject = {
                    placeId: results[0].place_id,
                    formattedAddress: results[0].formatted_address,
                    addressComponents: results[0].address_components
                }
              }
            }
        )
    }

    console.log(geocoderObject)
    return geocoderObject
}