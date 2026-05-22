import { FadeUp } from '../../../components/common/animations/Motion'
import ProductCard from './ProductCard'
import { newSeasonHeading, newSeasonProducts } from '../fashionShoppingData'

export default function NewSeasonGrid() {
    return (
        <section id="new-season" className="fashion-section fashion-grid" aria-label="New season collection">
            <FadeUp className="fashion-section__header">
                <p className="fashion-section__eyebrow">{newSeasonHeading.eyebrow}</p>
                <h2 className="fashion-section__title">{newSeasonHeading.title}</h2>
            </FadeUp>
            <div className="fashion-grid__items">
                {newSeasonProducts.map((product, index) => (
                    <FadeUp key={product.id} delay={index * 0.05} className="fashion-grid__item">
                        <ProductCard product={product} />
                    </FadeUp>
                ))}
            </div>
        </section>
    )
}
