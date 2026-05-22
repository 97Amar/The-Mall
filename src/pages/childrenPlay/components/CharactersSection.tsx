import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { nickAssets, playCharacters } from '../childrenPlayData'
import CharacterCard from './CharacterCard'

export default function CharactersSection() {
    return (
        <section
            className="characters-carousel"
            id="characters"
            style={{
                backgroundImage: `url(${nickAssets.charactersSlime})`,
                backgroundPosition: 'top right',
                backgroundRepeat: 'no-repeat',
            }}
            aria-labelledby="characters-heading"
        >
            <div className="characters-carousel__top-bg" />
            <div className="container">
                <h2 id="characters-heading" className="characters-carousel__title">
                    Your Favorite Characters All In One Place
                </h2>
            </div>

            <div className="characters-carousel__slider js-characters-carousel">
                <Swiper
                    className="characters-carousel__slider-container"
                    modules={[FreeMode]}
                    freeMode
                    loop
                    slidesPerView={2.4}
                    spaceBetween={10}
                    grabCursor
                    breakpoints={{
                        576: { slidesPerView: 3.5 },
                        768: { slidesPerView: 4.5 },
                        1024: { slidesPerView: 5.5 },
                        1280: { slidesPerView: 7 },
                    }}
                >
                    {playCharacters.map((character) => (
                        <SwiperSlide key={character.id}>
                            <CharacterCard character={character} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
