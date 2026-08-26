export type CoordsEnter = {
    location?: {lat: number, lng: number} | null,
    placeId?: string,
    formattedAddress?: string,
    addressComponents?: google.maps.GeocoderAddressComponent[]
}

//Coords as String to LatLng Function
export const geocoderStrigToCoor = (addressString: string): Promise<CoordsEnter> => {
    const geocoder = new window.google.maps.Geocoder()

    return new Promise((resolve, reject) => {
        geocoder.geocode(
            { address: addressString, componentRestrictions: { country: 'es' } },
            (results, status) => {
                if (status !== 'OK' || !results?.[0]) {
                    reject(new Error(`Place not found: ${status}`))
                    return
                }

                const result = results[0]
                const loc = result.geometry.location
                resolve({
                    location: {lat: loc.lat(), lng: loc.lng()},
                    placeId: result.place_id,
                    formattedAddress: result.formatted_address,
                    addressComponents: result.address_components
                })
            }
        )
    })
}

export const geocoderCoorToString = (addressCoord: {lat:number, lng:number}): Promise<CoordsEnter> => {
    const geocoder = new window.google.maps.Geocoder()

    return new Promise((resolve, reject) => {
        geocoder.geocode(
            { location: { lat: addressCoord.lat, lng: addressCoord.lng } },
            (results, status) => {
                if (status !== 'OK' || !results?.[0]) {
                    reject(new Error(`Place not found: ${status}`))
                    return
                }

                const result = results[0]
                resolve({
                    placeId: result.place_id,
                    formattedAddress: result.formatted_address,
                    addressComponents: result.address_components
                })
            }
        )
    })
}