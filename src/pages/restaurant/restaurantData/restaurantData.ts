import {
    timelessImage,
    TIMELESS_MEDIA,
    TIMELESS_SITE,
    unsplashImage,
} from '../../../config'

const media = (folder: string, file: string, width = 1920) =>
    timelessImage(`/storage/media/${folder}/${file}`, width)

export const restaurantInfo = {
    codename: 'TIMELESS DUBAI',
    title: 'AL HABTOOR',
    description:
        'A zoned hall on the ground floor, a bohemian lounge area on the mezzanine floor, and a green terrace with a canal view.',
    reserve: {
        label: 'Reserve',
        href: 'tel:+971502049987',
    },
    phone: '+971 50 204 9987',
    phoneHref: 'tel:+971502049987',
    telegram: {
        label: '@timeless_al_habtoor',
        href: 'https://t.me/TIMELESS_Al_Habtoor',
    },
    whatsapp: {
        label: '@timeless_al_habtoor',
        href: 'https://wa.me/971502049987',
    },
    hours: {
        label: 'Working hours:',
        scheduleLabel: 'MON - SUN:',
        scheduleValue: '12:00 - 03:00',
    },
    address: {
        lines: ['Al Habtoor City,', 'Meera Tower'] as const,
    },
}

export type RestaurantContactLink = {
    id: string
    label: string
    value: string
    href: string
    external?: boolean
}

export const restaurantContactLinks: RestaurantContactLink[] = [
    {
        id: 'phone',
        label: 'Phone:',
        value: restaurantInfo.phone,
        href: restaurantInfo.phoneHref,
    },
    {
        id: 'telegram',
        label: 'Telegram:',
        value: restaurantInfo.telegram.label,
        href: restaurantInfo.telegram.href,
        external: true,
    },
    {
        id: 'whatsapp',
        label: 'WhatsApp:',
        value: restaurantInfo.whatsapp.label,
        href: restaurantInfo.whatsapp.href,
        external: true,
    },
]

export const restaurantContactHours = {
    label: restaurantInfo.hours.label,
    scheduleLabel: restaurantInfo.hours.scheduleLabel,
    scheduleValue: restaurantInfo.hours.scheduleValue,
}

export const restaurantLocation = {
    addressLines: restaurantInfo.address.lines,
}

const fallbackHero = unsplashImage('photo-1414235077428-338989a2e8c0')

export const restaurantHeroImage = {
    src: media('5526', '1Main-photo.jpg'),
    fallback: fallbackHero,
}

export type GalleryImage = {
    id: string
    src: string
    fallback: string
}

export type GallerySlide = {
    id: string
    images: GalleryImage[]
}

export const restaurantGallerySlides: GallerySlide[] = [
    {
        id: 'slide-1',
        images: [
            { id: 'g1', src: media('5485', '1R9A0058-copy.jpg'), fallback: fallbackHero },
            { id: 'g2', src: media('5486', '2R9A1869_2-2.jpg'), fallback: fallbackHero },
            { id: 'g3', src: media('5527', '1R9A0055-copy.jpg'), fallback: fallbackHero },
        ],
    },
    {
        id: 'slide-2',
        images: [
            { id: 'g4', src: media('3752', '10-(3).jpg'), fallback: fallbackHero },
            { id: 'g5', src: media('3748', '7-(2).jpg'), fallback: fallbackHero },
        ],
    },
]

export const restaurantSpacesSection = {
    eyebrow: 'INSIDE',
    title: 'Spaces',
    subtitle: 'Choose your ideal relaxation space and leave the rest to us.',
}

export type RestaurantSpace = {
    id: string
    count: string
    description: string
    linkLabel: string
    href: string
    image: string
    fallback: string
}

export const restaurantSpaces: RestaurantSpace[] = [
    {
        id: 'vip',
        count: '8',
        description: 'Private spaces on the mezzanine floor',
        linkLabel: 'view vip-spaces',
        href: `${TIMELESS_SITE}/en/dub/locations/al_habtoor/vip-rooms`,
        image: media('5479', '2R9A1917-copy-2.jpg'),
        fallback: unsplashImage('photo-1524758631624-e2822e304c36'),
    },
    {
        id: 'dining',
        count: '41',
        description: 'Spaces on the ground floor and terrace',
        linkLabel: 'View spaces',
        href: `${TIMELESS_SITE}/en/dub/locations/al_habtoor/rooms`,
        image: media('5531', '2.jpg'),
        fallback: unsplashImage('photo-1550966871-3ed3cdb5ed0c'),
    },
]

export type RestaurantFeature = {
    id: string
    title: string
    description: string
    video: string
    poster: string
    icon: 'key' | 'parking'
    linkLabel?: string
    href?: string
}

export const restaurantFeatures: RestaurantFeature[] = [
    {
        id: 'club-card',
        title: 'Club Card',
        description:
            'Unlock exclusive privileges, including personal growing discount, rewards and tailored offers',
        linkLabel: 'Get the club card',
        href: `${TIMELESS_SITE}/en/dub/club-card`,
        video: `${TIMELESS_MEDIA}/4771/Key.mp4`,
        poster: media('5526', '1Main-photo.jpg', 800),
        icon: 'key',
    },
    {
        id: 'parking',
        title: 'Parking',
        description: 'Valet parking with 24-hour security. First 6 hours free of charge.',
        video: `${TIMELESS_MEDIA}/4772/Parking.mp4`,
        poster: media('5531', '2.jpg', 800),
        icon: 'parking',
    },
]

export type RestaurantSection = {
    id: string
    step: number
    navLabel: string
}

export const restaurantSections: RestaurantSection[] = [
    { id: 'heading', step: 1, navLabel: 'Contacts' },
    { id: 'contacts', step: 1, navLabel: 'Contacts' },
    { id: 'gallery', step: 2, navLabel: 'Gallery' },
    { id: 'spaces', step: 3, navLabel: 'first floor' },
    { id: 'features', step: 4, navLabel: 'ground floor' },
]
