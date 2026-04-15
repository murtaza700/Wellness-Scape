import { useState } from 'react'
import {
    Droplets,
    Flower2,
    Heart,
    Wind,
    Moon,
    Sparkles,
    Search
} from 'lucide-react'

function Services() {
    const [filter, setFilter] = useState('all')

    const categories = [
        { id: 'all', name: 'All Services' },
        { id: 'massage', name: 'Massage Therapy' },
        { id: 'facial', name: 'Facial Treatments' },
        { id: 'holistic', name: 'Holistic Healing' },
    ]

    const services = [
        {
            id: 1,
            category: 'massage',
            icon: Droplets,
            title: 'Hydrotherapy Massage',
            description: 'Therapeutic water massage that relieves muscle tension and improves circulation using warm water jets and gentle pressure.',
            duration: '60 min',
            price: 'AED 450',
            image: '/gallery-photo2.jpeg',
        },
        {
            id: 2,
            category: 'massage',
            icon: Flower2,
            title: 'Aromatherapy Massage',
            description: 'Deeply relaxing massage using premium essential oils tailored to your needs for complete mind-body rejuvenation.',
            duration: '90 min',
            price: 'AED 550',
            image: '/gallery-photo3.jpeg',
        },
        {
            id: 3,
            category: 'holistic',
            icon: Heart,
            title: 'Holistic Healing Session',
            description: 'Comprehensive wellness assessment and treatment combining energy healing, meditation, and lifestyle guidance.',
            duration: '120 min',
            price: 'AED 650',
            image: '/gallery-photo4.jpeg',
        },
        {
            id: 4,
            category: 'holistic',
            icon: Wind,
            title: 'Breathwork & Meditation',
            description: 'Guided breathwork and meditation sessions designed to reduce stress, increase focus, and promote inner peace.',
            duration: '45 min',
            price: 'AED 300',
            image: '/gallery-photo5.jpeg',
        },
        {
            id: 5,
            category: 'holistic',
            icon: Moon,
            title: 'Sleep Therapy Program',
            description: 'Personalized sleep improvement program including consultation, therapy sessions, and lifestyle recommendations.',
            duration: '90 min',
            price: 'AED 500',
            image: '/gallery-photo6.jpeg',
        },
        {
            id: 6,
            category: 'facial',
            icon: Sparkles,
            title: 'Signature Radiance Facial',
            description: 'Luxurious facial treatment using premium organic products and advanced techniques for glowing, youthful skin.',
            duration: '75 min',
            price: 'AED 480',
            image: '/gallery-photo1.jpeg',
        },
    ]

    const filteredServices = filter === 'all'
        ? services
        : services.filter(service => service.category === filter)

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/services-bg.jpeg"
                        alt="Our Services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-luxury"></div>
                </div>

                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-light mb-4 animate-fadeInUp">
                        Our <span className="font-medium text-[#C8A96A]">Services</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fadeInUp animation-delay-100">
                        Discover our comprehensive range of wellness treatments designed for your complete rejuvenation
                    </p>
                </div>
            </section>

            {/* Services Listing */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF9F7] dark:bg-[#1A1A1A]">
                <div className="max-w-7xl mx-auto">
                    {/* Filter */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setFilter(category.id)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === category.id
                                    ? 'bg-[#C8A96A] text-white shadow-lg'
                                    : 'bg-white dark:bg-[#2B2B2B] text-[#2B2B2B] dark:text-[#F5F5F5] hover:bg-[#E8D8C3]/20'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service, index) => (
                            <div
                                key={service.id}
                                className="bg-white dark:bg-[#2B2B2B] rounded-3xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-[#E8D8C3]/30 dark:bg-[#2A5A3A]/30 rounded-2xl flex items-center justify-center">
                                                <service.icon className="w-6 h-6 text-[#C8A96A]" />
                                            </div>
                                            <h3 className="text-xl font-medium text-[#2B2B2B] dark:text-[#F5F5F5]">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            {service.duration}
                                        </div>
                                        <div className="text-lg font-medium text-[#C8A96A]">
                                            {service.price}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Services