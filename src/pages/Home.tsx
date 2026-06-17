import { Card } from 'flowbite-react'
import { Link } from 'react-router-dom'
import logoOnmove from '../assets/LogoPrincipalOnmove.png'


const cardTheme = {
    root: {
        base: "flex flex-col gap-4 p-6 bg-brand-navy rounded-2xl border-none shadow-2xl",
        children: "flex flex-col gap-3",
        horizontal: {
            off: "flex-col",
            on: "flex-col lg:flex-row"
        }
    }
}

const cardThemeHighlight = {
    root: {
        base: "flex flex-col gap-4 p-6 !bg-white rounded-2xl border-none shadow-2xl",
        children: "flex flex-col gap-3",
        horizontal: {
            off: "flex-col",
            on: "flex-col lg:flex-row"
        }
    }
}

export default function Home() {
    return (
        <div className="min-h-screen bg-brand-light">

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-[url('/Hero-bg.jpg')] bg-cover bg-center bg-no-repeat w-full">

                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/70"></div>

                <div className="z-10 relativeflex flex-col items-center gap-6 text-center px-6 max-w-3xl">
                    <div className='h-[300px] md:h-[450px] lg:h-[460px] w-auto overflow-hidden flex items-center justify-center'>
                        <img src={logoOnmove} alt="Onmove logo"
                            className='h-full shadow-lg brightness-110' />
                    </div>
                    <div className='-mt-14 md:-mt-[120px]'>
                        <h1 className="font-display text-4xl font-bold text-brand-light leading-tight text-s">
                            Move together, <span className="text-brand-gold ">Save together</span>
                        </h1>
                        <p className="text-brand-light/80 text-base mt-3 md:text-lg">
                            Share your ride or find one nearby fast, simple, and free.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative h-[40vh] md:h-[30vh] flex items-end justify-center">
                <div className='h-20 w-full bg-brand-navy '></div>
            </section>

            {/* Presentation */}
            <section className="bg-brand-navy">
                <div className="mas-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-2xl h-80 md: h-86 overflow-hidden shadow-xl">
                        <img src="/presentation-home-picture.jpg" alt='People talking in a car' className='h-full w-full object-cover object-top' />
                    </div>
                    {/* Text */}
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-1 bg-brand-gold rounded-full">&nbsp;</div>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-light leading-tight">
                            What is OnMove?
                        </h2>
                        <p className="text-brand-light/70 text-base leading-relaxed">
                            OnMove is a community-driven ride sharing platform. Connect with people heading your way, split the cost, and make every journey count.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección 3 - Consigue tu viaje */}
            <section className="bg-brand-light">
                <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Texto izquierda */}
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-1 bg-brand-gold rounded-full">&nbsp;</div>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-navy leading-tight">
                            Find your ride
                        </h2>
                        <p className="text-brand-dark/70 text-base leading-relaxed">
                            Browse available rides near you in real time. Find someone heading your way and join them in just a few taps.
                        </p>

                        <Link to='/map_page'>
                            <button className="mt-2 w-fit bg-brand-navy text-brand-light text-sm font-medium px-6 py-3 rounded-md hover:bg-brand-navy/80 transition-colors">
                                Browse rides
                            </button>
                        </Link>
                    </div>

                    {/* Imagen placeholder derecha */}
                    <div className="rounded-2xl h-80 md:h-[350px] overflow-hidden shadow-xl order-first md:order-last">
                        <img src="browse-home-picture.png" alt="Cars on the route" className="h-full w-full object-cover object-center" />
                    </div>
                </div>
            </section>

            {/* Sección 4 - Ayuda a otros */}
            <section className="bg-brand-dark">
                <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Imagen placeholder izquierda */}
                    <div className="rounded-2xl h-80 md:h-[350px] overflow-hidden shadow-xl">
                        <img src="post-home-picture.png" alt='GPS with a route on it' className='h-full w-full object-cover object-center' />
                    </div>

                    {/* Texto derecha */}
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-1 bg-brand-gold rounded-full">&nbsp;</div>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-light leading-tight">
                            Help others get there
                        </h2>
                        <p className="text-brand-light/70 text-base leading-relaxed">
                            Post your route and let others join you. Share the journey, reduce costs, and make a difference for someone heading your way.
                        </p>

                        <Link to="post_ride_page">
                            <button className="mt-2 w-fit bg-brand-gold text-brand-light text-sm font-medium px-6 py-3 rounded-md hover:bg-brand-gold/80 transition-colors">
                                Post a ride
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Beneficios */}
            <section className="flex flex-col items-center justify-center">
                <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/*Cards */}
                    <Card
                        theme={cardTheme}
                        className="max-w-sm"
                    >
                        <div className="w-10 h-10 rounded-full bg-brand-light/10 flex items-center justify-center shadow-md">
                            <span className="text-lg">📍</span>
                        </div>
                        <h5 className="font-display text-lg font-semibold text-brand-gold">
                            Find a solution fast
                        </h5>
                        <p className="text-brand-light text-base leading-relaxed">
                            See available rides near you in real time and connect with drivers heading your way instantly.
                        </p>
                    </Card>
                    <Card theme={cardThemeHighlight} className="max-w-sm">
                        <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center shadow-md">
                            <span className="text-lg">💸</span>
                        </div>
                        <h5 className="font-display text-lg font-semibold text-brand-gold">
                            Travel for free
                        </h5>
                        <p className="text-brand-dark/70 text-base leading-relaxed ">
                            No fees, no subscriptions. Share the journey and split costs naturally with people going your way.
                        </p>
                    </Card>
                    <Card theme={cardTheme} className="max-w-sm">
                        <div className="w-10 h-10 rounded-full bg-brand-light/10 flex items-center justify-center shadow-md">
                            <span className="text-lg">🤝</span>
                        </div>
                        <h5 className="font-display text-lg font-semibold text-brand-gold">
                            Connect with others
                        </h5>
                        <p className="text-brand-light text-base leading-relaxed">
                            Build real connections with people in your community. Every ride is an opportunity to meet someone new.
                        </p>
                    </Card>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-brand-dark">
                <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Logo y copyright */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center">
                            <img src="/faviconOnmoveClean.png" alt="OnMove logo" className="h-6 w-auto" />
                        </div>
                        <span className="font-display text-brand-light font-semibold">OnMove</span>
                        <span className="text-brand-light/40 text-sm ml-2">© 2026</span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <Link to="/terms" className="text-brand-light/60 text-sm hover:text-brand-light transition-colors">
                            Terms & Conditions
                        </Link>
                        <Link to="/privacy" className="text-brand-light/60 text-sm hover:text-brand-light transition-colors">
                            Privacy Policy
                        </Link>
                    </div>

                </div>
            </footer>

        </div>
    )
}