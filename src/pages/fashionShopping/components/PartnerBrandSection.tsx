import type { CSSProperties } from 'react'
import { FadeUp } from '../../../components/common/animations/Motion'
import FashionSocialButtons from './FashionSocialButtons'
import ProductCard from './ProductCard'
import type { PartnerBrand } from '../fashionShoppingData'

type PartnerBrandSectionProps = {
    brand: PartnerBrand
}

export default function PartnerBrandSection({ brand }: PartnerBrandSectionProps) {
    return (
        <section
            className="fashion-partner"
            style={{ '--partner-accent': brand.accent } as CSSProperties}
            aria-label={brand.name}
        >
            <FadeUp className="fashion-partner__intro">
                <p className="fashion-partner__tagline">{brand.tagline}</p>
                <h2 className="fashion-partner__name">{brand.name}</h2>
                <p className="fashion-partner__desc">{brand.description}</p>
                <FashionSocialButtons social={brand.social} className="fashion-partner__actions" />
            </FadeUp>

            <div className="fashion-partner__grid">
                {brand.products.map((product, index) => (
                    <FadeUp key={product.id} delay={index * 0.06}>
                        <ProductCard product={product} />
                    </FadeUp>
                ))}
            </div>
        </section>
    )
}
