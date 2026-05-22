import { helenaImage, helenaVideo, palominoImage, luxeImage, unsplashImage } from '../../config'

/** Which static social-style buttons to show (display only, no navigation) */
export type FashionSocialConfig = {
    instagram?: boolean
    facebook?: boolean
}

export const fashionSocial: FashionSocialConfig = {
    instagram: true,
    facebook: true,
}

const shopInspoVideoPath =
    '/cdn/shop/videos/c/vp/27ffef7f02834461b80efc75528bf453/27ffef7f02834461b80efc75528bf453.HD-1080p-7.2Mbps-74085953.mp4?v=0'

export type FashionProduct = {
    id: string
    name: string
    price: string
    image: string
    fallback: string
    badge?: string
}

export type ShoppableHotspot = {
    id: string
    name: string
    price: string
    left: number
    top: number
}

export type StoreLocation = {
    id: string
    name: string
    image: string
    fallback: string
}

export type PartnerBrand = {
    id: string
    name: string
    tagline: string
    description: string
    social: FashionSocialConfig
    accent: string
    products: FashionProduct[]
}

export const fashionHero = {
    eyebrow: "SS'26",
    title: 'Meet Azure',
    subtitle: 'New Season. New Light.',
    image: helenaImage('DSC02449.jpg', 1920),
    fallback: unsplashImage('photo-1543163521-1bf539c7dd83', 1920),
    ctaLabel: 'Shop Now',
}

export const newSeasonHeading = {
    title: 'New Season. New Light.',
    eyebrow: "SS'26",
}

export const newSeasonProducts: FashionProduct[] = [
    {
        id: 'noble-one',
        name: 'Noble One',
        price: '$314.00',
        image: helenaImage('HM26SS-2193_79ac6b6a-55b3-4c2b-b4ae-3d4484e0c628.jpg', 800),
        fallback: unsplashImage('photo-1549298916-b41d501d3772', 800),
    },
    {
        id: 'azure-sand',
        name: 'Azure',
        price: '$273.00',
        image: helenaImage('DSC02449.jpg', 800),
        fallback: unsplashImage('photo-1560769629-975ec94e6a86', 800),
        badge: 'New',
    },
    {
        id: 'celina',
        name: 'Celina',
        price: '$303.00',
        image: helenaImage('CelinaOff-White_1.jpg', 800),
        fallback: unsplashImage('photo-1582897085656-c636d86dfe85', 800),
    },
    {
        id: 'nauta',
        name: 'Nauta',
        price: '$291.00',
        image: helenaImage('HM26SS-2036_e3719ece-7bdc-4f00-8b89-da167cff96da.jpg', 800),
        fallback: unsplashImage('photo-1595950653106-6c9ebd614d3a', 800),
    },
    {
        id: 'wild',
        name: 'Wild',
        price: '$350.00',
        image: helenaImage('HM26SS-2129.jpg', 800),
        fallback: unsplashImage('photo-1617629632578-459bb29e0c50', 800),
    },
    {
        id: 'azure-ivory',
        name: 'Azure Ivory',
        price: '$273.00',
        image: helenaImage('DSC02537.jpg', 800),
        fallback: unsplashImage('photo-1603487742391-4d9a39a7bb99', 800),
    },
]

export const shopInspo = {
    title: 'Shop The Inspo',
    videoSrc: helenaVideo(shopInspoVideoPath),
    videoPoster: helenaImage(
        'preview_images/27ffef7f02834461b80efc75528bf453.thumbnail.0000000000_720x.jpg',
        1280,
    ),
    lookImage: helenaImage('DSC01502_1a3bf1bf-653a-469c-a614-f450ccc4fb19.jpg', 1400),
    lookFallback: unsplashImage('photo-1490481651871-ab68de25d43d', 1400),
    hotspots: [
        { id: 'h1', name: 'Azure', price: '$273.00', left: 28, top: 62 },
        { id: 'h2', name: 'Celina', price: '$303.00', left: 58, top: 48 },
        { id: 'h3', name: 'Noble One', price: '$314.00', left: 72, top: 70 },
    ] as ShoppableHotspot[],
}

