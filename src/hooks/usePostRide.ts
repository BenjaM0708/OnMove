import { supabase } from '../services/supabase'
import { Database } from "../types/types";

type RideDataPost = Database['public']['Tables']['car_ride']['Insert']

/*
{
    car_ride_id?: undefined;
    destination_description?: string | null | undefined;
    destination_location: unknown;
    driver_contact_details: string;
    driver_name: string;
    free_seats: number;
    origin_datetime: string;
    origin_description?: string | null | undefined;
    origin_location: unknown;
}
*/

/*Example from Supabase

(driver_name, driver_contact_details, origin_location, destination_location, origin_datetime, origin_description, destination_description, free_seats)
values
  ('Mónica', '+34 614 034 806', extensions.st_point(-3.264020460755966, 40.57609116340739), extensions.st_point(3.6969439472696877, 40.41903088870426), '2026-06-03 09:00:00+02', 'Azuqueca de Henares', 'Gran Vía', 3);


Example point insert

name: 'Supa Burger',
location: 'POINT(-73.946823 40.807416)'


*/


export const usePostRide = async (dataPost: RideDataPost) : Promise<void> => {
    const { error } = await supabase.from('car_ride').insert(dataPost)

    if (error) {
      console.error('Error:', error.message, error.details)
      return
    }
    if (dataPost){
      alert('Your ride has been posted successfully!')
    }
}