import React, { useState, useEffect } from 'react'
import FormPost from '../../components/FormPost'

interface RidePost {
    driver_name: string;
    driver_contact_details: string;
    origin_location: string;
    destination_location: string;
    origin_datetime: string;
    origin_description: string;
    destination_description: string;
    free_seats: number;
}

export default function PostRide(){

    const [submitdEvent, setSubmitdEvent] = useState(false)

    const [dataSaved, setDataSaved] = useState< RidePost | null >(null)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        setSubmitdEvent(true)
        console.log(Object.fromEntries(formData))
    }

    useEffect(() => {

    }, [setSubmitdEvent])


/*(driver_name, driver_contact_details, origin_location, destination_location, origin_datetime, origin_description, destination_description, free_seats)
values
  ('Mónica', '+34 614 034 806', extensions.st_point(-3.264020460755966, 40.57609116340739), extensions.st_point(3.6969439472696877, 40.41903088870426), '2026-06-03 09:00:00+02', 'Azuqueca de Henares', 'Gran Vía', 3);*/

    return(
      <>
        <FormPost submitFunction={handleSubmit}/>
      </>
    )
}