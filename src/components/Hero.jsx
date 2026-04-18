import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Star } from 'lucide-react'

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-img.jpeg"
                    alt="Luxury Spa"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-luxury"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white min-h-screen">
                <div className="flex items-center justify-center flex-col space-y-5 py-25 px-18 animate-fadeInUp min-h-screen">
                    {/* Badge */}
                    <div className="flex items-center justify-center space-x-2">
                        <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Sparkles className="w-4 h-4 text-[#C8A96A] mr-2" />
                            <span className="text-sm font-medium">Award Winning Wellness Center</span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-light leading-tight max-w-4xl mx-auto">
                        Rediscover Your
                        <span className="block font-medium text-[#C8A96A] mt-2">
                            Inner Harmony
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
                        Experience transformative wellness journeys tailored to restore balance,
                        vitality, and peace in the heart of UAE.
                    </p>

                    {/* Rating */}
                    <div className="flex items-center justify-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#C8A96A] text-[#C8A96A]" />
                                ))}
                            </div>
                            <span className="text-sm font-medium">4.9/5 from 2k+ reviews</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            to="/packages"
                            className="group bg-[#C8A96A] text-white w-full md:w-auto px-8 py-4 rounded-full text-lg font-medium hover:bg-[#B89B5A] transition-all hover:scale-105 shadow-xl flex items-center space-x-2"
                        >
                            <span>Explore Packages</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            to="/services"
                            className="bg-white/10 w-full md:w-auto backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-medium border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
                        >
                            View Services
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
                        <div className="text-center">
                            <div className="text-3xl font-medium text-[#C8A96A]">15+</div>
                            <div className="text-sm text-gray-300 mt-1">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-medium text-[#C8A96A]">50+</div>
                            <div className="text-sm text-gray-300 mt-1">Expert Therapists</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-medium text-[#C8A96A]">10k+</div>
                            <div className="text-sm text-gray-300 mt-1">Happy Clients</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero