import { Link } from 'react-router-dom'
import CommonButton from '../../components/common/CommonButton'
import PlayHero from './components/PlayHero'
import TodaySlider from './components/TodaySlider'
import RidesSection from './components/RidesSection'
import CharactersSection from './components/CharactersSection'
import PlanVisitCta from './components/PlanVisitCta'
import 'swiper/css'
import 'swiper/css/navigation'
import './ChildrenPlayPage.scss'

export default function ChildrenPlayPage() {
    return (
        <div className="kids-play">
            <PlayHero />
            <TodaySlider />
            <RidesSection />
            <CharactersSection />
            <PlanVisitCta />

            <div className="text-center py-3">
                <CommonButton
                    title="Explore KidZania at The Mall"
                    variant="primary-dark"
                    role="link"
                    to="/entertainment/kidzania"
                />
            </div>

            <div className="text-center pb-4">
                <Link to="/" className="kids-play__back">
                    ← Back to Home
                </Link>
            </div>
        </div>
    )
}
