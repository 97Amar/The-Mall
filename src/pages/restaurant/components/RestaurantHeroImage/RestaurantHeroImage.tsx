import MediaImage from '../../../../components/common/MediaImage'
import { restaurantHeroImage } from '../../restaurantData/restaurantData'
import './RestaurantHeroImage.scss'

export default function RestaurantHeroImage() {
    return (
        <div className="restaurant-hero-image" aria-hidden>
            <div className="restaurant-hero-image__frame">
                <MediaImage
                    src={restaurantHeroImage.src}
                    fallbackSrc={restaurantHeroImage.fallback}
                    alt=""
                    className="restaurant-hero-image__img"
                />
                <div className="restaurant-hero-image__shade" />
            </div>
        </div>
    )
}
