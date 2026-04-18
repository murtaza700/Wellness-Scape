import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    Menu,
    X,
    Phone,
    Sparkles
} from 'lucide-react'

function Navbar({ darkMode, toggleDarkMode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/packages', label: 'Packages' },
        { path: '/contact', label: 'Contact' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md shadow-premium py-3'
            : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <Sparkles className="w-8 h-8 text-[#C8A96A] group-hover:rotate-12 transition-transform" />
                        <span className="text-2xl font-light tracking-wide">
                            <span className="text-[#1F3D2B] dark:text-[#E8D8C3] font-medium">Wellness</span>
                            <span className="text-[#C8A96A] ml-1">Scape</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative text-sm font-medium transition-colors ${location.pathname === link.path
                                    ? 'text-[#C8A96A]'
                                    : 'text-[#2B2B2B] dark:text-[#F5F5F5] hover:text-[#C8A96A]'
                                    }`}
                            >
                                {link.label}
                                {location.pathname === link.path && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C8A96A] rounded-full"></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="hidden lg:flex items-center space-x-4">

                        <a
                            href="tel:+971123456789"
                            className="flex items-center space-x-2 text-[#1F3D2B] dark:text-[#E8D8C3] hover:text-[#C8A96A] transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="text-sm">+971 12 345 6789</span>
                        </a>

                        <Link
                            to="/contact"
                            className="bg-[#C8A96A] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B89B5A] transition-all hover:scale-105 shadow-lg"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center space-x-3">

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg hover:bg-[#E8D8C3]/20 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 text-[#1F3D2B] dark:text-[#E8D8C3]" />
                            ) : (
                                <Menu className="w-6 h-6 text-[#1F3D2B] dark:text-[#E8D8C3]" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#1A1A1A] shadow-xl animate-scaleIn">
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block py-2 text-base font-medium transition-colors ${location.pathname === link.path
                                        ? 'text-[#C8A96A]'
                                        : 'text-[#2B2B2B] dark:text-[#F5F5F5] hover:text-[#C8A96A]'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="pt-4 space-y-3">
                                <a
                                    href="tel:+971123456789"
                                    className="flex items-center space-x-2 text-[#1F3D2B] dark:text-[#E8D8C3]"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>+971 12 345 6789</span>
                                </a>

                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full bg-[#C8A96A] text-white px-6 py-3 rounded-full text-center font-medium hover:bg-[#B89B5A] transition-all"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar