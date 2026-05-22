import MediaImage from '../../../components/common/MediaImage'
import type { FashionProduct } from '../fashionShoppingData'

type ProductCardProps = {
    product: FashionProduct
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="fashion-product-card">
            <div className="fashion-product-card__media">
                <MediaImage
                    src={product.image}
                    fallbackSrc={product.fallback}
                    alt={product.name}
                    className="fashion-product-card__img"
                />
                {product.badge && (
                    <span className="fashion-product-card__badge">{product.badge}</span>
                )}
            </div>
            <div className="fashion-product-card__meta">
                <h3 className="fashion-product-card__name">{product.name}</h3>
                <p className="fashion-product-card__price">{product.price}</p>
            </div>
        </article>
    )
}
