import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'
import { FadeUp } from '../../../components/common/animations/Motion'
import ProductCard from './ProductCard'
import { craftsmanshipSection } from '../fashionShoppingData'
import 'swiper/css'
import 'swiper/css/navigation'

export default function CraftsmanshipSlider() {
    return (
        <section className="fashion-section fashion-slider" aria-label="Craftsmanship collection">
            <FadeUp className="fashion-section__header">
                <p className="fashion-section__eyebrow">{craftsmanshipSection.eyebrow}</p>
                <h2 className="fashion-section__title">{craftsmanshipSection.title}</h2>
            </FadeUp>

            <Swiper
                className="fashion-slider__swiper"
                modules={[FreeMode, Navigation]}
                freeMode
                navigation
                slidesPerView={1.15}
                spaceBetween={16}
                grabCursor
                breakpoints={{
                    576: { slidesPerView: 1.6 },
                    768: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {craftsmanshipSection.products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
