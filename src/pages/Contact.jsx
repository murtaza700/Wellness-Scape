import { useState } from 'react'
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageCircle,
    Send
} from 'lucide-react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const message = `Hello Wellness Scape!%0A%0A
      Name: ${formData.name}%0A
      Email: ${formData.email}%0A
      Phone: ${formData.phone}%0A
      Message: ${formData.message}`

        window.open(`https://wa.me/971123456789?text=${message}`, '_blank')
    }

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/hero-img.jpeg"
                        alt="Contact Us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-luxury"></div>
                </div>

                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-light mb-4 animate-fadeInUp">
                        Get in <span className="font-medium text-[#C8A96A]">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fadeInUp animation-delay-100">
                        We're here to answer any questions and help you start your wellness journey
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF9F7] dark:bg-[#1A1A1A]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Contact Info */}
                        <div className="space-y-8 animate-fadeInUp">
                            <div>
                                <h2 className="text-3xl font-light text-[#2B2B2B] dark:text-[#F5F5F5] mb-4">
                                    Let's <span className="font-medium text-[#C8A96A]">Connect</span>
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Visit our sanctuary or reach out to us through any of the following channels.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 p-6 bg-white dark:bg-[#2B2B2B] rounded-2xl shadow-card">
                                    <MapPin className="w-6 h-6 text-[#C8A96A] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">Visit Us</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Al Wasl Road, Jumeirah 1<br />
                                            Dubai, United Arab Emirates
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-6 bg-white dark:bg-[#2B2B2B] rounded-2xl shadow-card">
                                    <Phone className="w-6 h-6 text-[#C8A96A] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">Call Us</h4>
                                        <a href="tel:+971123456789" className="text-gray-600 dark:text-gray-400 text-sm hover:text-[#C8A96A]">
                                            +971 12 345 6789
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-6 bg-white dark:bg-[#2B2B2B] rounded-2xl shadow-card">
                                    <Mail className="w-6 h-6 text-[#C8A96A] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">Email Us</h4>
                                        <a href="mailto:info@wellnessscape" className="text-gray-600 dark:text-gray-400 text-sm hover:text-[#C8A96A]">
                                            info@wellnessscape
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-6 bg-white dark:bg-[#2B2B2B] rounded-2xl shadow-card">
                                    <Clock className="w-6 h-6 text-[#C8A96A] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">Opening Hours</h4>
                                        <div className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                            <p>Mon - Fri: 9:00 AM - 9:00 PM</p>
                                            <p>Saturday: 10:00 AM - 8:00 PM</p>
                                            <p>Sunday: 11:00 AM - 7:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Quick Contact */}
                            <a
                                href="https://wa.me/971123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all shadow-lg"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Quick Chat on WhatsApp</span>
                            </a>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="bg-white dark:bg-[#2B2B2B] rounded-3xl p-8 shadow-premium animate-scaleIn">
                            <h3 className="text-2xl font-light text-[#2B2B2B] dark:text-[#F5F5F5] mb-6">
                                Send us a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-[#FAF9F7] dark:bg-[#1A1A1A] text-[#2B2B2B] dark:text-[#F5F5F5] focus:outline-none focus:border-[#C8A96A] transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-[#FAF9F7] dark:bg-[#1A1A1A] text-[#2B2B2B] dark:text-[#F5F5F5] focus:outline-none focus:border-[#C8A96A] transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-[#FAF9F7] dark:bg-[#1A1A1A] text-[#2B2B2B] dark:text-[#F5F5F5] focus:outline-none focus:border-[#C8A96A] transition-colors"
                                        placeholder="+971 XX XXX XXXX"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-[#FAF9F7] dark:bg-[#1A1A1A] text-[#2B2B2B] dark:text-[#F5F5F5] focus:outline-none focus:border-[#C8A96A] transition-colors resize-none"
                                        placeholder="Tell us about your wellness goals..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#C8A96A] text-white py-4 rounded-xl font-medium hover:bg-[#B89B5A] transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="mt-16 animate-fadeInUp">
                        <div className="rounded-3xl overflow-hidden shadow-premium h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.803284847358!2d55.2707!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTQuNSJF!5e0!3m2!1sen!2sae!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Wellness Scape Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact