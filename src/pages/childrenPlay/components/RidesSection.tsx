import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { FadeUp } from '../../../components/common/animations/Motion'
import { playRides } from '../childrenPlayData'
import PlayRideCard from './PlayRideCard'

export default function RidesSection() {
    return (
        <section className="kids-play__rides" id="rides" aria-labelledby="rides-heading">
            <FadeUp yOffset={24} duration={0.6} once={false} className="kids-play__rides-header">
                <h2 id="rides-heading" className="kids-play__rides-title">
                    Rides &amp; Attractions
                </h2>
                <p className="kids-play__rides-desc">
                    With more than two dozen rides and attractions, there&apos;s something for
                    everyone—from juniors to thrill seekers!
                </p>
                <a href="#rides" className="kids-play__rides-cta">
                    See all Rides &amp; Attractions
                </a>
            </FadeUp>

            <div className="kids-play__rides-track">
                <Swiper
                    modules={[FreeMode]}
                    freeMode
                    slidesPerView="auto"
                    spaceBetween={16}
                    grabCursor
                >
                    {playRides.map((ride) => (
                        <SwiperSlide key={ride.id}>
                            <PlayRideCard ride={ride} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
