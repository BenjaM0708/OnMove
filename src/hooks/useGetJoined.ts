import { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import { JoinedRide } from '../types/joined_ride_type'

type UsersJoined = JoinedRide['joined_ride']['Row']

export function useGetJoined(id: string) {
    const [usersJoined, setUsersJoined] = useState({} as UsersJoined[])

    useEffect(() => {
        async function fetchUsersJoined(): Promise<void> {
            const { data, error } = await supabase
                .from('joined_ride')
                .select()
                .eq('ride_id', id);
            
            if (error) {
            console.error('Error:', error.message, error.details);
            return;
            }

            if (data) {
                console.log('Data recibed', data)
                setUsersJoined(data as UsersJoined[])
            }
        }
        fetchUsersJoined()
    }, [])

    return usersJoined;
}     