import { Link } from 'react-router-dom'

export default function Footer() {

  return (
    <footer className="bg-brand-dark">
        <div className="max-w-5xl mx-auto px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-6">
    
                        {/* Logo y copyright */}
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-brand-light flex items-center justify-center">
                                <img src="/faviconOnmoveClean.png" alt="OnMove logo" className="h-5 w-auto" />
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
  )
}
