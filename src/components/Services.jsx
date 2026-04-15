import {
    Sparkles,
    Droplets,
    Flower2,
    Heart,
    Wind,
    Moon
} from 'lucide-react'
import { Link } from 'react-router-dom'

function Services() {
    const services = [
        {
            icon: Droplets,
            title: 'Hydrotherapy',
            description: 'Revitalize your body with our therapeutic water treatments designed to soothe muscles and improve circulation.',
            image: '/gallery-photo2.jpeg',
        },
        {
            icon: Flower2,
            title: 'Aromatherapy Massage',
            description: 'Experience deep relaxation with essential oils that calm the mind and rejuvenate the spirit.',
            image: '/gallery-photo3.jpeg',
        },
        {
            icon: Heart,
            title: 'Holistic Healing',
            description: 'Ancient healing techniques combined with modern wellness practices for complete mind-body balance.',
            image: '/gallery-photo4.jpeg',
        },
        {
            icon: Wind,
            title: 'Breathwork Sessions',
            description: 'Master the art of conscious breathing to reduce stress and enhance mental clarity.',
            image: '/gallery-photo5.jpeg',
        },
        {
            icon: Moon,
            title: 'Sleep Therapy',
            description: 'Restore your natural sleep cycle with our specialized treatments for deep, restorative rest.',
            image: '/gallery-photo6.jpeg',
        },
        {
            icon: Sparkles,
            title: 'Signature Facial',
            description: 'Luxurious facial treatments using premium organic products for radiant, glowing skin.',
            image: '/gallery-photo1.jpeg',
        },
    ]

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF9F7] dark:bg-[#1A1A1A]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <div className="inline-flex items-center space-x-2 bg-[#E8D8C3]/30 dark:bg-[#2A5A3A]/30 px-4 py-2 rounded-full mb-4">
                        <Sparkles className="w-4 h-4 text-[#C8A96A]" />
                        <span className="text-sm font-medium text-[#1F3D2B] dark:text-[#E8D8C3]">Our Premium Services</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-light text-[#2B2B2B] dark:text-[#F5F5F5] mb-4">
                        Curated Wellness
                        <span className="block font-medium text-[#C8A96A] mt-2">Experiences</span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Discover our signature treatments designed to nurture your body, mind, and spirit
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-[#2B2B2B] rounded-3xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                {/* Icon */}
                                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white dark:bg-[#1A1A1A] rounded-2xl flex items-center justify-center shadow-lg">
                                    <service.icon className="w-6 h-6 text-[#C8A96A]" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-3 group-hover:text-[#C8A96A] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>

                                <Link
                                    to="/services"
                                    className="inline-flex items-center text-[#C8A96A] font-medium text-sm group-hover:gap-2 transition-all"
                                >
                                    Learn More
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link
                        to="/services"
                        className="inline-flex items-center space-x-2 bg-transparent border-2 border-[#C8A96A] text-[#C8A96A] px-8 py-3 rounded-full font-medium hover:bg-[#C8A96A] hover:text-white transition-all"
                    >
                        <span>View All Services</span>
                        <Sparkles className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Services