import { Link } from 'react-router-dom'
import RestaurantHeading from '../components/RestaurantHeading/RestaurantHeading'
import RestaurantHeroImage from '../components/RestaurantHeroImage/RestaurantHeroImage'
import RestaurantContacts from '../components/RestaurantContacts/RestaurantContacts'
import RestaurantGallery from '../components/RestaurantGallery/RestaurantGallery'
import RestaurantSpaces from '../components/RestaurantSpaces/RestaurantSpaces'
import RestaurantFeatures from '../components/RestaurantFeatures/RestaurantFeatures'
import RestaurantSectionNav from '../components/RestaurantSectionNav/RestaurantSectionNav'
import './RestaurantPage.scss'

export default function RestaurantPage() {
    return (
        <div className="restaurant-page">
            <div className="restaurant-page__intro">
                <RestaurantHeading />
                <RestaurantHeroImage />
            </div>

            <RestaurantContacts />
            <RestaurantGallery />
            <RestaurantSpaces />
            <RestaurantFeatures />

            <RestaurantSectionNav />

            <div className="restaurant-page__footer">
                <Link to="/" className="restaurant-page__back">
                    ← Back to Home
                </Link>
            </div>
        </div>
    )
}
