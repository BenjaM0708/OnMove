import { supabase } from '../services/supabase'
import { Database } from "../types/types";

type RideDataPost = Database['public']['Tables']['car_ride']['Insert']

export const funcPostRide = async (dataPost: RideDataPost) : Promise<void> => {
    const { error } = await supabase
        .from('car_ride')
        .insert(dataPost)

    if (error) {
      alert("Something Wrong Happened. That Ride couldn't be Posted. Please Try Again")
      console.error('Error:', error.message, error.details)
      return
    }
    if (dataPost){
      alert('Your ride has been posted successfully!')
      console.log('Data posted', dataPost)
    }
}