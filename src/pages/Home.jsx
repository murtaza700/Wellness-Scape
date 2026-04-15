import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import Booking from '../components/Booking'

function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Testimonials />
            <Gallery />
            <Booking />
        </main>
    )
}

export default Home