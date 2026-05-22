import { nickAsset, unsplashImage } from '../../config'

// ── Reference assets (Nickelodeon Universe) ──
export const nickAssets = {
    todayPattern: nickAsset('/wp-content/uploads/BackgroundPAttern1_BlueSM2.jpg'),
    heroBg: nickAsset('/wp-content/uploads/nick-u-south-entrance-2023-websize.jpg'),
    charactersSlime: nickAsset('/wp-content/uploads/CarouselSlimeRight.png'),
    iconHours: nickAsset('/wp-content/themes/nicku/assets/images/theme/Hours_Orange.svg'),
    iconMaintenance: nickAsset('/wp-content/themes/nicku/assets/images/theme/Maintenance_Pink.svg'),
    iconSunny: nickAsset('/wp-content/themes/nicku/assets/images/theme/Sunny_Blue.svg'),
    meetMrsPuff: nickAsset('/wp-content/uploads/Mrs.Puff_.png'),
}

export type TodaySliderCard =
    | {
          id: string
          type: 'info'
          href: string
          icon: string
          iconFallback: string
          title: string
          detail: string
          cta: string
      }
    | {
          id: string
          type: 'appearance'
          href: string
          title: string
          image: string
      }

export const todaySliderCards: TodaySliderCard[] = [
    {
        id: 'hours',
        type: 'info',
        href: '#plan-visit',
        icon: nickAssets.iconHours,
        iconFallback: nickAssets.iconHours,
        title: 'Park Hours',
        detail: '10 a.m. – 9 p.m.',
        cta: 'View Park Info',
    },
    {
        id: 'swing-along',
        type: 'info',
        href: '#rides',
        icon: nickAssets.iconMaintenance,
        iconFallback: nickAssets.iconMaintenance,
        title: 'Backyardigans Swing-Along',
        detail: 'Closed May 18 – May 22, 2026',
        cta: 'View Schedule',
    },
    {
        id: 'meet-puff',
        type: 'appearance',
        href: '#characters',
        title: 'Meet Mrs. Puff',
        image: nickAssets.meetMrsPuff,
    },
    {
        id: 'indoor',
        type: 'info',
        href: '#plan-visit',
        icon: nickAssets.iconSunny,
        iconFallback: nickAssets.iconSunny,
        title: 'Indoor Park',
        detail: 'Always 72° and Sunny',
        cta: 'Plan Your Visit',
    },
]

export type PlayCharacter = {
    id: string
    name: string
    href: string
    image: string
    bg: string
}

export const playCharacters: PlayCharacter[] = [
    { id: 'dora', name: 'Dora', href: '#characters', image: nickAsset('/wp-content/uploads/Dora-1.png'), bg: '#e94c91' },
    { id: 'ming-ming', name: 'Ming-Ming', href: '#characters', image: nickAsset('/wp-content/uploads/MingMing.png'), bg: '#ffd500' },
    { id: 'donnie', name: 'Donnie', href: '#characters', image: nickAsset('/wp-content/uploads/Donnie.png'), bg: '#2eb349' },
    { id: 'spongebob', name: 'SpongeBob SquarePants', href: '#characters', image: nickAsset('/wp-content/uploads/Spongebob.png'), bg: '#2eb349' },
    { id: 'gil', name: 'Gil and Bubble Puppy', href: '#characters', image: nickAsset('/wp-content/uploads/GilBubblePuppy.png'), bg: '#7b2cbf' },
    { id: 'boots', name: 'Boots', href: '#characters', image: nickAsset('/wp-content/uploads/Boots.png'), bg: '#e94c91' },
    { id: 'patrick', name: 'Patrick', href: '#characters', image: nickAsset('/wp-content/uploads/Patrick.png'), bg: '#2eb349' },
    { id: 'molly', name: 'Molly', href: '#characters', image: nickAsset('/wp-content/uploads/Molly.png'), bg: '#7b2cbf' },
    { id: 'uniqua', name: 'Uniqua', href: '#characters', image: nickAsset('/wp-content/uploads/Uniqua.png'), bg: '#ff6700' },
    { id: 'aang', name: 'Aang', href: '#characters', image: nickAsset('/wp-content/uploads/Aang.png'), bg: '#2eb349' },
    { id: 'kai-lan', name: 'Kai-Lan', href: '#characters', image: nickAsset('/wp-content/uploads/KaiLan.png'), bg: '#00bce7' },
    { id: 'raph', name: 'Raph', href: '#characters', image: nickAsset('/wp-content/uploads/Raph.png'), bg: '#2eb349' },
]

export type PlayRide = {
    id: string
    title: string
    category: string
    status: string
    image: string
    fallbackImage: string
    footerTone: 'purple' | 'green' | 'dark'
}

/** Verified Unsplash photos (same IDs used elsewhere in the app) */
const ridePhotos = {
    indoorPlay: unsplashImage('photo-1535572290543-960a8046f5af', 800),
    kidsFun: unsplashImage('photo-1503454537195-1dcabb73ffb9', 800),
    arcade: unsplashImage('photo-1515703407324-5f753afd8be8', 800),
    familyPlay: unsplashImage('photo-1527515637462-cff94eecc1ac', 800),
    amusement: unsplashImage('photo-1544551763-77ef2d0cfc6c', 800),
} as const

export const playRides: PlayRide[] = [
    {
        id: 'fly-appa',
        title: 'Fly With Appa',
        category: 'Family',
        status: 'Open',
        image: ridePhotos.indoorPlay,
        fallbackImage: nickAssets.heroBg,
        footerTone: 'purple',
    },
    {
        id: 'banana-swing',
        title: "Boots' Banana Swing",
        category: 'Junior',
        status: 'Open',
        image: ridePhotos.kidsFun,
        fallbackImage: ridePhotos.familyPlay,
        footerTone: 'green',
    },
    {
        id: 'glow-golf',
        title: 'Rock of Ages Blacklight Minigolf',
        category: 'Attractions',
        status: 'Starting at $10.99',
        image: ridePhotos.arcade,
        fallbackImage: ridePhotos.indoorPlay,
        footerTone: 'dark',
    },
    {
        id: 'paw-patrol',
        title: 'PAW Patrol Adventure Bay',
        category: 'Family',
        status: 'Open',
        image: ridePhotos.familyPlay,
        fallbackImage: ridePhotos.kidsFun,
        footerTone: 'purple',
    },
    {
        id: 'shredder',
        title: "Shredder's Mutant Masher",
        category: 'Family',
        status: 'Open',
        image: ridePhotos.amusement,
        fallbackImage: ridePhotos.indoorPlay,
        footerTone: 'purple',
    },
]
