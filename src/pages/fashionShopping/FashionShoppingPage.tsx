import { Link } from 'react-router-dom'
import FashionHero from './components/FashionHero'
import NewSeasonGrid from './components/NewSeasonGrid'
import ShopInspoSection from './components/ShopInspoSection'
import CraftsmanshipSlider from './components/CraftsmanshipSlider'
import BrandStorySection from './components/BrandStorySection'
import SocialGallery from './components/SocialGallery'
import StoreLocations from './components/StoreLocations'
import PartnerBrandSection from './components/PartnerBrandSection'
import { partnerBrands } from './fashionShoppingData'
import './FashionShoppingPage.scss'

export default function FashionShoppingPage() {
    return (
        <div className="fashion-page">
            <FashionHero />
            <div className="fashion-page__body">
                <NewSeasonGrid />
                <ShopInspoSection />
                <CraftsmanshipSlider />
                <BrandStorySection />
                <SocialGallery />
                {partnerBrands.map((brand) => (
                    <PartnerBrandSection key={brand.id} brand={brand} />
                ))}
                <StoreLocations />
            </div>

            <div className="text-center pb-5">
                <Link to="/" className="fashion-page__back">
                    ← Back to Home
                </Link>
            </div>
        </div>
    )
}
