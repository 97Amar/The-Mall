import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import './Hero.scss'

import slide1 from '../../../assets/images/slider/slide1.png'
import slide2 from '../../../assets/images/slider/slide2.png'
import slide3 from '../../../assets/images/slider/slide3.png'
import slide4 from '../../../assets/images/slider/slide4.png'
import slide5 from '../../../assets/images/slider/slide5.png'

const slides = [slide1, slide2, slide3, slide4, slide5]

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-text', {
                opacity: 0,
                y: 100,
                duration: 1.5,
                stagger: 0.3,
                ease: 'power4.out',
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="hero">
            {/* Slideshow Background */}
            <div className="hero__bg">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    loop={true}
                    speed={2500}
                    className="h-100 w-100"
                >
                    {slides.map((img, i) => (
                        <SwiperSlide key={i} className="h-100 w-100">
                            <div className="hero__slide-wrapper">
                                <img
                                    src={img}
                                    alt={`The Mall 4K Slide ${i + 1}`}
                                    className="hero__slide-img"
                                />
                                <div className="hero__slide-overlay" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Content */}
            <div className="hero__content">
                <p className="hero-text hero__eyebrow">
                    Emaar Properties Presents
                </p>
                <h1 className="hero-text hero__title">
                    Redefining<br />
                    <span className="hero__title-italic">Luxury.</span>
                </h1>
            </div>

            {/* Scroll Indicator */}
            <div className="hero__scroll">
                <p className="hero__scroll-label">Scroll to Experience</p>
                <div className="hero__scroll-line" />
            </div>
        </section>
    )
}
