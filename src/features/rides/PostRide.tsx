

export default function PostRide(){

    const han = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        console.log(Object.fromEntries(formData))
    }

    return(
        <div className="min-h-screen bg-brand-light pt-24 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start py-16">
            
            {/* Columna izquierda */}
            <div className="flex flex-col gap-6 sticky top-24">
                <div className="w-12 h-1 bg-brand-gold rounded-full">&nbsp;</div>
                    <h1 className="font-display text-4xl font-semibold text-brand-navy leading-tight">
                        Post a Ride
                    </h1>
                    <p className="text-brand-dark/70 text-base leading-relaxed">
                        Share your route and let others join you. Fill in the details and we'll match you with people heading the same way.
                    </p>
                    <div className="flex flex-col gap-2 mt-4">
                        <div className="flex items-center gap-3 text-brand-dark/60 text-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-gold" />
                        Define your origin and destination
                        </div>
                        <div className="flex items-center gap-3 text-brand-dark/60 text-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-gold" />
                        Set the date and available seats
                        </div>
                        <div className="flex items-center gap-3 text-brand-dark/60 text-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-gold" />
                        Other users will be able to join
                    </div>
                </div>
            </div>
            
            <form onSubmit={han}>
                <label>Name: <input type="text" name="name" required/></label>
                <label>Contact: <input type="tel" name="contact" required/></label>
                <label>Origin: <input type="text" name="origin" required/></label>
                <label>Destination: <input type="text" name="destination" required/></label>
                <label>Time: <input type="datetime-local" name="time" required/></label>
                <label>Seats: <input type="number" name="seat" required/></label>
                <button type="submit">Join</button>
                </form>
          </div>
        </div>
    )
}