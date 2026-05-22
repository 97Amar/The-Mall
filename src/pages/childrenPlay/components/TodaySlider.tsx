import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { nickAssets, todaySliderCards } from '../childrenPlayData'
import TodayInfoCard from './TodayInfoCard'
import TodayAppearanceCard from './TodayAppearanceCard'

function formatTodayDate() {
    return new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    })
}

export default function TodaySlider() {
    const prevRef = useRef<HTMLButtonElement>(null)
    const nextRef = useRef<HTMLButtonElement>(null)
    const [swiper, setSwiper] = useState<SwiperType | null>(null)

    const bindNav = (instance: SwiperType) => {
        setSwiper(instance)
        if (!prevRef.current || !nextRef.current) return
        if (typeof instance.params.navigation === 'object') {
            instance.params.navigation.prevEl = prevRef.current
            instance.params.navigation.nextEl = nextRef.current
        }
        instance.navigation.init()
        instance.navigation.update()
    }

    return (
        <section
            className="today-slider"
            id="plan-visit"
            style={{ backgroundImage: `url(${nickAssets.todayPattern})` }}
            aria-labelledby="today-slider-title"
        >
            <div className="container today-slider__container">
                <div className="today-slider__controls">
                    <div className="today-slider__controls-container">
                        <div className="today-slider__controls-content">
                            <h4 id="today-slider-title" className="today-slider__title">
                                Today At the Park
                            </h4>
                            <p>{formatTodayDate()}</p>
                        </div>
                      
                    </div>
                </div>
            </div>

            <div className="today-slider__slider-container">
                <Swiper
                    className="today-slider__slider js-today-slider"
                    modules={[Navigation, FreeMode]}
                    onSwiper={bindNav}
                    slidesPerView={1.15}
                    spaceBetween={12}
                    freeMode
                    grabCursor
                    breakpoints={{
                        576: { slidesPerView: 2.1 },
                        768: { slidesPerView: 2.5 },
                        992: { slidesPerView: 3.2 },
                        1200: { slidesPerView: 4 },
                    }}
                >
                    {todaySliderCards.map((card) => (
                        <SwiperSlide
                            key={card.id}
                            className={`today-slider__slider-card-container${card.type === 'appearance' ? ' today-slider__square-card' : ''}`}
                        >
                            {card.type === 'info' ? (
                                <TodayInfoCard card={card} />
                            ) : (
                                <TodayAppearanceCard card={card} />
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
