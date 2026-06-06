import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const [scrolledNavbar, setScrolledNavbar] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathLocation = useLocation()
  const isHome = pathLocation.pathname === "/"

  const theme = {
    nav: isHome ? "bg-brand-cream/90 border-b border-gray-100" : "bg-brand-dark border-b border-brand-dark",
    navScroll: isHome ? "bg-brand-cream/95 shadow-md" : "bg-brand-dark/95 shadow-md",
    text: isHome ? "text-brand-dark hover:text-brand-dark/60" : "text-brand-cream hover:text-brand-cream/60",
    button: isHome ? "bg-brand-dark text-brand-cream hover:bg-brand-dark/80" : "bg-brand-cream text-brand-dark hover:bg-brand-cream/80",
    logo: isHome ? "text-brand-dark" : "text-brand-cream",
    img: isHome ? "/faviconOnmoveClean.png" : "/Gold-Onmove.png"
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolledNavbar(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathLocation])

  return (
    <nav className={`relative fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md
      ${scrolledNavbar
        ? `${theme.navScroll} mx-4 mt-3 rounded-full px-2 opacity-70`
        : theme.nav
      }
    `}>
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">

        <Link to="/" className={`font-display text-2xl font-bold ${theme.logo} flex items-center gap-2`}>
          <img src={theme.img} alt="logo" className="h-8 w-auto"/>
          OnMove
        </Link>

        <div className={`md:hidden absolute top-full left-0 right-0 shadow-lg backdrop-blur-md
          overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          ${isHome ? "bg-brand-cream/95" : "bg-brand-dark/95"}`}>

          <div className="px-6 py-6 flex flex-col gap-1">
            <Link to="/home" className={`py-2 text-base transition-colors ${isHome ? "border-brand-dark/10" : "border-brand-cream/10"} ${theme.text}`}>Home</Link>
            <Link to="/map_page" className={`py-2 text-base transition-colors ${isHome ? "border-brand-dark/10" : "border-brand-cream/10"} ${theme.text}`}>Map</Link>
            <Link to='/rides' className={`py-2 text-base transition-colors ${isHome ? "border-brand-dark/10" : "border-brand-cream/10"} ${theme.text}`}>Rides</Link>
            <Link to="/about" className={`mt-2 py-3 text-base text-center rounded-full transition-colors ${theme.button}`}>About</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">

          <div className="hidden md:flex items-center gap-8">
            <Link to="/home" className={`text-sm transition-colors ${theme.text}`}>Home</Link>
            <Link to="/map_page" className={`text-sm transition-colors ${theme.text}`}>Map</Link>
            <Link to='/rides' className={`text-sm transition-colors ${theme.text}`}>Rides</Link>
            <Link to="/about" className={`text-sm px-5 py-2 rounded-full transition-colors ${theme.button}`}>About</Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${theme.text} ${isHome ? 'hover:bg-brand-dark/10' : 'hover:bg-white/10'}`}>
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;