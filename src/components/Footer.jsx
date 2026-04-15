import { Link } from 'react-router-dom'
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa6";
import {
    Sparkles,
    MapPin,
    Phone,
    Mail,
    Heart
} from 'lucide-react'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#1F3D2B] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-2">
                            <Sparkles className="w-8 h-8 text-[#C8A96A]" />
                            <span className="text-2xl font-light tracking-wide">
                                <span className="text-white font-medium">Wellness</span>
                                <span className="text-[#C8A96A] ml-1">Scape</span>
                            </span>
                        </Link>

                        <p className="text-gray-300 text-sm leading-relaxed">
                            Your premier destination for holistic wellness and rejuvenation in the heart of UAE.
                            Experience transformative treatments in a serene, luxurious environment.
                        </p>

                        <div className="flex space-x-3">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C8A96A] transition-colors">
                                <FaFacebookF className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C8A96A] transition-colors">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C8A96A] transition-colors">
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C8A96A] transition-colors">
                                <FaYoutube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-medium mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Services', 'Packages', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link
                                        to={`/${link.toLowerCase()}`}
                                        className="text-gray-300 hover:text-[#C8A96A] transition-colors text-sm"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-medium mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-[#C8A96A] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm">
                                    Al Wasl Road, Jumeirah 1<br />
                                    Dubai, United Arab Emirates
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-[#C8A96A] flex-shrink-0" />
                                <a href="tel:+971123456789" className="text-gray-300 hover:text-[#C8A96A] transition-colors text-sm">
                                    +971 12 345 6789
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-[#C8A96A] flex-shrink-0" />
                                <a href="mailto:info@wellnessscape.ae" className="text-gray-300 hover:text-[#C8A96A] transition-colors text-sm">
                                    info@wellnessscape.ae
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-lg font-medium mb-6">Opening Hours</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between text-sm">
                                <span className="text-gray-300">Monday - Friday</span>
                                <span className="text-[#C8A96A]">9:00 AM - 9:00 PM</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span className="text-gray-300">Saturday</span>
                                <span className="text-[#C8A96A]">10:00 AM - 8:00 PM</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span className="text-gray-300">Sunday</span>
                                <span className="text-[#C8A96A]">11:00 AM - 7:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Wellness Scape UAE. All rights reserved.
                        </p>

                        <div className="flex items-center space-x-6">
                            <Link to="/privacy" className="text-gray-400 hover:text-[#C8A96A] text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-[#C8A96A] text-sm transition-colors">
                                Terms of Service
                            </Link>
                        </div>

                        <p className="text-gray-400 text-sm flex items-center">
                            Made with <Heart className="w-4 h-4 text-red-500 mx-1 fill-red-500" /> in UAE
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer