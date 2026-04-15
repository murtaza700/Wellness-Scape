import { useState, useEffect } from 'react'

function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight) * 100
            setProgress(progress)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50">
            <div
                className="h-full bg-gradient-to-r from-[#C8A96A] to-[#E8D8C3] transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}

export default ScrollProgress