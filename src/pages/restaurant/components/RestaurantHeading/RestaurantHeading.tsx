import CommonButton from '../../../../components/common/CommonButton'
import { restaurantInfo } from '../../restaurantData/restaurantData'
import './RestaurantHeading.scss'

export default function RestaurantHeading() {
    return (
        <header className="restaurant-heading" id="heading">
            <span className="restaurant-heading__codename">{restaurantInfo.codename}</span>
            <h1 className="restaurant-heading__title">{restaurantInfo.title}</h1>
            <p className="restaurant-heading__description">{restaurantInfo.description}</p>
            <CommonButton
                variant="primary-cream"
                role="link"
                to={restaurantInfo.reserve.href}
            >
                {restaurantInfo.reserve.label}
            </CommonButton>
        </header>
    )
}
