import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase'
import { Database } from '../../types/types';
import { Link } from 'react-router-dom';

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

export default function GetRides() {
    const [carRides, setCarRides] = useState<CarRideData[]>([])

    useEffect(() => {
        async function fetchCarRides(): Promise<void> {
            const { data, error } = await supabase
                .rpc('origin_locations_by_distance', {
                    //Check this location
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
        <div className="min-h-screen bg-brand-light pt-24 px-6">
        <div className="max-w-3xl mx-auto py-16">

            <div className="flex flex-col gap-2 mb-10">
                <div className="w-12 h-1 bg-brand-gold rounded-full">&nbsp;</div>
                <h1 className="font-display text-4xl font-semibold text-brand-navy leading-tight">
                    Available Rides
                </h1>
                <p className="text-brand-dark/70 text-base">
                    Browse rides shared by the community and find your match.
                </p>
            </div>

            <ul className="flex flex-col gap-4">
                
                {carRides.map((carRide: CarRideData) => (
                    <li
                        key={carRide.car_ride_id}
                        className="border border-brand-dark/10 rounded-lg p-6 bg-white hover:border-brand-navy/30 transition-colors"
                    >
                        {/* Up.svg*/}
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-medium text-brand-dark">
                                {carRide.driver_name}
                            </span>
                            <span className="text-sm text-brand-dark/60">
                                {new Date(carRide.origin_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>

                        {/*La salud empieza a desaparer*/}
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col items-center">
                                <span className="w-2 h-2 rounded-full bg-brand-gold">&nbsp;</span>
                                <span className="w-px h-6 bg-brand-dark/20">&nbsp;</span>
                                <span className="w-2 h-2 rounded-full bg-brand-navy">&nbsp;</span>
                            </div>
                            <div className="flex flex-col gap-1 text-sm text-brand-dark">
                                <span>{carRide.origin_description ?? 'Unknown origin'}</span>
                                <span>{carRide.destination_description ?? 'Unknown destination'}</span>
                            </div>
                        </div>

                        {/* Fila inferior: fecha y asientos */}
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-brand-dark/10 gap-1">
                            <span className="text-sm text-brand-dark/60">
                                {new Date(carRide.origin_datetime).toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' })}
                            </span>
                            <span className="text-sm text-center font-medium text-brand-navy bg-brand-navy/10 px-3 py-1 rounded-full">
                                {carRide.free_seats} {carRide.free_seats === 1 ? 'seat' : 'seats'} available
                            </span>
                        </div>

            {/* Botón unirse */}
            <Link to={`/rides/${carRide.car_ride_id}`}>
                <button
                    className="mt-4 w-full bg-brand-navy text-brand-light text-sm font-medium py-2.5 rounded-md hover:bg-brand-navy/80 transition-colors">
                    Check this ride
                </button>
            </Link>
                    </li>
                ))}
            </ul>  

        </div>
    </div>
    )
}