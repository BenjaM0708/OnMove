import { useState, useEffect } from "react";
import { supabase } from '../services/supabase'
import { Database } from "../types/types";

type NearRideInfo = Database['public']['Tables']['car_ride']['Row']
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


interface NearRideData extends NearRideInfo {
    readonly car_ride_id: bigint;

    //CardRideInfo has origin_location like coordinates
    origin_location_long: string;
    origin_location_lat: string;

    dist_meters: number;

    //CardRideInfo has destination_description coordinates
    destination_location_long: string;
    destination_location_lat: string;
}

interface FunctionTest { (): Promise<void> }

export const useGetNearRide = () => {
    const [nearRides, setNearRides] = useState<NearRideData[]>([])
    const [nearRidesFunction, setNearRidesFunction] = useState<FunctionTest>()

        useEffect(() => {
            async function fetchNearRides(): Promise<void> {
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
                    setNearRides(data as NearRideData[])
                }
    
            }
    
            setNearRidesFunction(fetchNearRides)
        }, [])

    return {
        nearRides,
        nearRidesFunction
    }
}


