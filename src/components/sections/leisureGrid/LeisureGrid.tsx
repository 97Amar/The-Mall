import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Row, Col } from 'react-bootstrap'
import { FadeUp } from '../../common/animations/Motion'
import CommonButton from '../../common/CommonButton'
import { UNSPLASH } from '../../../config'
import 'swiper/css'
import 'swiper/css/pagination'
import './LeisureGrid.scss'

const u = (path: string) => `${UNSPLASH}/${path}`

const leisureItems = [
  {
    title: 'Live Events',
    category: 'Global Entertainment',
    tagline: 'Concerts. DJs. Global Energy.',
    gallery: [
      u('photo-1501386761578-eac5c94b800a?q=80&w=1600&auto=format&fit=crop'),
      u('photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop'),
      u('photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop'),
      u('photo-1507874457470-272b3c8d8ee2?q=80&w=1600&auto=format&fit=crop'),
    ],
  },
  {
    title: 'Ice Rink',
    category: 'Olympic Skating',
    tagline: 'Olympic Ice In The Desert',
    gallery: [
      u('photo-1515703407324-5f753afd8be8?q=80&w=1600&auto=format&fit=crop'),
      u('photo-1511452885600-a3d2c9148a31?q=80&w=1600&auto=format&fit=crop'),
      u('photo-1518604666860-9ed391f76460?q=80&w=1600&auto=format&fit=crop'),
    ],
  },
  {
    title: 'Luxury Fashion',
    category: 'Designer Collection',
    tagline: 'Global Luxury Brands',
    gallery: [
      u('photo-1523381210434-271e8be1f52b?q=80&w=1600&auto=format&fit=crop'),
      u('photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop'),
      u('photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop'),
    ],
  },
  {
    title: 'Private Lounge',
    category: 'VIP Experience',
    tagline: 'Exclusive Premium Relaxation',
    gallery: [
      u('photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop'),
      u('photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop'),
      u('photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop'),
    ],
  },
]

export default function LuxuryEntertainmentGrid() {
  return (
    <section className="leisure-grid">

      {/* Header */}
      <div className="leisure-grid__header">
        <FadeUp delay={0} duration={0.8} yOffset={20}>
          <p className="leisure-grid__label">
            Premium Experiences
          </p>
        </FadeUp>
        <FadeUp delay={0.1} duration={0.8} yOffset={40}>
          <h2 className="leisure-grid__heading">
            Entertainment.<br />
            Fashion.<br />
            Culture.
          </h2>
        </FadeUp>
      </div>

      {/* Cards */}
      <div className="leisure-grid__cards">
        <Row className="g-4">
          {leisureItems.map((item, i) => (
            <Col key={i} xs={12} md={6} xl={3}>
              <FadeUp
                delay={i * 0.08}
                duration={0.8}
                yOffset={80}
                className="leisure-grid__card"
                whileHover={{ y: -12 }}
              >
                {/* Inner Slider */}
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{ delay: 2400, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop
                  className="h-100"
                >
                  {item.gallery.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={item.title}
                        className="leisure-grid__img"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Overlay */}
                <div className="leisure-grid__card-overlay" />

                {/* Badge */}
                <div className="leisure-grid__badge-wrap">
                  <div className="leisure-grid__badge">LUXURY</div>
                </div>

                {/* Content */}
                <div className="leisure-grid__card-content">
                  <span className="leisure-grid__card-category">{item.category}</span>
                  <h3 className="leisure-grid__card-title">{item.title}</h3>
                  <p className="leisure-grid__card-tagline">{item.tagline}</p>
                  <CommonButton title="EXPLORE" className="mt-3" />
                </div>
              </FadeUp>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}