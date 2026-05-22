import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import MediaImage from '../../../../components/common/MediaImage'
import { restaurantGallerySlides, restaurantInfo } from '../../restaurantData/restaurantData'
import 'swiper/css'
import './RestaurantGallery.scss'

export default function RestaurantGallery() {
    return (
        <section className="restaurant-gallery" id="gallery" aria-label="Restaurant gallery">
            <Swiper
                className="restaurant-gallery__slider"
                modules={[FreeMode]}
                freeMode
                slidesPerView={1}
                spaceBetween={0}
                grabCursor
            >
                {restaurantGallerySlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className={`restaurant-gallery__group restaurant-gallery__group--${slide.images.length}`}
                        >
                            {slide.images.map((image) => (
                                <div key={image.id} className="restaurant-gallery__cell">
                                    <MediaImage
                                        src={image.src}
                                        fallbackSrc={image.fallback}
                                        alt={restaurantInfo.title}
                                        className="restaurant-gallery__img"
                                    />
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
