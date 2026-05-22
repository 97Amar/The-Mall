import { restaurantFeatures } from '../../restaurantData/restaurantData'
import RestaurantFeatureCard from '../RestaurantFeatureCard/RestaurantFeatureCard'
import './RestaurantFeatures.scss'

export default function RestaurantFeatures() {
    return (
        <section className="restaurant-features" id="features" aria-label="Restaurant amenities">
            {restaurantFeatures.map((feature) => (
                <RestaurantFeatureCard key={feature.id} feature={feature} />
            ))}
        </section>
    )
}