export const craftsmanshipSection = {
    title: 'Where craftsmanship meets the countryside',
    eyebrow: "SS'26",
    products: [
        {
            id: 'craft-1',
            name: 'Among The Vines',
            price: '$297.00',
            image: helenaImage('20250722_HELENAMAR_129.jpg', 800),
            fallback: unsplashImage('photo-1515886657611-9c35174265f5', 800),
        },
        {
            id: 'craft-2',
            name: 'Pure Craftsmanship',
            price: '$279.00',
            image: helenaImage('2025.01.31HelenaMarFabricaBR-328.jpg', 800),
            fallback: unsplashImage('photo-1469334031218-e382a71b716b', 800),
        },
        {
            id: 'craft-3',
            name: 'Heritage Loafer',
            price: '$291.00',
            image: helenaImage('helenamar02_11artfactory_01.jpg', 800),
            fallback: unsplashImage('photo-1525968530610-8fb082a89da1', 800),
        },
        {
            id: 'craft-4',
            name: 'Artisan Mule',
            price: '$273.00',
            image: helenaImage('HM26SS-1894_3f37280c-39ec-442f-8291-504c2aa389f7.jpg', 800),
            fallback: unsplashImage('photo-1608256246200-53bd38f3daae', 800),
        },
    ] as FashionProduct[],
}

export const brandStory = {
    title: 'Among The Vines',
    subtitle: 'Pure Craftsmanship',
    tag: '#HMGIRLIES',
    body: 'Get inspired by our girls! Follow us on @helenamar.shoes and tag us using your favourite pair.',
    collectionLabel: 'new collection',
    image: helenaImage('1C40BB40-F13E-4224-85DD-52D71F1A8A7A-m.jpg', 1200),
    fallback: unsplashImage('photo-1483985988355-763728e3685b', 1200),
    social: fashionSocial,
}

export const socialGallery = {
    hashtag: '#HMGIRLIES',
    handle: '@helenamar.shoes',
    social: fashionSocial,
    slides: [
        { id: 'g1', src: helenaImage('BR404016_resized_shopify.jpg', 900), fallback: unsplashImage('photo-1515886657611-9c35174265f5', 900) },
        { id: 'g2', src: helenaImage('Found_the_perfect_pair_helenamar.shoes_1.jpg', 900), fallback: unsplashImage('photo-1490481651871-ab68de25d43d', 900) },
        { id: 'g3', src: helenaImage('20250814_064630081_iOS.jpg', 900), fallback: unsplashImage('photo-1469334031218-e382a71b716b', 900) },
        { id: 'g4', src: helenaImage('20250828_164931486_iOS.jpg', 900), fallback: unsplashImage('photo-1525968530610-8fb082a89da1', 900) },
        { id: 'g5', src: helenaImage('1T5A2549_resized_shopify.jpg', 900), fallback: unsplashImage('photo-1543163521-1bf539c7dd83', 900) },
        { id: 'g6', src: helenaImage('20251125_124231172_iOS.jpg', 900), fallback: unsplashImage('photo-1603487742391-4d9a39a7bb99', 900) },
        { id: 'g7', src: helenaImage('IMG_2478.jpg', 900), fallback: unsplashImage('photo-1582897085656-c636d86dfe85', 900) },
        { id: 'g8', src: helenaImage('BR404877_resized_shopify.jpg', 900), fallback: unsplashImage('photo-1595950653106-6c9ebd614d3a', 900) },
    ],
}

