import { MessageCircle } from 'lucide-react'

function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/971123456789?text=Hello%20Wellness%20Scape!%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all animate-pulse hover:animate-none"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
        </a>
    )
}

export default FloatingWhatsApp