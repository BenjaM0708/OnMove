import React, { JSX, useEffect, useState } from 'react'
import MiniMap from '../features/map/MiniMap'

type submitFunction = (e: React.FormEvent<HTMLFormElement>) => any

export default function FormPost({ submitFunction, uploadCoordFunction } : {submitFunction: submitFunction, uploadCoordFunction: any} ): JSX.Element {
    
    const [flowOnClickAdd, setFlowOnClickAdd] = React.useState<'origin' | 'destination' | 'done'>('origin')

    const [inputOriginStatus, setInputOriginStatus] = useState<boolean>(false)
    const [inputDestinationStatus, setInputDestinationStatus] = useState<boolean>(false)


    return(
        <div className="min-h-screen bg-brand-light pt-20 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start py-16">
            
            {/* Left Col - Form */}
            <div className="flex flex-col gap-6">
                <div className="w-12 h-1 bg-brand-gold rounded-full">&nbsp;</div>
                    <h1 className="font-display text-4xl font-semibold text-brand-navy leading-tight">
                        Post a Ride
                    </h1>
                    <p className="text-brand-dark/90 text-base leading-relaxed">
                        Share your route and let others join you. Fill in the details and we'll match you with people heading the same way.
                    </p>

                    <div className='relative border-4 border-brand-navy mt-4'>
                        {/*Note that 'uploadCoordFunction' is just a name to the parameter and prop. In this case
                        is the same for both. It coul be change in line 6 renaming the second parameter
                        and changing in line 22 the prop's name. Both with the same new name*/}
                        
                        <MiniMap 
                            uploadCoordFunction={uploadCoordFunction}
                            flowInfo={flowOnClickAdd}
                            flowInfoFunction={setFlowOnClickAdd}
                        />
                        
                    </div>
                    
                    <div className="flex flex-col gap-2 mt-4">
                        <div className="flex items-center gap-3 text-brand-dark/90 text-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-gold" />
                        Define your origin and destination
                        </div>
                        <div className="flex items-center gap-3 text-brand-dark/90 text-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-gold" />
                        Set the date and available seats
                        </div>
                        <div className="flex items-center gap-3 text-brand-dark/90 text-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-gold" />
                        Other users will be able to join
                    </div>

                </div>
            </div>

            {/* Right Col - Form */}
            <form onSubmit={submitFunction} className="flex flex-col gap-5">

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-brand-dark">
                    Your name
                    </label>
                    <input
                    type="text"
                    name="name"
                    required
                    placeholder="Benji"
                    className="border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-brand-dark">
                    Contact
                    </label>
                    <input
                    type="tel"
                    name="contact"
                    required
                    placeholder="600 000 000"
                    pattern="[0-9]{9}"
                    className="border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-brand-dark">
                    Origin
                    </label>
                    <div className="grid grid-cols-4 gap-4">
                        <input
                        type="text"
                        name="origin"
                        onFocus={()=>setInputOriginStatus(true)}
                        onBlur={()=>setInputOriginStatus(false)}
                        required
                        placeholder="Puerta de Toledo"
                        className="col-span-3 border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors"
                        />
                        <div className="col-span-1 flex items-center justify-center border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors">
                            <div className='grid grid-cols-2 gap-4'>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-6 w-6 ${!inputOriginStatus ? 'text-brand-dark/20' : 'text-brand-gold'} transition-colors duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <button  
                                    type='button'
                                    onClick={()=>{
                                        null
                                    }}>
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-brand-dark">
                    Destination
                    </label>
                    <div className="grid grid-cols-4 gap-4">
                        <input
                        type="text"
                        name="destination"
                        onFocus={()=>setInputDestinationStatus(true)}
                        onBlur={()=>setInputDestinationStatus(false)}
                        required
                        placeholder="Gran Vía"
                        className="col-span-3 border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors"
                        />
                        <div className="col-span-1 flex items-center justify-center border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors">
                            <div className='grid grid-cols-2 gap-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${!inputDestinationStatus ? 'text-brand-dark/20' : 'text-brand-gold'} transition-colors duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <button
                                    type='button'
                                    onClick={()=>null}>
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">    
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-brand-dark">
                        Time
                        </label>
                        <input
                        type="datetime-local"
                        name="time"
                        required
                        className="border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-brand-dark">
                        Available Seast
                        </label>
                        <input
                        type="number"
                        name="seat"
                        required
                        placeholder="3"
                        className="border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-2 bg-brand-navy text-brand-light font-medium text-sm py-3 px-6 rounded-md hover:bg-brand-navy/80 transition-colors">
                    Post Ride
                </button>

            </form>
          </div>
        </div>
    )
}