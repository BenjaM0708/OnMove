import { funcJoinRide } from "../functions/funcJoinRide";
import { JoinedRide } from "../types/joined_ride_type";

export default function FormJoin({ id, reff } : { id: string | undefined , reff: any }) {

    //Take the Information from user to send Supabase
        const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const form = e.currentTarget
            const formData = new FormData(form)

            const data: JoinedRide['joined_ride']['Insert'] = {
                name_user_joined: formData.get('name')?.toString() as string,
                contact_user_joined: formData.get('contact')?.toString() as string,
                ride_id: BigInt(id as string)
            }

            try {await funcJoinRide(data)
            } catch (error) {console.log('Something Wrong Happened. Try Again')}

            form.reset()
            reff((prev:boolean) => !prev)
            return
        }

    return(
      <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-brand-dark">Your name</label>
                    <input
                    type="text"
                    name="name"
                    required
                    placeholder="Álvaro"
                    className="border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-brand-dark">Contact</label>
                <input
                    type="tel"
                    name="contact"
                    required
                    placeholder="600 000 000"
                    pattern="[0-9]{9}"
                    className="border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors"
                />
            </div>

            <button
                type="submit"
                className="mt-2 bg-brand-navy text-brand-light font-medium text-sm py-3 px-6 rounded-md hover:bg-brand-navy/80 transition-colors">
                Join
            </button>

        </form>
      </>
    )
}