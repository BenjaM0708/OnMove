import { supabase } from '../services/supabase'
import { JoinedRide } from '../types/joined_ride_type'  

type RideDataJoin = JoinedRide['joined_ride']['Insert']

export const funcJoinRide = async (dataPost: RideDataJoin) : Promise<void> => {
    const { error } = await supabase
        .from('joined_ride')
        .insert(dataPost)

    if (error) {
      alert("Something Wrong Happened. You couldn't be Joined. Please Try Again")
      console.error('Error:', error.message, error.details)
      return
    }
    if (dataPost){
      alert('You went joined successfully!')
      console.log('Data posted', dataPost)
    }
}