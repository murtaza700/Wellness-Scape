import { Check, Sparkles, Crown, Gem } from 'lucide-react'
import { Link } from 'react-router-dom'

function Packages() {
    const packages = [
        {
            name: 'Serenity',
            icon: Sparkles,
            price: 'AED 890',
            description: 'Perfect for a quick wellness escape',
            popular: false,
            features: [
                '60-min Aromatherapy Massage',
                '30-min Express Facial',
                'Herbal Tea Service',
                'Access to Relaxation Lounge',
                'Welcome Gift',
            ],
        },
        {
            name: 'Harmony',
            icon: Crown,
            price: 'AED 1,490',
            description: 'Our most popular wellness journey',
            popular: true,
            features: [
                '90-min Hydrotherapy Session',
                '75-min Signature Facial',
                '45-min Breathwork Session',
                'Organic Lunch',
                'Access to All Facilities',
                'Personalized Wellness Plan',
                'Premium Gift Set',
            ],
        },
        {
            name: 'Transformation',
            icon: Gem,
            price: 'AED 2,490',
            description: 'The ultimate luxury wellness experience',
            popular: false,
            features: [
                '120-min Holistic Healing',
                '90-min Deep Tissue Massage',
                '90-min Anti-Aging Facial',
                'Private Meditation Session',
                'Gourmet Organic Lunch',
                'Access to VIP Lounge',
                'Personal Wellness Coach',
                'Take-Home Ritual Kit',
                'Follow-up Consultation',
            ],
        },
    ]

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/hero-img.jpeg"
                        alt="Wellness Packages"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-luxury"></div>
                </div>

                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-light mb-4 animate-fadeInUp">
                        Wellness <span className="font-medium text-[#C8A96A]">Packages</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fadeInUp animation-delay-100">
                        Choose your perfect wellness journey with our curated packages
                    </p>
                </div>
            </section>

            {/* Packages Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF9F7] dark:bg-[#1A1A1A]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`relative bg-white dark:bg-[#2B2B2B] rounded-3xl p-8 shadow-card hover:shadow-premium transition-all duration-300 ${pkg.popular ? 'border-2 border-[#C8A96A] scale-105 md:scale-110' : ''
                                    } animate-fadeInUp`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#C8A96A] to-[#D4B87A] text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                                        Most Popular
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <div className="inline-flex p-3 bg-[#E8D8C3]/30 dark:bg-[#2A5A3A]/30 rounded-2xl mb-4">
                                        <pkg.icon className="w-8 h-8 text-[#C8A96A]" />
                                    </div>
                                    <h3 className="text-2xl font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">
                                        {pkg.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        {pkg.description}
                                    </p>
                                    <div className="text-4xl font-light text-[#C8A96A] mb-2">
                                        {pkg.price}
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <Check className="w-5 h-5 text-[#C8A96A] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/contact"
                                    className={`block w-full text-center py-3 rounded-full font-medium transition-all ${pkg.popular
                                        ? 'bg-[#C8A96A] text-white hover:bg-[#B89B5A] shadow-lg'
                                        : 'border-2 border-[#C8A96A] text-[#C8A96A] hover:bg-[#C8A96A] hover:text-white'
                                        }`}
                                >
                                    Choose Package
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Custom Package CTA */}
                    <div className="text-center mt-16">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Looking for something more personalized?
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center space-x-2 bg-transparent border-2 border-[#C8A96A] text-[#C8A96A] px-8 py-3 rounded-full font-medium hover:bg-[#C8A96A] hover:text-white transition-all"
                        >
                            <span>Contact us for custom packages</span>
                            <Sparkles className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Packages