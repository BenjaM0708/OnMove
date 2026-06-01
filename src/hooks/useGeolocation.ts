import { useState, useEffect } from "react";

interface LocationState {
    loaded: boolean,
    coordinates?: {lat: number, lng: number},
    error?: {code: number, message: string}
}

export const useGeolocation = () => {
    const [location, setLocation] = useState<LocationState>({
        loaded: false,
        coordinates: undefined
    });

    const onSuccess = (position: GeolocationPosition) => {
        setLocation({
            loaded:true,
            coordinates: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        })

    }

    const onError = (error: GeolocationPositionError) => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message
            }
        })
    }

    useEffect(() => {

        if(!("geolocation" in navigator)){
            setLocation({
                loaded: true,
                error: {
                    code: 0,
                    message: "Geolocation not supported"
                }
            })
            alert("Geolocation not supported on this Browser");
            return;
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError, {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 0
        })

    },[])

    return location;

}