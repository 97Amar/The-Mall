import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { FadeUp, ScaleUp } from '../../components/common/animations/Motion'
import LoadingOverlay from '../../components/common/LoadingOverlay'
import CommonButton from '../../components/common/CommonButton'
import { UNSPLASH, VIMEO_PLAYER } from '../../config'
import './EventsPage.scss'

const u = (path: string) => `${UNSPLASH}/${path}`

const eventsInfo = [
    {
        id: 'monday',
        title: 'Monday Night\nEvent',
        tag: 'EVERY MONDAY',
        vimeoId: '1045258034',
        poster: u('photo-1514525253361-b83f859b73c0?q=80&w=800'),
    },
    {
        id: 'tuesday',
        title: 'Tuesday Night\nEvent',
        tag: '',
        vimeoId: '1045257944',
        poster: u('photo-1470225620780-dba8ba36b745?q=80&w=800'),
    },
    {
        id: 'wednesday',
        title: 'Wednesday Night\nEvent',
        tag: '',
        vimeoId: '1045257897',
        poster: u('photo-1516450360452-9312f5e86fc7?q=80&w=800'),
    },
    {
        id: 'thursday',
        title: 'Thursday Night\nEvent',
        tag: '',
        vimeoId: '1108215115',
        poster: u('photo-1545128485-c400e7702796?q=80&w=800'),
    },
    {
        id: 'friday',
        title: 'Friday Night\nEvent',
        tag: '',
        vimeoId: '1179890567',
        poster: u('photo-1429962714451-bb934ecdc0ec?q=80&w=800'),
    },
    {
        id: 'saturday',
        title: 'Saturday Night\nEvent',
        tag: '',
        vimeoId: '1108242152',
        poster: u('photo-1517457373958-b7bdd058a548?q=80&w=800'),
    },
    {
        id: 'sunday',
        title: 'Sunday Night\nEvent',
        tag: '',
        vimeoId: '1045257994',
        poster: u('photo-1492684223066-81342ee5ff30?q=80&w=800'),
    },
]

export default function EventsPage() {
    const [isPageLoading, setIsPageLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsPageLoading(false), 1500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <LoadingOverlay isLoading={isPageLoading} message="EVENTS" />
            <div className="events-page">
                <div className="events-page__inner">
                    <FadeUp
                        useAnimate={true}
                        isVisible={!isPageLoading}
                        yOffset={30}
                        duration={0.8}
                        delay={0.2}
                        className="events-page__header"
                    >
                        <h1 className="events-page__title">Live Events</h1>
                        <p className="events-page__desc">
                            Experience the ultimate nightlife with our exclusive weekly events.
                            Immersive sound, world-class DJs, and an unforgettable atmosphere.
                        </p>
                    </FadeUp>

                    {/* Row 1: Mon–Thu */}
                    <Row className="g-3 mb-3">
                        {eventsInfo.slice(0, 4).map((event, index) => (
                            <Col key={event.id} xs={12} md={6} xl={3}>
                                <EventCard event={event} index={index} isPageLoading={isPageLoading} />
                            </Col>
                        ))}
                    </Row>

                    {/* Row 2: Fri–Sun */}
                    <Row className="g-3">
                        {eventsInfo.slice(4).map((event, index) => (
                            <Col key={event.id} xs={12} md={6} xl={4}>
                                <EventCard event={event} index={index + 4} isPageLoading={isPageLoading} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    )
}

function EventCard({ event, index, isPageLoading }: { event: typeof eventsInfo[0]; index: number; isPageLoading: boolean }) {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)
    const vimeoSrc = `${VIMEO_PLAYER}/${event.vimeoId}?muted=1&autoplay=1&dnt=1&loop=1&background=1&app_id=122963`

    useEffect(() => {
        const timer = setTimeout(() => setIsVideoLoaded(true), 3500 + index * 200)
        return () => clearTimeout(timer)
    }, [index])

    return (
        <ScaleUp
            useAnimate={true}
            isVisible={!isPageLoading}
            duration={0.6}
            delay={index * 0.1 + 0.3}
            className="event-card"
        >
            {/* Poster */}
            <div className="event-card__poster-wrap">
                <img
                    src={event.poster}
                    alt={event.title}
                    className={`event-card__poster event-card__poster--${isVideoLoaded ? 'hidden' : 'visible'}`}
                />
            </div>

            {/* Vimeo */}
            <div className={`event-card__video-wrap event-card__video-wrap--${isVideoLoaded ? 'visible' : 'hidden'}`}>
                <iframe
                    src={vimeoSrc}
                    loading="lazy"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={event.title}
                    className="event-card__iframe"
                />
            </div>

            {/* Overlay */}
            <div className="event-card__overlay" />

            <div className="event-card__body">
                {/* Tag */}
                <div className="event-card__tag-wrap">
                    {event.tag && event.tag.split(' ').length === 2 && (
                        <div>
                            <span className="event-card__tag-top">{event.tag.split(' ')[0]}</span>
                            <span className="event-card__tag-main">{event.tag.split(' ')[1]}</span>
                        </div>
                    )}
                </div>

                {/* Bottom */}
                <div className="event-card__bottom">
                    <h3 className="event-card__title">{event.title}</h3>
                    <CommonButton
                        title="Book Now"
                        variant="outline-light"
                        fluid
                        svgIcon={
                            <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path>
                            </svg>
                        }
                    />
                </div>
            </div>
        </ScaleUp>
    )
}
