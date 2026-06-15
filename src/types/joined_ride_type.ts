export type JoinedRide = {
    joined_ride: {
        Row: {
          joined_id: bigint
          ride_id: bigint
          name_user_joined: string
          contact_user_joined: string
        }
        Insert: {
        joined_id?: never
        ride_id: bigint
        name_user_joined: string
        contact_user_joined: string
        }
        Update: {
          joined_id?: never
          ride_id?: bigint
          name_user_joined?: string
          contact_user_joined?: string
        }
    }
}
