import { useParams } from "react-router-dom"
import { useState } from "react"
import { useGRide } from "../hooks/useGRide"
import { useGetJoined } from "../hooks/useGetJoined"
import RideMap from "../features/map/RideMap"
import FormJoin from "../components/FormJoin"
import { JoinedRide } from "../types/joined_ride_type"
import { IoCall } from "react-icons/io5"

export default function RideDetailsPage() {
    
    // Get the Info of car_ride
    const [ reload, setReload ] = useState(false)

    const { car_ride_id } = useParams()
    const { ride, loading } = useGRide(`${car_ride_id}`)

    // Get the Info of joined_ride
    const usersJoined = useGetJoined({id:`${car_ride_id}`, reload})
    if(loading || !ride) {
        return <div className="min-h-screen bg-brand-light pt-24 px-6">Loading ride...</div>
    }

    // Map Object
    const mapObject = {
        origin_lat: ride.origin_location_lat,
        origin_lng: ride.origin_location_long,
        destination_lat: ride.destination_location_lat,
        destination_lng: ride.destination_location_long
    }

    // Seat Counter

    const seatCounter = ride.free_seats - usersJoined.length

    return (
      <div className="min-h-screen bg-brand-light pt-24 px-6">
        <div className="max-w-6xl mx-auto py-16">
         
            {/* Header */}
            <div className="flex flex-col gap-2 mb-10">
                <div className="w-12 h-1 bg-brand-gold rounded-full">&nbsp;</div>
                <h1 className="font-display text-4xl font-semibold text-brand-navy leading-tight">
                    Ride Details
                </h1>
                <p className="text-brand-dark/70 text-base">
                    Review the trip details and join if it fits your route.
                </p>
            </div>

            {/* RideMap */}
             <div className="w-full mx-auto mb-10 rounded-lg overflow-hidden border border-brand-dark/10 shadow-sm h-80 md:h-96 bg-brand-navy/10 flex items-center justify-center">
                {!ride.origin_location_lat || !ride.origin_location_long ? (
                   <div className='text-center'>Loading Ride...</div>
                ):(
                   <RideMap propObj={mapObject} />
                )}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-10 items-start">

                {/* Left*/}
                <div className="flex flex-col gap-6">
                    <div className="border border-brand-dark/10 rounded-lg p-6 bg-white shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-display font-semibold text-lg text-brand-navy">
                                {ride.driver_name}
                            </span>
                            <span className="text-sm text-brand-dark/60">
                                {new Date(ride.origin_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex flex-col items-center">
                                <span className="w-2 h-2 rounded-full bg-brand-gold">&nbsp;</span>
                                <span className="w-px h-6 bg-brand-dark/20">&nbsp;</span>
                                <span className="w-2 h-2 rounded-full bg-brand-navy">&nbsp;</span>
                            </div>
                            <div className="flex flex-col gap-1 text-sm text-brand-dark">
                                <span>{ride.origin_description ?? 'Unknown origin'}</span>
                                <span>{ride.destination_description ?? 'Unknown destination'}</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-brand-dark/10">
                            <span className="text-sm text-brand-dark/60">
                                {new Date(ride.origin_datetime).toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' })}
                            </span>
                            <span className="text-sm font-medium text-brand-navy bg-brand-navy/10 px-3 py-1 rounded-full">
                                {seatCounter} {seatCounter === 1 ? 'seat' : 'seats'} available
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-6">

                    {/* Users */}
                    <div className="border border-brand-dark/10 rounded-lg p-6 bg-white shadow-sm">
                        <h2 className="font-display text-lg font-semibold text-brand-navy mb-4">
                        Who's Joining
                        </h2>

                        {usersJoined.length === 0 ? (
                        <p className="text-brand-dark/50 text-sm">
                            No one has joined yet. Be the first!
                        </p>
                        ) : (
                        <ul className="flex flex-col gap-2">
                            {usersJoined.map((user: JoinedRide['joined_ride']['Row']) => (
                            <li key={user.joined_id} className="flex items-center justify-between py-3 border-b border-brand-dark/10 last:border-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center">
                                        <span className="text-brand-navy text-xs font-semibold">
                                        {user.name_user_joined.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <span className="text-sm font-medium text-brand-dark">
                                        {user.name_user_joined}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-brand-dark/60">
                                    {user.contact_user_joined}
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-brand-dark/20 flex items-center justify-center">
                                        <IoCall className="h-5 w-5"/>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Form */}
                
                <div className="border border-brand-dark/10 rounded-lg p-6 bg-white shadow-sm">
                    <h2 className="font-display text-lg font-semibold text-brand-navy mb-4">
                        Join
                    </h2>
                    <FormJoin id={car_ride_id} reff={setReload} /> 
                </div>
                </div>

            </div>

                
        </div>
      </div>
    )
};