import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Services = lazy(() => import('../pages/Services'))
const Packages = lazy(() => import('../pages/Packages'))
const Contact = lazy(() => import('../pages/Contact'))

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-12 h-12 border-4 border-[#C8A96A] border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
}

function AppRouter({ darkMode, toggleDarkMode }) {
    return (
        <>
            <ScrollToTop />
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/packages" element={<Packages />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    )
}

export default AppRouter