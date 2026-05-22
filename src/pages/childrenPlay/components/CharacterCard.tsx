import type { PlayCharacter } from '../childrenPlayData'

type CharacterCardProps = {
    character: PlayCharacter
}

export default function CharacterCard({ character }: CharacterCardProps) {
    return (
        <a href={character.href} className="characters-carousel__slide">
            <div
                className="characters-carousel__card"
                style={{
                    backgroundColor: character.bg,
                    backgroundImage: `url(${character.image})`,
                }}
            >
                <span className="characters-carousel__character-name">{character.name}</span>
            </div>
        </a>
    )
}
