import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useGRide } from "../hooks/useGRide"
import { useGetJoined } from "../hooks/useGetJoined"
import RideMap from "../features/map/RideMap"
import FormJoin from "../components/FormJoin"

export default function RideDetailsPage() {
    
    // Get the Info of car_ride
    const { car_ride_id } = useParams()
    const ride = useGRide(`${car_ride_id}`)

    // Get the Info of joined_ride
    const usersJoined = useGetJoined(`${car_ride_id}`)

    // Map Object
    const mapObject = {
        origin_lat: ride.origin_location_lat,
        origin_lng: ride.origin_location_long,
        destination_lat: ride.destination_location_lat,
        destination_lng: ride.destination_location_long
    }

    return (
      <div className="min-h-screen bg-brand-light pt-24 px-6">
        <div className="max-w-5xl mx-auto py-16">
         
            {/* Header */}
            <div className="flex flex-col gap-2 mb-10">
                <div className="w-12 h-1 bg-brand-gold rounded-full">&nbsp;</div>
                <h1 className="font-display text-4xl font-semibold text-brand-navy leading-tight">
                    Join
                </h1>
                <p className="text-brand-dark/70 text-base">
                    Browse rides shared by the community and find your match.
                </p>
            </div>

            {/* Get Ride Section - Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                {/* Left*/}
                <div className="flex flex-col gap-6">
                    <div className="border border-brand-dark/10 rounded-lg p-6 bg-white shadow-sm">

                        {/* Conductor y hora */}
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-display font-semibold text-lg text-brand-navy">
                                {ride.driver_name}
                            </span>
                            <span className="text-sm text-brand-dark/60">
                                {new Date(ride.origin_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>

                        {/* Ride */}
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

                        {/* Time and Seats */}
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-brand-dark/10">
                            <span className="text-sm text-brand-dark/60">
                                {new Date(ride.origin_datetime).toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' })}
                            </span>
                            <span className="text-sm font-medium text-brand-navy bg-brand-navy/10 px-3 py-1 rounded-full">
                                {ride.free_seats} {ride.free_seats === 1 ? 'seat' : 'seats'} available
                            </span>
                        </div>
                    </div>

                    {/* RideMap */}
                     <div className="rounded-lg overflow-hidden border border-brand-dark/10 shadow-sm h-64 bg-brand-navy/10 flex items-center justify-center">
                        <RideMap mapObject={mapObject} />
                    </div>

                </div>

                {/* Right */}
                <div className="flex flex-col gap-6">

                    {/* Users Joined List */}
                     
                     {usersJoined.length === 0 ? (
                        <p className="text-brand-dark/50 text-sm">
                            No one has joined yet. Be the first!
                        </p>
                        ) : (
                        <ul className="flex flex-col gap-3">
                            {usersJoined.map((user: any) => (
                              <li key={user.id} className="flex items-center justify-between py-2 border-b border-brand-dark/10 last:border-0">
                                <span className="text-sm font-medium text-brand-dark">
                                    {user.name_user_joined}
                                </span>
                                <span className="text-sm text-brand-dark/60">
                                    {user.contact_user_joined}
                                </span>
                              </li>
                            ))}
                        </ul>
                    )}
                    

                    {/* Form */}
                    <div className="border border-brand-dark/10 rounded-lg p-6 bg-white shadow-sm">
                        <h2 className="font-display text-lg font-semibold text-brand-navy mb-4">
                        Join this ride
                        </h2>

                        <FormJoin id={car_ride_id} />
                    </div>
                </div>

            </div>

            {/* Get Joined Users Section*/}

            



        </div>
      </div>
    )
};