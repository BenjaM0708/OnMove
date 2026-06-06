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
    logo: isHome ? "text-brand-dark" : "text-brand-cream"
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md
      ${scrolledNavbar
        ? `${theme.navScroll} mx-4 mt-3 rounded-full px-2 opacity-70`
        : theme.nav
      }
    `}>
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">

        <Link to="/" className={`font-display text-2xl font-bold ${theme.logo} flex items-center gap-2`}>
          OnMove
        </Link>

        <div className="flex items-center gap-4">

          <div className="hidden md:flex items-center gap-8">
            <Link to="/home" className={`text-sm transition-colors ${theme.text}`}>Home</Link>
            <Link to="/map_page" className={`text-sm transition-colors ${theme.text}`}>Map</Link>
            <Link to='/rides' className={`text-sm transition-colors ${theme.text}`}>Rides</Link>
            <Link to="/about" className={`text-sm px-5 py-2 rounded-full transition-colors ${theme.button}`}>About</Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${theme.text}`}>
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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