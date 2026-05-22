import { useParams, Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { FadeUp, FadeIn, SlideIn, ScaleDownImage } from '../../components/common/animations/Motion'
import CommonButton from '../../components/common/CommonButton'
import { UNSPLASH } from '../../config'
import './EntertainmentDetailPage.scss'

const u = (path: string) => `${UNSPLASH}/${path}`

export const attractions = [
    {
        id: 'kidzania',
        title: 'KidZania',
        category: 'Edutainment',
        tagline: 'A City Built for Kids',
        description: "The world's leading edutainment center for children, where they can explore a miniature city built just for them and role-play over 40 professions.",
        image: u('photo-1535572290543-960a8046f5af?q=80&w=1600'),
        gallery: [
            u('photo-1503454537195-1dcabb73ffb9?q=80&w=800'),
            u('photo-1527515637462-cff94eecc1ac?q=80&w=800'),
            u('photo-1471286174890-9c112ac6823f?q=80&w=800'),
            u('photo-1540479859555-17af45c78602?q=80&w=800'),
        ],
        details: "Located on Level 2 of The Mall, KidZania is an award-winning indoor theme park that provides a safe, unique, and very realistic educational environment for children aged 2–16. Kids can be a firefighter, pilot, chef, surgeon, and much more — earning KidZos (the park's currency) as they go.",
        hours: '10:00 AM – 10:00 PM',
        location: 'Level 2, The Mall',
        price: 'From AED 130',
        features: ['40+ Professions', 'In-Park Currency', 'Ages 2–16', 'Certified Staff', 'Interactive Sets', 'Educational Games']
    },
    {
        id: 'burjkhalifa',
        title: 'At the Top, Burj Khalifa',
        category: 'Observation',
        tagline: 'Touch the Sky',
        description: "Observe the city from the highest man-made point on Earth. A truly breathtaking experience at levels 124, 125, and 148.",
        image: u('photo-1512453979798-5ea266f8880c?q=80&w=1600'),
        gallery: [
            u('photo-1506905925346-21bda4d32df4?q=80&w=800'),
            u('photo-1526495124232-a04e1849168c?q=80&w=800'),
            u('photo-1518684079-3c830dcef090?q=80&w=800'),
            u('photo-1534008897995-27a23e859048?q=80&w=800'),
        ],
        details: "At The Top, Burj Khalifa presents spectacular views of the cityscape that stretch to the horizon. Experience the world-class observation decks at Level 124 and 125, or upgrade for the exclusive SKY experience at Level 148 — the highest observation deck in the world.",
        hours: '8:00 AM – 11:00 PM',
        location: 'Burj Khalifa, Downtown',
        price: 'From AED 149',
        features: ['Level 124 & 125', 'Level 148 SKY Experience', 'High-Powered Telescopes', 'VR Building Tour', 'Sunrise Packages', 'Corporate Events']
    },
    {
        id: 'aquarium',
        title: 'The Aquarium & Underwater Zoo',
        category: 'Marine Life',
        tagline: '33,000 Aquatic Animals',
        description: "Experience one of the largest suspended aquariums in the world, home to thousands of aquatic animals.",
        image: u('photo-1481018085669-2bc6e4f00eed?q=80&w=1600'),
        gallery: [
            u('photo-1534438327276-14e5300c3a48?q=80&w=800'),
            u('photo-1544551763-77ef2d0cfc6c?q=80&w=800'),
            u('photo-1507567330391-1f39ad19f2a5?q=80&w=800'),
            u('photo-1518020382113-a7e8fc38eac9?q=80&w=800'),
        ],
        details: "The Aquarium & Underwater Zoo is one of the world's largest aquariums. Walk through the 48-meter underwater tunnel with the aquarium enveloping you from all sides. Encounter sharks, rays, king croc, and over 400 species of marine and land animals.",
        hours: '10:00 AM – 10:00 PM',
        location: 'Ground Floor, The Mall',
        price: 'From AED 100',
        features: ['48m Walk-Through Tunnel', '33,000+ Aquatic Animals', 'King Croc', 'Shark Feeding', 'Glass-Bottom Boat', 'Cage Snorkeling']
    },
    {
        id: 'icerink',
        title: 'Ice Rink',
        category: 'Sports & Recreation',
        tagline: 'Olympic Ice in the Desert',
        description: "An Olympic-sized ice rink for all ages and skill levels, offering open skating and professional coaching.",
        image: u('photo-1773904064152-2ffea1d405a4?q=80&w=1600'),
        gallery: [
            u('photo-1515703407324-5f753afd8be8?q=80&w=1200&auto=format&fit=crop'),
            u('photo-1547347298-4074fc3086f0?q=80&w=800'),
            u('photo-1551698618-1dfe5d97d256?q=80&w=800'),
        ],
        details: "The Ice Rink uses cutting-edge refrigeration technology to produce the finest quality ice. Whether you're a first-timer or a seasoned skater, there is something for everyone — from ice discos and themed nights to professional coaching and speed skating.",
        hours: '10:00 AM – 12:00 AM',
        location: 'Ground Floor, The Mall',
        price: 'From AED 60',
        features: ['Olympic Sized', 'Ice Disco Nights', 'Speed Skating', 'Professional Coaching', 'Skate Rental', 'Private Sessions']
    },
    {
        id: 'cinemas',
        title: 'Reel Cinemas',
        category: 'Cinema',
        tagline: 'Next Level Movie Going',
        description: "The ultimate movie-going experience with state-of-the-art technology, Dolby Cinema, and Platinum Movie Suites.",
        image: u('photo-1517604931442-7e0c8ed2963c?q=80&w=1600'),
        gallery: [
            u('photo-1489599849927-2ee91cede3ba?q=80&w=800'),
            u('photo-1440404653325-ab127d49abc1?q=80&w=800'),
            u('photo-1478720568477-152d9b164e26?q=80&w=800'),
            u('photo-1585647347483-22b66260dfff?q=80&w=800'),
        ],
        details: "Reel Cinemas at The Mall brings together the best in-cinema technology with unmatched comfort. With IMAX, Dolby Cinema, Dolby Atmos, and the exclusive Elite Dine-In experience — where gourmet meals are served at your seat — every visit is an event.",
        hours: '10:00 AM – 1:00 AM',
        location: 'Level 3, The Mall',
        price: 'From AED 55',
        features: ['IMAX', 'Dolby Cinema', 'Dolby Atmos', 'Elite Dine-In', 'Kids Cinema', 'Private Screenings']
    },
    {
        id: 'trampo',
        title: 'Trampo Extreme',
        category: 'Active Play',
        tagline: 'Bounce Beyond Limits',
        description: "The ultimate trampoline park for kids and parents alike, with wall-to-wall bouncing and obstacle courses.",
        image: u('photo-1551632811-561732d1e306?q=80&w=1600'),
        gallery: [
            u('photo-1575880843025-f4a6a5f77a3b?q=80&w=800'),
            u('photo-1543783207-ec64e4d95325?q=80&w=800'),
            u('photo-1560272564-c83b66b1ad12?q=80&w=800'),
            u('photo-1522202176988-66273c2fd55f?q=80&w=800'),
        ],
        details: "Dubai Opera is a truly unique venue and the city's first purpose-built multi-format performing arts theatre. Situated in the heart of Downtown Dubai, it hosts a wide variety of performances and events including theatre, opera, ballet, orchestras, concerts, fashion shows, live entertainment, and more.",
        hours: 'Varies by Event',
        location: 'Downtown, next to The Mall',
        price: 'Varies by Event',
        features: ['2,000-Seat Multi-Format', 'Dhow-Shaped Design', 'Opera & Ballet', 'Theatre & Concerts', 'VIP Boxes', 'Rooftop Restaurant']
    },
    {
        id: 'skyviews',
        title: 'Sky Views Observatory',
        category: 'Observation & Thrill',
        tagline: 'Edge of the World',
        description: "A terrifyingly beautiful glass slide and edge walk experience towering 219.5 meters above Dubai.",
        image: u('photo-1504701954957-2010ec3bcec1?q=80&w=1600'),
        gallery: [
            u('photo-1509248961158-e54f6934749c?q=80&w=800'),
            u('photo-1568827999250-2236495d7c70?q=80&w=800'),
            u('photo-1517926967795-319ef46fbdb2?q=80&w=800'),
            u('photo-1470082719408-b2843ab5c9ab?q=80&w=800'),
        ],
        details: "Sky Views Observatory is located atop the Address Sky View hotel. It features a thrilling Glass Slide enclosed in transparent glass, providing an unobstructed 360-degree view. For the ultimate thrill, try the Edge Walk — a hands-free walk on an external perimeter ledge.",
        hours: '10:00 AM – 10:00 PM',
        location: 'Address Sky View',
        price: 'From AED 80',
        features: ['219.5m High', 'Glass Slide', 'Edge Walk', '360° Panorama', 'Restaurant', 'Connection to The Mall']
    },
    {
        id: 'playdxb',
        title: 'Play DXB',
        category: 'VR & Arcade',
        tagline: 'Challenge Reality',
        description: "The largest indoor virtual reality zone in the world, featuring breathtaking rides, classic arcade games, and multiplayer VR.",
        image: u('photo-1593508512255-86ab42a8e620?q=80&w=1600'),
        gallery: [
            u('photo-1622979135225-d2ba269cf1ac?q=80&w=800'),
            u('photo-1592478411213-6153e4ebc07d?q=80&w=800'),
            u('photo-1576502200916-3808e07386a5?q=80&w=800'),
            u('photo-1560253023-3ec5d502959f?q=80&w=800'),
        ],
        details: "Play DXB is the ultimate destination for VR, AR, and classic arcade games. Blur the lines between perception and reality through immersive experiences, adrenaline-pumping rides, soft play areas for younger kids, and classic redemption games.",
        hours: '10:00 AM – 12:00 AM',
        location: 'Level 2, The Mall',
        price: 'Pay & Play',
        features: ['World\'s Largest VR Park', 'AR Experiences', 'Arcade Machines', 'Soft Play Area', 'Multiplayer VR', 'Café']
    },
    {
        id: 'infinitydeslumieres',
        title: 'Infinity des Lumières',
        category: 'Digital Art',
        tagline: 'Immersive Art Experience',
        description: "The region's largest immersive digital art center, bringing iconic masterpieces to life through light, sound, and movement.",
        image: u('photo-1566140967404-b8b3932483f5?q=80&w=800'),
        gallery: [
            u('photo-1596461404969-9ae70f2830c1?q=80&w=800'),
            u('photo-1540479859555-17af45c78602?q=80&w=800'),
            u('photo-1587654780291-39c9404d746b?q=80&w=800'),
            u('photo-1585647347483-22b66260dfff?q=80&w=800'),
        ],
        details: "Infinity des Lumières transforms classic and contemporary art into an immersive, multi-sensory journey. With 130 projectors, 58 speakers, and towering screens, visitors can literally walk through the masterpieces of legendary artists like Van Gogh, Gaudi, and modern digital innovators.",
        hours: '10:00 AM – 10:00 PM',
        location: 'Level 2, The Mall',
        price: 'From AED 110',
        features: ['130 Projectors', 'Immersive Audio', 'Rotating Exhibitions', 'Boutique', 'Interactive Zones', 'Art Masterpieces']
    },
    {
        id: 'ekartzabeel',
        title: 'Ekart Zabeel',
        category: 'Racing',
        tagline: 'High-Speed Electric Karting',
        description: "An exhilarating indoor electric go-karting experience on a challenging track with high-tech timing systems.",
        image: u('photo-1506905925346-21bda4d32df4?q=80&w=1600'),
        gallery: [
            u('photo-1512453979798-5ea266f8880c?q=80&w=800'),
            u('photo-1530521954074-e64f6810b32d?q=80&w=800'),
            u('photo-1531151936400-7e3f86587d25?q=80&w=800'),
            u('photo-1518684079-3c830dcef090?q=80&w=800'),
        ],
        details: "Challenge your friends and family at Ekart Zabeel, the UAE's first high-end electric karting experience. The indoor track offers high-speed straights, challenging corners, and advanced lap-timing systems that track your performance to the millisecond.",
        hours: '10:00 AM – 11:00 PM',
        location: 'Zabeel Extension',
        price: 'From AED 95',
        features: ['Electric Go-Karts', 'Indoor Track', 'Lap Tracking', 'Racing Gear Provided', 'Briefing Room', 'Spectator Area']
    },
    {
        id: 'softplay',
        title: 'Soft Play Area',
        category: 'Kids',
        tagline: 'Safe, Fun, Active',
        description: "A dynamic, multi-level indoor playground designed for toddlers and young children to explore and learn in a safe environment.",
        image: u('photo-1558618666-fcd25c85cd64?q=80&w=1600'),
        gallery: [
            u('photo-1547891654-e66ed7ebb968?q=80&w=800'),
            u('photo-1611532736597-de2d4265fba3?q=80&w=800'),
            u('photo-1550684848-fac1c5b4e853?q=80&w=800'),
            u('photo-1526374965328-7f61d4dc18c5?q=80&w=800'),
        ],
        details: "House of Hype is a playground for the curious and creative — a neon-drenched multi-sensory experience that merges digital art, augmented reality, and interactive installations. With ever-changing zones and a resident DJ on weekends, every visit brings something new.",
        hours: '10:00 AM – 11:00 PM',
        location: 'Level 2, The Mall',
        price: 'From AED 99',
        features: ['Ages 1–5', 'Fully Padded', 'Ball Pools', 'Giant Slides', 'Sensory Panels', 'Supervised Staff']
    }
]

export default function EntertainmentDetailPage() {
    const { id } = useParams<{ id: string }>()
    const item = attractions.find(a => a.id === id)

    if (!item) {
        return (
            <div className="detail-page__not-found">
                <h1 className="detail-page__not-found-code">404</h1>
                <p className="detail-page__not-found-text">Attraction not found.</p>
                <Link to="/entertainment" className="detail-page__back-all-link" style={{ display: 'inline-block', width: 'auto', padding: '0.75rem 2rem' }}>
                    ← Back to Entertainment
                </Link>
            </div>
        )
    }

    return (
        <div className="detail-page">
            {/* Hero */}
            <div className="detail-page__hero">
                <ScaleDownImage
                    src={item.image}
                    alt={item.title}
                    className="detail-page__hero-img"
                    style={{ objectPosition: item.id === 'softplay' ? 'center 30%' : 'center' }}
                    duration={1.2}
                />
                <div className="detail-page__hero-overlay" />

                {/* Meta */}
                <div className="detail-page__hero-meta">
                    <FadeUp
                        useAnimate={true}
                        yOffset={20}
                        delay={0.2}
                        className="detail-page__hero-category"
                    >
                        {item.category}
                    </FadeUp>
                    <FadeUp
                        useAnimate={true}
                        yOffset={30}
                        delay={0.3}
                        className="detail-page__hero-title"
                    >
                        {item.title}
                    </FadeUp>
                    <FadeIn
                        useAnimate={true}
                        delay={0.45}
                        className="detail-page__hero-tagline"
                    >
                        {item.tagline}
                    </FadeIn>
                </div>

                {/* Back Button */}
                <SlideIn
                    delay={0.1}
                    offset={20}
                    direction="left"
                    className="detail-page__back-btn"
                >
                    <Link to="/entertainment" className="detail-page__back-link">
                        ← All Experiences
                    </Link>
                </SlideIn>
            </div>

            {/* Body */}
            <div className="detail-page__body">
                <Row className="g-5">
                    {/* Left: Main Content */}
                    <Col lg={8}>
                        <FadeUp yOffset={30} delay={0.2} duration={0.6}>
                            <p className="detail-page__section-label">About the Experience</p>
                            <p className="detail-page__description">{item.description}</p>

                            <div className="detail-page__divider" />

                            <p className="detail-page__details">{item.details}</p>

                            {/* Gallery */}
                            <p className="detail-page__section-label">Gallery</p>
                            <Row className="g-3 mb-5">
                                {item.gallery.map((src, i) => (
                                    <Col key={i} xs={i === 0 ? 12 : 6}>
                                        <FadeUp
                                            yOffset={20}
                                            delay={i * 0.1}
                                            className={`detail-page__gallery-wrap ${i === 0 ? 'detail-page__gallery-item-primary' : 'detail-page__gallery-item-secondary'}`}
                                        >
                                            <img
                                                src={src}
                                                alt={`${item.title} gallery ${i + 1}`}
                                                className="detail-page__gallery-img"
                                            />
                                        </FadeUp>
                                    </Col>
                                ))}
                            </Row>

                            {/* Highlights */}
                            <p className="detail-page__section-label">Highlights</p>
                            <Row className="g-3">
                                {item.features.map(f => (
                                    <Col key={f} xs={12} md={6} lg={4}>
                                        <div className="detail-page__feature-item">
                                            <div className="detail-page__feature-dot" />
                                            <span className="detail-page__feature-text">{f}</span>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </FadeUp>
                    </Col>

                    {/* Right: Info Card */}
                    <Col lg={4}>
                        <FadeUp yOffset={30} delay={0.35} duration={0.6} className="sticky-top pt-5" style={{ top: '6rem' }}>
                            <div className="detail-page__info-card">
                                <p className="detail-page__info-label">Practical Info</p>
                                {[
                                    { icon: '🕐', label: 'Opening Hours', value: item.hours },
                                    { icon: '📍', label: 'Location', value: item.location },
                                    { icon: '🎟️', label: 'Tickets', value: item.price },
                                ].map(info => (
                                    <div key={info.label} className="detail-page__info-row">
                                        <p className="detail-page__info-row-label">
                                            <span className="me-2">{info.icon}</span>{info.label}
                                        </p>
                                        <p className="detail-page__info-row-value">{info.value}</p>
                                    </div>
                                ))}
                                <div className="detail-page__info-divider" />
                                <CommonButton title="Book Tickets Now" variant="primary-dark" fluid />
                                <Link to="/entertainment" className="detail-page__back-all-link">
                                    ← Back to All
                                </Link>
                            </div>
                        </FadeUp>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
