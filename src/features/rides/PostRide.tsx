

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
                    <p className="text-brand-dark/90 text-base leading-relaxed">
                        Share your route and let others join you. Fill in the details and we'll match you with people heading the same way.
                    </p>
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

            {/* Columna derecha - Formulario */}
            <form onSubmit={han} className="flex flex-col gap-5">

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
                    pattern="[0-9]{3} [0-9]{3} [0-9]{3}"
                    className="border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-1 relative">
                    <label className="text-sm font-medium text-brand-dark">
                    Origin
                    </label>
                    <input
                    type="text"
                    name="origin"
                    required
                    placeholder="Puerta de Toledo"
                    className="border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-brand-dark">
                    Destination
                    </label>
                    <input
                    type="text"
                    name="destination"
                    required
                    placeholder="Gran Vía"
                    className="border border-brand-dark/20 rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-navy transition-colors"
                    />
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