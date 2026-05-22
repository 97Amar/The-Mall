import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Hero from '../../components/sections/hero/Hero'
import Experiences from '../../components/sections/experiences/Experiences'
import Events from '../../components/sections/events/Events'
import LeisureGrid from '../../components/sections/leisureGrid/LeisureGrid'
import Lounge from '../../components/sections/lounge/Lounge'

export default function HomePage() {
    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <main>
            <Hero />
            {/* <Stats /> */}
            <Experiences />
            <LeisureGrid />
            <Lounge />
            <Events />
            {/* <Hospitality /> */}
        </main>
    )
}
