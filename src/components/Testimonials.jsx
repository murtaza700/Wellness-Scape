import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { useRef } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function Testimonials() {
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    const testimonials = [
        {
            name: 'Sarah Al Maktoum',
            role: 'Wellness Enthusiast',
            content: 'The most transformative wellness experience I\'ve ever had. The therapists are incredibly skilled and the atmosphere is pure tranquility.',
            rating: 5,
            image: '/user1.jpeg',
        },
        {
            name: 'James Wilson',
            role: 'CEO, Tech Ventures',
            content: 'Found my sanctuary in the heart of UAE. The aromatherapy massage completely melts away my stress. Worth every moment.',
            rating: 5,
            image: '/user2.jpeg',
        },
        {
            name: 'Aisha Rahman',
            role: 'Yoga Instructor',
            content: 'Their holistic approach to wellness is unmatched. The breathwork sessions have transformed my practice and personal life.',
            rating: 5,
            image: '/user3.jpeg',
        },
        {
            name: 'Michael Chen',
            role: 'Business Consultant',
            content: 'Exceptional service and attention to detail. The sleep therapy program has improved my quality of life significantly.',
            rating: 5,
            image: '/user4.jpeg',
        },
        {
            name: 'Emma Thompson',
            role: 'Interior Designer',
            content: 'A true oasis of calm. Every visit feels like a mini vacation. The signature facial is absolutely divine!',
            rating: 5,
            image: '/user5.jpeg',
        },
    ]

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF9F7] to-[#E8D8C3]/20 dark:from-[#1A1A1A] dark:to-[#2A5A3A]/10">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-[#E8D8C3]/30 dark:bg-[#2A5A3A]/30 px-4 py-2 rounded-full mb-4">
                        <Star className="w-4 h-4 text-[#C8A96A] fill-[#C8A96A]" />
                        <span className="text-sm font-medium text-[#1F3D2B] dark:text-[#E8D8C3]">
                            Client Love
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-light text-[#2B2B2B] dark:text-[#F5F5F5] mb-4">
                        What Our
                        <span className="block font-medium text-[#C8A96A] mt-2">
                            Clients Say
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Join thousands of satisfied clients who have discovered their path to wellness with us
                    </p>
                </div>

                {/* Slider */}
                <div className="relative group">

                    <button
                        ref={prevRef}
                        className="hidden md:flex items-center justify-center absolute left-4 top-1/2 z-10 -translate-y-1/2 
                       bg-[#C8A96A] hover:bg-[#B89B5A] text-white p-2 rounded-full shadow-lg backdrop-blur-md 
                        opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <button
                        ref={nextRef}
                        className="hidden md:flex items-center justify-center absolute right-4 top-1/2 z-10 -translate-y-1/2 
                        bg-[#C8A96A] hover:bg-[#B89B5A] text-white p-2 rounded-full shadow-lg backdrop-blur-md 
                        opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"
                    >
                        <ChevronRight size={22} />
                    </button>

                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}

                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}

                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}

                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}

                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}

                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current
                            swiper.params.navigation.nextEl = nextRef.current
                        }}

                        loop={true}
                        className="pb-16"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white dark:bg-[#2B2B2B] rounded-3xl p-8 shadow-md hover:shadow-xl transition-all h-full">

                                    {/* Quote */}
                                    <Quote className="w-10 h-10 text-[#C8A96A] mb-4 opacity-50" />

                                    {/* Stars */}
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-[#C8A96A] fill-[#C8A96A]" />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                                        "{testimonial.content}"
                                    </p>

                                    {/* User */}
                                    <div className="flex items-center">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                            loading="lazy"
                                        />
                                        <div>
                                            <h4 className="font-medium text-[#2B2B2B] dark:text-[#F5F5F5]">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section>
    )
}

export default Testimonials