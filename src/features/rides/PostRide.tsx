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
        const data: RidePostType = {
          driver_name: formData.get("drive_name") as string,
          driver_contact_details: formData.get("driver_contact_details") as string,
          origin_location: formData.get("origin_location") as string,
          destination_location: formData.get("destination_location") as string,
          origin_datetime: formData.get("origin_datetime") as string,
          origin_description: formData.get("origin_description") as string,
          destination_description: formData.get("destination_description") as string,
          free_seats: Number(formData.get("free_seats")) as number
        }

        console.log('This is data:', data)
        console.log('This is formData:', formData)
        setSubmitdEvent(true)
        console.log(submitdEvent)
        setDataSaved(data)
    }

    useEffect(() => {
        //setSubmitdEvent(false)
        //contador
    }, [submitdEvent])


/*(driver_name, driver_contact_details, origin_location, destination_location, origin_datetime, origin_description, destination_description, free_seats)
values
  ('Mónica', '+34 614 034 806', extensions.st_point(-3.264020460755966, 40.57609116340739), extensions.st_point(3.6969439472696877, 40.41903088870426), '2026-06-03 09:00:00+02', 'Azuqueca de Henares', 'Gran Vía', 3);*/

    return(
      <>
        <FormPost submitFunction={handleSubmit}/>
      </>
    )
}