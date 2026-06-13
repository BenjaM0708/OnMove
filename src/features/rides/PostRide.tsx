import React, { useState, useEffect } from 'react'
import FormPost from '../../components/FormPost'
import { Database } from '../../types/types';
import { funcPostRide } from '../../functions/funcPostRide';

type ObjLocationInfo = {
  origin?: {lat: number, lng: number}
  destination?: {lat: number, lng: number}
}
type RidePostType = Database['public']['Tables']['car_ride']['Insert']
/*
    Insert: {
    car_ride_id?: undefined;
    destination_description?: string | null | undefined;
    destination_location: unknown;
    driver_contact_details: string;
    driver_name: string;
    free_seats: number;
    origin_datetime: string;
    origin_description?: string | null | undefined;
    origin_location: unknown;
}
*/

export default function PostRide(){

    const [dataSaved, setDataSaved] = useState< RidePostType | null>(null)
    const [locationInfo, setLocationInfo] = useState<ObjLocationInfo | null>(null)

    //Take the Information from user to build the Object to give Supabase
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)

        const data: RidePostType = {
          driver_name: formData.get("name") as string,
          driver_contact_details: formData.get("contact") as string,
          origin_location:
            (!locationInfo?.origin?.lng || !locationInfo?.origin?.lat)
            ? 'unknown'
            : `POINT(${locationInfo.origin.lng} ${locationInfo.origin.lat})`,
          destination_location:
            (!locationInfo?.destination?.lng || !locationInfo?.destination?.lat)
            ? 'unknown'
            : `POINT(${locationInfo.destination.lng} ${locationInfo.destination.lat})`,
          origin_datetime: formData.get("time") as string,
          origin_description: formData.get("origin") as string,
          destination_description: formData.get("destination") as string,
          free_seats: Number(formData.get("seat")) as number
        }
        
        console.log("New data submit:", data)
        setDataSaved(data)

        //Send Information to SupaBase
        try {
          await funcPostRide(data)
        } catch (error) {
          console.log('Something Wrong Happened. Try Again')
        }

        //Reset The Form
        setLocationInfo(null)
        form.reset()
        return  
    }

    //Data message
    console.log("Last data submit:", dataSaved)

    return(
      <>
        <FormPost submitFunction={handleSubmit} uploadCoordFunction={setLocationInfo} />
      </>
    )
}