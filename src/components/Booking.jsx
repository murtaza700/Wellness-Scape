import React, { useState } from 'react'
import { Calendar, Clock, User, Phone, Sparkles, MessageCircle } from 'lucide-react'

function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // WhatsApp Integration
        const message = `Hello Wellness Scape! I'd like to book an appointment:%0A%0A
      Name: ${formData.name}%0A
      Phone: ${formData.phone}%0A
      Service: ${formData.service}%0A
      Date: ${formData.date}%0A
      Time: ${formData.time}`

        window.open(`https://wa.me/971123456789?text=${message}`, '_blank')
    }

    const services = [
        'Hydrotherapy',
        'Aromatherapy Massage',
        'Holistic Healing',
        'Breathwork Session',
        'Sleep Therapy',
        'Signature Facial',
    ]

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E8D8C3]/20 to-[#FAF9F7] dark:from-[#2A5A3A]/10 dark:to-[#1A1A1A]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Info */}
                    <div className="space-y-8 animate-fadeInUp">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-[#C8A96A]/20 px-4 py-2 rounded-full mb-4">
                                <Sparkles className="w-4 h-4 text-[#C8A96A]" />
                                <span className="text-sm font-medium text-[#1F3D2B] dark:text-[#E8D8C3]">Book Your Journey</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-light text-[#2B2B2B] dark:text-[#F5F5F5] mb-4">
                                Begin Your
                                <span className="block font-medium text-[#C8A96A] mt-2">Wellness Journey</span>
                            </h2>

                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                Reserve your personalized wellness experience and take the first step towards complete rejuvenation.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#C8A96A]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-[#C8A96A]" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-1">Flexible Scheduling</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Open daily from 9 AM to 9 PM, including weekends</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#C8A96A]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <User className="w-6 h-6 text-[#C8A96A]" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-1">Expert Therapists</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Certified professionals with years of experience</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#C8A96A]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Sparkles className="w-6 h-6 text-[#C8A96A]" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-1">Premium Facilities</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">State-of-the-art wellness center in prime location</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Booking Form */}
                    <div className="bg-white dark:bg-[#2B2B2B] rounded-3xl p-8 shadow-premium animate-scaleIn">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-[#FAF9F7] dark:bg-[#1A1A1A] text-[#2B2B2B] dark:text-[#F5F5F5] focus:outline-none focus:border-[#C8A96A] transition-colors"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-[#FAF9F7] dark:bg-[#1A1A1A] text-[#2B2B2B] dark:text-[#F5F5F5] focus:outline-none focus:border-[#C8A96A] transition-colors"
                                        placeholder="+971 XX XXX XXXX"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">
                                    Select Service
                                </label>
                                <select
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-[#FAF9F7] dark:bg-[#1A1A1A] text-[#2B2B2B] dark:text-[#F5F5F5] focus:outline-none focus:border-[#C8A96A] transition-colors"
                                >
                                    <option value="">Choose a service</option>
                                    {services.map((service) => (
                                        <option key={service} value={service}>{service}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">
                                        Date
                                    </label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-[#FAF9F7] dark:bg-[#1A1A1A] text-[#2B2B2B] dark:text-[#F5F5F5] focus:outline-none focus:border-[#C8A96A] transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#2B2B2B] dark:text-[#F5F5F5] mb-2">
                                        Time
                                    </label>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="time"
                                            name="time"
                                            required
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-[#FAF9F7] dark:bg-[#1A1A1A] text-[#2B2B2B] dark:text-[#F5F5F5] focus:outline-none focus:border-[#C8A96A] transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#C8A96A] text-white py-4 rounded-xl font-medium hover:bg-[#B89B5A] transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Book via WhatsApp</span>
                            </button>

                            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                                You'll be redirected to WhatsApp to complete your booking. No payment required now.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Booking