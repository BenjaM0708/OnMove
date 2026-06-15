import { useState, useEffect } from "react";
import { supabase } from '../services/supabase'
import { Database } from "../types/types";

type rideInfo = Database['public']['Tables']['car_ride']['Row']
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


interface rideData extends rideInfo {
    readonly car_ride_id: bigint;

    //CardRideInfo has origin_location like coordinates
    origin_location_long: string;
    origin_location_lat: string;

    dist_meters: number;

    //CardRideInfo has destination_description coordinates
    destination_location_long: string;
    destination_location_lat: string;
}

export const useGRide = ( id: string ) => {
    const [ride, setRide] = useState< rideData | null >(null)
    const [loading, setLoading] = useState(true)

        useEffect(() => {
            async function fetchRide(): Promise<void> {
                setLoading(true)
                const { data, error } = await supabase
                    // Function to get Near Rides
                    .rpc('origin_locations_by_distance', {
                        searchlong: -4.11839,
                        searchlat: 40.94808
                    })
                    .select()
                    .eq('car_ride_id', id)
                    .single();
    
                if (error) {
                    console.error('Error:', error.message, error.details);
                    return;
                }
    
                if (data) {
                    console.log('Data recibed', data)
                    setRide(data as rideData)
                }
                setLoading(false)
            }
            fetchRide()
        }, [id])
        
    return { ride, loading }
}