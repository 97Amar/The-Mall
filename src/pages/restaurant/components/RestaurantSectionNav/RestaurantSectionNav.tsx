import { useEffect, useState } from 'react'
import { restaurantSections } from '../../restaurantData/restaurantData'
import './RestaurantSectionNav.scss'

const TOTAL_STEPS = Math.max(...restaurantSections.map((s) => s.step))

export default function RestaurantSectionNav() {
    const [activeId, setActiveId] = useState(restaurantSections[0].id)

    useEffect(() => {
        const ids = restaurantSections.map((s) => s.id)
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => Boolean(el))

        if (!elements.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
                if (visible?.target.id) {
                    setActiveId(visible.target.id)
                }
            },
            { rootMargin: '-40% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
        )

        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const active =
        restaurantSections.find((s) => s.id === activeId) ?? restaurantSections[0]

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="restaurant-section-nav" aria-label="Page sections">
            <div className="restaurant-section-nav__inner">
                <span className="restaurant-section-nav__step">
                    {active.step}/{TOTAL_STEPS}
                </span>
                <button
                    type="button"
                    className="restaurant-section-nav__label-btn"
                    onClick={() => scrollTo(active.id)}
                >
                    {active.navLabel}
                    <span className="restaurant-section-nav__chevron" aria-hidden>
                        ▾
                    </span>
                </button>
            </div>
        </div>
    )
}
