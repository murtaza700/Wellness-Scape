import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null)

    const images = [
        {
            url: '/gallery-photo1.jpeg',
            alt: 'Luxury Spa Room',
            span: 'col-span-1 row-span-1',
        },
        {
            url: '/gallery-photo2.jpeg',
            alt: 'Massage Therapy',
            span: 'col-span-1 row-span-1',
        },
        {
            url: '/gallery-photo3.jpeg',
            alt: 'Aromatherapy',
            span: 'col-span-1 row-span-1',
        },
        {
            url: '/gallery-photo4.jpeg',
            alt: 'Wellness Center',
            span: 'col-span-1 row-span-1',
        },
        {
            url: '/gallery-photo5.jpeg',
            alt: 'Meditation Room',
            span: 'col-span-1 row-span-1',
        },
        {
            url: '/gallery-photo6.jpeg',
            alt: 'Spa Treatment',
            span: 'col-span-1 row-span-1',
        },
    ]

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#2B2B2B]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <div className="inline-flex items-center space-x-2 bg-[#E8D8C3]/30 dark:bg-[#2A5A3A]/30 px-4 py-2 rounded-full mb-4">
                        <ZoomIn className="w-4 h-4 text-[#C8A96A]" />
                        <span className="text-sm font-medium text-[#1F3D2B] dark:text-[#E8D8C3]">Visual Journey</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-light text-[#2B2B2B] dark:text-[#F5F5F5] mb-4">
                        Experience
                        <span className="block font-medium text-[#C8A96A] mt-2">Our Sanctuary</span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Step into a world of tranquility and luxury designed for your ultimate wellness
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-2xl cursor-pointer group ${image.span} animate-fadeInUp`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-[#C8A96A] transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain animate-scaleIn"
                        />
                    </div>
                )}
            </div>
        </section>
    )
}

export default Gallery