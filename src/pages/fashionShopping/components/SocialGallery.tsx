import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import MediaImage from '../../../components/common/MediaImage'
import { FadeUp } from '../../../components/common/animations/Motion'
import FashionSocialButtons from './FashionSocialButtons'
import { socialGallery } from '../fashionShoppingData'
import 'swiper/css'

export default function SocialGallery() {
    return (
        <section className="fashion-gallery" aria-label="Social gallery">
            <FadeUp className="fashion-gallery__header">
                <h2 className="fashion-gallery__hashtag">{socialGallery.hashtag}</h2>
                <p className="fashion-gallery__handle">{socialGallery.handle}</p>
                <FashionSocialButtons
                    social={socialGallery.social}
                    className="fashion-gallery__social"
                />
            </FadeUp>

            <Swiper
                className="fashion-gallery__swiper"
                modules={[FreeMode]}
                freeMode
                slidesPerView={1.3}
                spaceBetween={12}
                grabCursor
                breakpoints={{
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 2.5 },
                    1024: { slidesPerView: 3.5 },
                    1280: { slidesPerView: 4.2 },
                }}
            >
                {socialGallery.slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="fashion-gallery__slide">
                            <MediaImage
                                src={slide.src}
                                fallbackSrc={slide.fallback}
                                alt="Helena Mar style"
                                className="fashion-gallery__img"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
