import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const [scrolledNavbar, setScrolledNavbar] = useState(false)
  const pathLocation = useLocation()
  const isHome = pathLocation.pathname === "/" //Es un booleano

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md
      ${scrolledNavbar
        ? `${theme.navScroll} mx-4 mt-3 rounded-full px-2 opacity-70`
        : theme.nav
      }
    `}>
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">

        <Link to="/" className={`font-display text-2xl font-bold ${theme.logo}`}>
          Juicify
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className={`text-sm transition-colors ${theme.text}`}>
            Beneficios
          </Link>
          <Link to="/recipes" className={`text-sm transition-colors ${theme.text}`}>
            Recetas
          </Link>
          <Link to="/builder" className={`text-sm px-5 py-2 rounded-full transition-colors ${theme.button}`}>
            Crear zumo
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;