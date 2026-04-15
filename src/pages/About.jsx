import { Award, Users, Target, Sparkles, CheckCircle } from 'lucide-react'

function About() {
    const highlights = [
        '15+ years of wellness excellence',
        '50+ certified therapists',
        '10,000+ satisfied clients',
        'Award-winning facility',
        'Eco-friendly practices',
        'Customized treatment plans',
    ]

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/hero-img.jpeg"
                        alt="About Wellness Scape"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-luxury"></div>
                </div>

                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-light mb-4 animate-fadeInUp">
                        About <span className="font-medium text-[#C8A96A]">Wellness Scape</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fadeInUp animation-delay-100">
                        Your sanctuary for holistic wellness and transformative healing in the heart of UAE
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF9F7] dark:bg-[#1A1A1A]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Image */}
                        <div className="relative animate-fadeInUp">
                            <img
                                src="/gallery-photo2.jpeg"
                                alt="Our Story"
                                className="rounded-3xl shadow-premium"
                            />

                            <div className="absolute -bottom-6 -right-6 bg-[#C8A96A] p-8 rounded-3xl shadow-xl hidden lg:block">
                                <Sparkles className="w-8 h-8 text-white mb-2" />
                                <div className="text-white text-3xl font-medium">15+</div>
                                <div className="text-white/90 text-sm">Years of Excellence</div>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-8 animate-fadeInUp animation-delay-100">
                            <div>
                                <div className="inline-flex items-center space-x-2 bg-[#E8D8C3]/30 dark:bg-[#2A5A3A]/30 px-4 py-2 rounded-full mb-4">
                                    <Sparkles className="w-4 h-4 text-[#C8A96A]" />
                                    <span className="text-sm font-medium text-[#1F3D2B] dark:text-[#E8D8C3]">Our Story</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-light text-[#2B2B2B] dark:text-[#F5F5F5] mb-4">
                                    A Legacy of
                                    <span className="block font-medium text-[#C8A96A]">Wellness & Healing</span>
                                </h2>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Founded in 2009, Wellness Scape emerged from a vision to create a sanctuary where ancient healing traditions meet modern wellness practices. Our journey began with a simple belief: true wellness encompasses mind, body, and spirit.
                                </p>
                            </div>

                            {/* Mission & Vision */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-[#2B2B2B] p-6 rounded-2xl shadow-card">
                                    <Target className="w-8 h-8 text-[#C8A96A] mb-3" />
                                    <h3 className="text-lg font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">Our Mission</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        To provide transformative wellness experiences that restore balance and enhance quality of life.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-[#2B2B2B] p-6 rounded-2xl shadow-card">
                                    <Award className="w-8 h-8 text-[#C8A96A] mb-3" />
                                    <h3 className="text-lg font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">Our Vision</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        To be the leading wellness destination in the Middle East, recognized for excellence and innovation.
                                    </p>
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="bg-[#E8D8C3]/20 dark:bg-[#2A5A3A]/20 p-6 rounded-2xl">
                                <h3 className="font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-4 flex items-center">
                                    <Users className="w-5 h-5 text-[#C8A96A] mr-2" />
                                    Why Choose Wellness Scape
                                </h3>

                                <div className="grid grid-cols-2 gap-3">
                                    {highlights.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-[#C8A96A] flex-shrink-0" />
                                            <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About