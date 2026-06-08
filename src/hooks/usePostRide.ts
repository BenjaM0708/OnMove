import { supabase } from '../services/supabase'
import { Database } from "../types/types";

type RideDataPost = Database['public']['Tables']['car_ride']['Insert']

export const usePostRide = async (dataPost: RideDataPost) : Promise<void> => {
    const { error } = await supabase.from('car_ride').insert(dataPost)

    if (error) {
      console.error('Error:', error.message, error.details)
      return
    }
    if (dataPost){
      alert('Your ride has been posted successfully!')
      console.log('Data posted', dataPost)
    }
}