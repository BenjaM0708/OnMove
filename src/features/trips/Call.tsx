import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase'
import { Database } from '../../types/types';

type CarRideInfo = Database['public']['Tables']['car_ride']['Row']
/*
    car_ride_id: bigint
    destination_description: string | null
    destination_location: unknown
    driver_contact_details: string
    driver_name: string
    free_seats: number
    origin_datetime: string
    origin_description: string | null
    origin_location: unknown
*/


interface CarRideData extends CarRideInfo {
    readonly car_ride_id: bigint;

    //CardRideInfo has origin_location like coordinates
    origin_location_long: string;
    origin_location_lat: string;

    dist_meters: number;

    //CardRideInfo has destination_description coordinates
    destination_location_long: string;
    destination_location_lat: string;
}

export default function Call() {
    const [carRides, setCarRides] = useState<CarRideData[]>([])

    useEffect(() => {
        async function fetchCarRides(): Promise<void> {
            const { data, error } = await supabase
                .rpc('origin_locations_by_distance', {
                    searchlong: -4.11839,
                    searchlat: 40.94808
                })
                .select();

            if (error) {
                console.error('Error:', error.message, error.details);
                return;
            }

            if (data) {
                console.log('Data recibed', data)
                setCarRides(data as CarRideData[])
            }

        }

        fetchCarRides()
    }, [])

    return (
        <>
            <h1 className='p-5 hover:cursor-pointer'>Car drives</h1>
            <ul>
                {carRides.map((carRide: CarRideData) => (
                    <li key={carRide.car_ride_id}>
                        {carRide.driver_name} drives to {carRide.destination_description} at {new Date(carRide.origin_datetime).toLocaleTimeString()}
                    </li>
                ))}
            </ul>
        </>
    )
}