import React, { JSX, useState } from 'react'
import MiniMap from '../features/map/MiniMap'
import { IoCheckmarkCircle, IoReloadCircle, IoReload } from "react-icons/io5";

type submitFunction = (e: React.FormEvent<HTMLFormElement>) => any

export default function FormPost({ submitFunction, uploadCoordFunction } : {submitFunction: submitFunction, uploadCoordFunction: any} ): JSX.Element {

    //Controlthe flow in OnclickAdd
    const [flowOnClickAdd, setFlowOnClickAdd] = React.useState<'origin' | 'destination' | 'done'>('origin')

    //Reset function to location object
    const [resetLocationInfo, setResetLocationInfo] = React.useState<() => void>(() => {() => {}} )

    //Check this variables
    const [inputOriginStatus, setInputOriginStatus] = useState<boolean>(false)
    const [inputDestinationStatus, setInputDestinationStatus] = useState<boolean>(false)

    //SubmitFunction with locationInfo conditional. Without this info the form won't be submit
    const submitConditionalFunction = async (e: React.FormEvent<HTMLFormElement>) => {
        if(flowOnClickAdd === 'done'){
            await submitFunction(e)
            resetLocationInfo()
            alert("Ride Posted Successfully")
            return
        }
        // if not done, prompt user to select origin and destination
        if(flowOnClickAdd === 'origin' || flowOnClickAdd === 'destination'){
            alert('Please select origin and destination in the Map')
            //Use booleans variables boleanas to show/hidde a message with a setTimer
        } else{
            alert('Something Wrong Happened. Try Again')
            return
        }
    }

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

                    <div className='flex flex-col'>
                        <p className='font-display font-semibold text-brand-navy leading-tight'>Select your Places</p>
                        <p className='font-dispaly text-brand-dark leading-tight text-[10px] pt-1'>Enter the so origin first, then the destination</p>
                        <div className='rounded-lg overflow-hidden border-2 border-brand-navy/30 shadow-sm mt-4'>
                            {/*Note that 'uploadCoordFunction' is just a name to the parameter and prop. In this case
                            is the same for both. It coul be change in line 6 renaming the second parameter
                            and changing in line 22 the prop's name. Both with the same new name*/}
                        
                            <MiniMap 
                                uploadCoordFunction={uploadCoordFunction}
                                flowInfo={flowOnClickAdd}
                                flowInfoFunction={setFlowOnClickAdd}
                                resetLocation={setResetLocationInfo}
                            />
                        </div>

                        <button  
                            type='button'
                            className="mt-3 w-min flex grid-cols-2 gap-2 items-center bg-brand-navy text-brand-light font-medium text-base py-2 px-4 rounded-md hover:bg-brand-navy/80 transition-colors"
                            onClick={()=>{resetLocationInfo()}}>
                                Reset
                                <IoReload className='h-5 w-5 text-brand-gold' />
                        </button>
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
            <form onSubmit={submitConditionalFunction} className="flex flex-col gap-5">

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
                    placeholder="600 00 00 00"
                    pattern="[0-9]{9}"
                    className="border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-brand-dark">
                    Origin Name
                    </label>
                    <div className="grid grid-cols-5 gap-1">
                        <input
                        type="text"
                        name="origin"
                        onFocus={()=>setInputOriginStatus(true)}
                        onBlur={()=>setInputOriginStatus(false)}
                        required
                        placeholder="Puerta de Toledo"
                        className="col-span-4 border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors"
                        />
                        <div className="col-span-1 flex items-center justify-center px-4 py-3 text-sm text-brand-dark transition-colors">
                            <div className='flex items-center justify-center'>
                                <IoCheckmarkCircle className={`h-6 w-6 ${!inputOriginStatus ? 'text-brand-dark/20' : 'text-brand-gold/80'} ${(flowOnClickAdd === 'destination' || flowOnClickAdd === 'done') && "text-green-600"} transition-colors duration-200`} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-brand-dark">
                    Destination Name
                    </label>
                    <div className="grid grid-cols-5 gap-1">
                        <input
                        type="text"
                        name="destination"
                        onFocus={()=>setInputDestinationStatus(true)}
                        onBlur={()=>setInputDestinationStatus(false)}
                        required
                        placeholder="Gran Vía"
                        className="col-span-4 border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors"
                        />
                        <div className="col-span-1 flex items-center justify-center px-4 py-3 text-sm text-brand-dark transition-colors">
                            <div className='flex items-center justify-center'>
                              <IoCheckmarkCircle className={`h-6 w-6 ${!inputDestinationStatus ? 'text-brand-dark/20' : 'text-brand-gold'} ${flowOnClickAdd === 'done' && "text-green-600"} ransition-colors duration-200`} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">    
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