export const storeLocations: StoreLocation[] = [
    {
        id: 'lot',
        name: 'LOT – Labels Of Tomorrow',
        image: helenaImage('Join_Us_for_an_Unforgettable_Summer__4.jpg', 600),
        fallback: unsplashImage('photo-1441986300917-64674bd600d8', 600),
    },
    {
        id: 'porto',
        name: 'The Feeting Room Porto',
        image: helenaImage('Join_Us_for_an_Unforgettable_Summer__5.jpg', 600),
        fallback: unsplashImage('photo-1555529669-e93e6e4e4c58', 600),
    },
    {
        id: 'chiado',
        name: 'The Feeting Room Chiado',
        image: helenaImage('Join_Us_for_an_Unforgettable_Summer__7.webp', 600),
        fallback: unsplashImage('photo-1556906781-9a412961c28c', 600),
    },
    {
        id: 'factory',
        name: 'The Feeting Room Lx Factory',
        image: helenaImage('helenamar03_11artfactory_01.jpg', 600),
        fallback: unsplashImage('photo-1490481651871-ab68de25d43d', 600),
    },
]

export const partnerBrands: PartnerBrand[] = [
    {
        id: 'palomino',
        name: 'Palomino Lifestyle Co.',
        tagline: 'NEW TO THE SHOP',
        description:
            'MEMORIAL WEEKEND DENIM SALE — 40% OFF FRIDAY, SATURDAY, SUNDAY (discount at checkout). Western-inspired apparel with modern ease.',
        social: { instagram: true, facebook: true },
        accent: '#8b5a2b',
        products: [
            {
                id: 'pal-1',
                name: 'Ariel Swing Dress',
                price: '$140.00',
                image: palominoImage('ArielSwingDressFront_880x.webp', 700),
                fallback: unsplashImage('photo-1595777457583-95e059d45569', 700),
            },
            {
                id: 'pal-2',
                name: 'Desert Denim Jacket',
                price: '$98.00',
                image: palominoImage('ArielSwingDressBack_880x.webp', 700),
                fallback: unsplashImage('photo-1541099641319-a32deb656c8a', 700),
            },
            {
                id: 'pal-3',
                name: 'Ranch Knit Top',
                price: '$58.00',
                image: palominoImage('ArielSwingDressFront_440x.webp', 700),
                fallback: unsplashImage('photo-1434389677669-e08b4cac3105', 700),
            },
            {
                id: 'pal-4',
                name: 'Trail Blouse',
                price: '$68.00',
                image: palominoImage('ArielSwingDressBack_440x.webp', 700),
                fallback: unsplashImage('photo-1485968579580-b6d095bcff51', 700),
            },
        ],
    },
    {
        id: 'luxe',
        name: 'Luxe Living Fashions',
        tagline: 'Shop in Luxury',
        description:
            'This is not a season. It is a standard. A precise expression of modern form — structure leads, movement follows.',
        social: { instagram: true, facebook: true },
        accent: '#1a1a1a',
        products: [
            {
                id: 'luxe-1',
                name: 'Velour Milan Gown',
                price: '$3,999.00',
                image: luxeImage('11325789-AF7F-4A91-89D6-27BC14157620.jpg', 700),
                fallback: unsplashImage('photo-1539008835657-9e8e968759ec', 700),
            },
            {
                id: 'luxe-2',
                name: 'Award Show Couture',
                price: '$2,999.00',
                image: luxeImage('15825106-3088-4BFE-AF9D-28589BA8507B.jpg', 700),
                fallback: unsplashImage('photo-1595777457583-95e059d45569', 700),
            },
            {
                id: 'luxe-3',
                name: 'Structured Evening Suit',
                price: '$1,999.00',
                image: luxeImage('17CBE931-5BDD-483E-9340-86710988E1E1.jpg', 700),
                fallback: unsplashImage('photo-1558618666-fcd25c85cd64', 700),
            },
            {
                id: 'luxe-4',
                name: 'Velour de Luxe Cape',
                price: '$2,399.00',
                image: luxeImage('2654A776-2FAC-4855-B01D-1FB804E3DAE1.jpg', 700),
                fallback: unsplashImage('photo-1509631179647-0177331693ae', 700),
            },
        ],
    },
]
