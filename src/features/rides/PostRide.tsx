import React, { useState, useEffect } from 'react'
import FormPost from '../../components/FormPost'
import { Database } from '../../types/types';

type RidePostType = Database['public']['Tables']['car_ride']['Insert']
/*
    car_ride_id?: undefined;
    driver_name: string;
    driver_contact_details: string;
    origin_location: string;
    destination_location: string;
    origin_datetime: string;
    origin_description: string;
    destination_description: string;
    free_seats: number;
*/

export default function PostRide(){

    const [submitdEvent, setSubmitdEvent] = useState(false)
    const [dataSaved, setDataSaved] = useState< RidePostType | null>(null)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)

        //In .get(...) FormPost's names are used to relacionate the RidePostType object (Supabase structure) with the component FormPost
        const data: RidePostType = {
          driver_name: formData.get("name") as string,
          driver_contact_details: formData.get("contact") as string,
          origin_location: formData.get("origin_location") as string,
          destination_location: formData.get("destination_location") as string,
          origin_datetime: formData.get("time") as string,
          origin_description: formData.get("origin") as string,
          destination_description: formData.get("destination") as string,
          free_seats: Number(formData.get("seat")) as number
        }

        console.log('This is data:', data)
        setDataSaved(data)
    }

    useEffect(() => {
        //setSubmitdEvent(false)
        //contador
    }, [submitdEvent])

    return(
      <>
        <FormPost submitFunction={handleSubmit}/>
      </>
    )
}