import {
    restaurantContactHours,
    restaurantContactLinks,
    restaurantLocation,
} from '../../restaurantData/restaurantData'
import './RestaurantContacts.scss'

export default function RestaurantContacts() {
    return (
        <section className="restaurant-contacts" id="contacts" aria-labelledby="contacts-title">
            <h2 id="contacts-title" className="visually-hidden">
                Contact information
            </h2>
            <div className="restaurant-contacts__grid">
                <div className="restaurant-contacts__left">
                    {restaurantContactLinks.map((link) => (
                        <div key={link.id} className="restaurant-contacts__item">
                            <span className="restaurant-contacts__label">{link.label}</span>
                            <a
                                href={link.href}
                                className="restaurant-contacts__value"
                                {...(link.external
                                    ? { target: '_blank', rel: 'noreferrer' }
                                    : {})}
                            >
                                {link.value}
                            </a>
                        </div>
                    ))}
                    <div className="restaurant-contacts__item">
                        <span className="restaurant-contacts__label">
                            {restaurantContactHours.label}
                        </span>
                        <p className="restaurant-contacts__hours-row">
                            <span className="restaurant-contacts__value restaurant-contacts__value--static">
                                {restaurantContactHours.scheduleLabel}
                            </span>
                            <span className="restaurant-contacts__value restaurant-contacts__value--static">
                                {restaurantContactHours.scheduleValue}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="restaurant-contacts__address-block">
                    {restaurantLocation.addressLines.map((line) => (
                        <p key={line} className="restaurant-contacts__address">
                            {line}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}
