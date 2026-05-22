import { restaurantSpaces, restaurantSpacesSection } from '../../restaurantData/restaurantData'
import SpaceCard from '../SpaceCard/SpaceCard'
import './RestaurantSpaces.scss'

export default function RestaurantSpaces() {
    return (
        <section className="restaurant-spaces" id="spaces" aria-labelledby="spaces-title">
            <header className="restaurant-spaces__header">
                <p className="restaurant-spaces__eyebrow">{restaurantSpacesSection.eyebrow}</p>
                <h2 id="spaces-title" className="restaurant-spaces__title">
                    {restaurantSpacesSection.title}
                </h2>
                <p className="restaurant-spaces__subtitle">{restaurantSpacesSection.subtitle}</p>
            </header>
            <div className="restaurant-spaces__list">
                {restaurantSpaces.map((space, index) => (
                    <SpaceCard key={space.id} space={space} reverse={index % 2 === 1} />
                ))}
            </div>
        </section>
    )
}
