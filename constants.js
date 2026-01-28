export const NAV_ITEMS = [
    {
        label: 'Nosotros',
        href: '/nosotros',
        subItems: [
            { label: 'Historia', href: '/nosotros/historia' },
            { label: 'Cultura', href: '/nosotros/cultura' },
            { label: 'Centros de Trabajo', href: '/nosotros/centros-de-operacion' },
        ]
    },
    {
        label: 'Compromiso',
        href: '/compromiso',
        subItems: [
            { label: 'Cadena de Valor', href: '/compromiso/cadena-de-valor' },
            { label: 'Residuos', href: '/compromiso/residuos' },
            { label: 'Agua', href: '/compromiso/agua' },
            { label: 'Bienestar', href: '/compromiso/bienestar' },
        ]
    },
    {
        label: 'Productos',
        href: '/productos',
        subItems: [
            { label: 'Nuestras Marcas', href: '/productos/nuestras-marcas' },
        ]
    },
    {
        label: 'Tiendas Santa Clara',
        href: '/tiendas-santa-clara',
        subItems: [
            { label: 'Directorio', href: '/tiendas-santa-clara/directorio' },
            { label: 'Productos', href: '/tiendas-santa-clara/productos' },
            { label: 'Promociones', href: '/tiendas-santa-clara/promociones' },
            { label: 'Concesionarios', href: '/tiendas-santa-clara/concesionarios' },
        ]
    },
    {
        label: 'Talento',
        href: '/talento',
        subItems: [
            { label: 'Oferta de Valor', href: '/talento/oferta-de-valor' },
            { label: 'Capacitación y Desarrollo', href: '/talento/capacitacion' },
            { label: 'Sé Parte', href: '/talento/se-parte' },
            { label: 'Diversidad e Inclusión', href: '/talento/diversidad' },
            { label: 'Talento a Bordo', href: 'https://jvalle.teamtailor.com/' },
        ]
    },
    {
        label: 'Proveedores',
        href: '/proveedores'
    },
    {
        label: 'Contacto',
        href: '/contacto'
    }
];

export const BRANDS = [
    {
        id: 'DelValle',
        name: 'Del Valle',
        productImageUrl: '/images/products/del-valle-desktop.webp',
        logoUrl: '/images/logos/del-valle.webp',
        color: '#000000'
    },
    {
        id: 'SantaClara',
        name: 'Santa Clara',
        productImageUrl: '/images/products/santa-clara-desktop.png',
        logoUrl: '/images/logos/santa-clara.webp',
        color: '#6d1d42'
    },
    {
        id: 'ADES',
        name: 'Ades',
        productImageUrl: '/images/products/ades-desktop.png',
        logoUrl: '/images/logos/ades.png',
        color: '#009a44'
    },
    {
        id: 'PowerAde',
        name: 'Powerade',
        productImageUrl: '/images/products/powerade-desktop.webp',
        logoUrl: '/images/logos/powerade.png',
        color: '#00549f'
    },
    {
        id: 'FuzeTea',
        name: 'Fuze Tea',
        productImageUrl: '/images/products/fuze-tea-desktop.webp',
        logoUrl: '/images/logos/fuze-tea.png',
        color: '#6cbf4d'
    },
    {
        id: 'GlaceauVitaminwater',
        name: 'Vitaminwater',
        productImageUrl: '/images/products/vitaminwater-desktop.webp',
        logoUrl: '/images/logos/vitaminwater.png',
        color: '#e61e25'
    }
];

export const COMMITMENT_CARDS = [
    {
        id: 'cadena',
        title: 'Cadena de Valor',
        imageUrl: '/images/commitment/cadena-de-valor.jpg',
        // SVG strings need to be properly escaped or handled as strings. 
        // Since we are inserting into innerHTML, strings are fine.
        iconSvg: `<path d="M25,8.2C15.8,8.2,8.2,15.8,8.2,25S15.8,41.8,25,41.8S41.8,34.2,41.8,25S34.2,8.2,25,8.2z M37.5,17.1h-3.7 c-0.7-2.3-1.7-4.2-3-5.7C33.5,12.6,35.8,14.6,37.5,17.1z M32.9,25c0,2.1-0.3,4.1-0.7,5.9H17.8c-0.4-1.8-0.7-3.8-0.7-5.9 s0.3-4.1,0.7-5.9h14.3C32.6,20.9,32.9,22.9,32.9,25z M25,39.7c-2.7,0-5.1-2.7-6.6-6.7h13.1C30.1,36.9,27.7,39.7,25,39.7z M18.4,17.1 c1.4-4,3.9-6.7,6.6-6.7s5.1,2.7,6.6,6.7H18.4z M19.3,11.4c-1.2,1.5-2.3,3.4-3,5.7h-3.7C14.2,14.6,16.5,12.6,19.3,11.4z M11.5,19.1 h4.3c-0.4,1.8-0.6,3.8-0.6,5.9s0.2,4.1,0.6,5.9h-4.3c-0.8-1.8-1.2-3.8-1.2-5.9C10.2,22.9,10.7,20.9,11.5,19.1z M12.5,32.9h3.7 c0.7,2.3,1.7,4.2,3,5.7C16.5,37.4,14.2,35.4,12.5,32.9z M30.7,38.6c1.2-1.5,2.3-3.4,3-5.7h3.7C35.8,35.4,33.5,37.4,30.7,38.6z M38.5,30.9h-4.3c0.4-1.8,0.6-3.8,0.6-5.9s-0.2-4.1-0.6-5.9h4.3c0.8,1.8,1.2,3.8,1.2,5.9C39.8,27.1,39.3,29.1,38.5,30.9z M25,6.8 c1.7,0,3-1.4,3-3c0-1.7-1.4-3-3-3s-3,1.4-3,3C22,5.5,23.3,6.8,25,6.8z M25,2.8c0.6,0,1,0.5,1,1s-0.5,1-1,1s-1-0.5-1-1 S24.4,2.8,25,2.8z M25,43.2c-1.7,0-3,1.4-3,3c0,1.7,1.4,3,3,3s3-1.4,3-3C28,44.5,26.7,43.2,25,43.2z M25,47.2c-0.6,0-1-0.5-1-1 s0.5-1,1-1s1,0.5,1,1S25.6,47.2,25,47.2z M46.2,22c-1.7,0-3,1.4-3,3s1.4,3,3,3c1.7,0,3-1.4,3-3S47.9,22,46.2,22z M46.2,26 c-0.6,0-1-0.5-1-1s0.5-1,1-1s1,0.5,1,1S46.8,26,46.2,26z M6.8,25c0-1.7-1.4-3-3-3c-1.7,0-3,1.4-3,3s1.4,3,3,3 C5.5,28,6.8,26.7,6.8,25z M2.8,25c0-0.6,0.5-1,1-1s1,0.5,1,1s-0.5,1-1,1S2.8,25.6,2.8,25z M30.6,4.4c0.2-0.5,0.7-0.8,1.3-0.6 C38.6,6,44,11.3,46.1,18.1c0.2,0.5-0.1,1.1-0.6,1.3c-0.1,0-0.2,0-0.3,0c-0.4,0-0.8-0.3-1-0.7c-2-6.1-6.8-11-13-13 C30.7,5.5,30.5,5,30.6,4.4z M3.7,18.1C5.9,11.3,11.3,6,18,3.8c0.5-0.2,1.1,0.1,1.3,0.6c0.2,0.5-0.1,1.1-0.6,1.3c-6.2,2-11,6.9-13,13 c-0.1,0.4-0.5,0.7-1,0.7c-0.1,0-0.2,0-0.3,0C3.8,19.2,3.5,18.6,3.7,18.1z M19.3,45.6c-0.1,0.4-0.5,0.7-1,0.7c-0.1,0-0.2,0-0.3,0 C11.3,44.1,5.9,38.7,3.7,32c-0.2-0.5,0.1-1.1,0.6-1.3c0.5-0.2,1.1,0.1,1.3,0.6c2,6.2,6.9,11,13,13C19.2,44.5,19.4,45.1,19.3,45.6z M46.1,32c-2.2,6.7-7.5,12.1-14.2,14.3c-0.1,0-0.2,0-0.3,0c-0.4,0-0.8-0.3-1-0.7c-0.2-0.5,0.1-1.1,0.6-1.3c6.1-2,11-6.9,13-13 c0.2-0.5,0.7-0.8,1.3-0.6C46,30.9,46.3,31.4,46.1,32z" fill="currentColor" />`,
        description: 'Tenemos el compromiso de ayudar al país a través de...',
        link: '/compromiso/cadena-de-valor'
    },
    {
        id: 'residuos',
        title: 'Residuos',
        imageUrl: '/images/commitment/residuos.jpg',
        iconSvg: `<path d="M47.5,84.7l-13-7.6c-0.9-0.5-2-0.2-2.6,0.7c-0.5,0.9-0.2,2.1,0.7,2.6l7.1,4.2l-20.5-0.1c-3.7,0-7.1-2-9-5.2 s-1.9-7.1,0-10.4l11.1-19.1c0.5-0.9,0.2-2-0.7-2.6c-0.9-0.5-2.1-0.2-2.6,0.7L7.1,67c-2.6,4.4-2.6,9.7,0,14.1 c2.5,4.4,7.1,7.1,12.2,7.1l20.4,0.1l-6.6,4c-0.9,0.5-1.2,1.7-0.7,2.6c0.4,0.6,1,0.9,1.6,0.9c0.3,0,0.7-0.1,1-0.3l12.2-7.3 c0.5-0.1,0.8-0.5,1.1-0.9c0.2-0.3,0.3-0.7,0.3-1C48.4,85.7,48.1,85.1,47.5,84.7z M59,15.8L70,35c0.5,0.9,1.7,1.2,2.6,0.7 s1.2-1.7,0.7-2.6l-11-19.2C59.7,9.5,55.1,6.8,50,6.8s-9.7,2.6-12.3,7L27.5,31.5l-0.1-7.7c0-1-0.9-1.9-1.9-1.9s-1.9,0.9-1.9,1.9 L23.8,38c-0.1,0.5,0,1,0.2,1.4c0.2,0.3,0.4,0.6,0.7,0.8c0.3,0.2,0.6,0.2,0.9,0.2s0.6-0.1,0.9-0.2l13-7.4c0.9-0.5,1.2-1.7,0.7-2.6 s-1.7-1.2-2.6-0.7l-7.1,4.1L41,15.7c1.9-3.2,5.2-5.2,9-5.2C53.8,10.6,57.1,12.6,59,15.8z M93,67.2L82.8,49.5l6.8,3.8 c0.9,0.5,2.1,0.2,2.6-0.7s0.2-2.1-0.7-2.6l-12.4-6.9c-0.4-0.3-0.8-0.5-1.3-0.5c-0.4,0-0.7,0.1-1,0.2c-0.6,0.3-0.9,0.9-0.9,1.6 l-0.1,15c0,1,0.8,1.9,1.9,1.9l0,0c1,0,1.9-0.8,1.9-1.9l0.1-8.2L89.9,69c1.9,3.3,1.8,7.1,0,10.4s-5.3,5.2-9,5.2l-22.1-0.1l0,0 c-1,0-1.9,0.8-1.9,1.9c0,1,0.8,1.9,1.9,1.9l22.1,0.1H81c5.1,0,9.7-2.6,12.2-7C95.5,76.9,95.5,71.6,93,67.2z" fill="currentColor" />`,
        description: 'Nuestro objetivo de la mano con la IMCC, es recuperar para su reciclaje...',
        link: '/compromiso/residuos'
    },
    {
        id: 'agua',
        title: 'Agua',
        imageUrl: '/images/commitment/agua.jpg',
        iconSvg: `<path d="M26,50c-9.9,0-18-8.2-18-18.3C8,21.8,24.5,3.1,25.3,2.3c0.4-0.4,1.1-0.4,1.5,0C27.5,3.1,44,21.8,44,31.6 C44,41.8,35.9,50,26,50z M26,4.5c-3.3,3.8-16,19.2-16,27.1c0,9,7.2,16.3,16,16.3s16-7.3,16-16.3C42,23.7,29.3,8.3,26,4.5z M29,43c-0.5,0-0.9-0.3-1-0.8c-0.1-0.5,0.2-1.1,0.8-1.2c8.9-1.8,7.3-10.5,7.2-10.8c-0.1-0.5,0.2-1.1,0.8-1.2 c0.5-0.1,1.1,0.2,1.2,0.8c0,0.1,2.1,11-8.8,13.2C29.1,43,29.1,43,29,43z" fill="currentColor" />`,
        description: 'Buscamos devolver al planeta parte del agua que utilizamos...',
        link: '/compromiso/agua'
    },
    {
        id: 'bienestar',
        title: 'Bienestar',
        imageUrl: '/images/commitment/bienestar.jpg',
        iconSvg: `<path d="M6,29c-0.3,0-0.7-0.2-0.8-0.5l-5-8C0.1,20.4,0,20.2,0,20V1c0-0.6,0.4-1,1-1h12c0.3,0,0.6,0.1,0.8,0.4l5.3,7 l-1.6,1.2l-5-6.6H2v17.7l4.3,6.9l17.2-9.9L22,14.6l1.6-1.2l2.2,3c0.3,0.4,0.2,1.1-0.2,1.4c0,0-0.1,0-0.1,0.1l-19,11 C6.3,29,6.2,29,6,29z M9,31c-0.3,0-0.6-0.2-0.8-0.4l-2-3l1.7-1.1l1.5,2.2l14.3-8.9l-1.4-2.1l1.7-1.1l2,3c0.3,0.5,0.2,1.1-0.3,1.4 c0,0,0,0,0,0l-16,10C9.4,30.9,9.2,31,9,31z M35,64h-0.9c-1,0-2-0.5-2.7-1.3l-2.3-3.1l1.6-1.2l2.3,3.1c0.3,0.3,0.6,0.5,1.1,0.5H35c0.4,0,0.7-0.1,0.9-0.4 c0.4-0.4,0.5-1.1,0.2-1.6l-0.4-0.7l0,0l-5.6-8.7c-0.3-0.5-0.2-1.1,0.3-1.4s1.1-0.2,1.4,0.3l5.6,8.7c0.5,0.7,1.4,0.9,2.1,0.4 c0,0,0.1,0,0.1-0.1c0.6-0.5,0.8-1.3,0.4-2l-5.8-9.1c-0.3-0.5-0.2-1.1,0.3-1.4s1.1-0.2,1.4,0.3l4.5,6c0.4,0.5,1.1,0.6,1.6,0.2 c0,0,0.1-0.1,0.1-0.1c0.4-0.4,0.4-1,0.1-1.5l-5-7.5c-0.3-0.5-0.2-1.1,0.3-1.4c0.5-0.3,1.1-0.2,1.4,0.3l4.1,5.8 c0.2,0.3,0.7,0.4,1.1,0.2c0.1-0.1,0.2-0.2,0.3-0.4l0.6-1.7c0.3-0.9,0.1-2-0.5-2.7l-3.1-3.9l-2-3L26.4,25.8l-4.1-4.1l1.4-1.4l4,4 l12.9,10.9c0.1,0.1,0.1,0.1,0.2,0.2l2,3l3.1,3.9c0.7,0.9,1.1,1.9,1.1,3.1c0,0.5-0.1,1.1-0.3,1.6l-0.6,1.7c-0.2,0.7-0.7,1.3-1.4,1.6 c-0.2,0.1-0.4,0.2-0.7,0.2c0.5,1.2,0.3,2.6-0.7,3.5c-0.6,0.6-1.4,0.9-2.3,0.9l0.4,0.6c1,1.6,0.6,3.8-1.1,4.8 c-0.6,0.4-1.4,0.6-2.2,0.5C38.3,62.6,36.8,64,35,64z" fill="currentColor" />`,
        description: 'La salud y protección de nuestros colaboradores es lo más importante...',
        link: '/compromiso/bienestar'
    },
    {
        id: 'portafolio',
        title: 'Portafolio',
        imageUrl: '/images/commitment/portafolio.jpg',
        iconSvg: `<path d="M53.6,16.9C53.6,16.9,53.6,16.9,53.6,16.9c1.7-1.4,2.8-3.5,2.8-5.7c0-4-3.3-7.2-7.4-7.2s-7.4,3.2-7.4,7.2 c0,2.3,1.1,4.4,2.9,5.7c0,0-0.1,0-0.1,0c-1.8,0.8-4,2.9-5.5,4.7c-0.6-0.4-1.1-0.7-1.6-0.9c-0.1-0.1-0.2-0.1-0.4-0.1 c2.1-1.5,3.5-4,3.5-6.6c0-4.5-3.8-8.2-8.4-8.2s-8.4,3.7-8.4,8.2c0,2.7,1.4,5.1,3.5,6.6c-0.1,0-0.2,0.1-0.4,0.1 c-0.5,0.2-1,0.5-1.6,0.9c-1.5-1.9-3.7-4-5.5-4.7c0,0-0.1,0-0.1,0c1.8-1.3,2.9-3.4,2.9-5.7c0-4-3.3-7.2-7.4-7.2s-7.4,3.2-7.4,7.2 c0,2.3,1.1,4.4,2.9,5.7c0,0-0.1,0-0.1,0c-2.8,1.2-7.1,6-8,8.9c-0.7,2.3-0.1,8.7,0,9.4c0,2.9,2.3,5.3,5.2,5.5l0.3,6.4 c0,2.2,1.7,3.9,3.9,3.9H15c0,0,0,0,0,0s0,0,0,0h3.3c1.9,0,3.5-1.4,3.8-3.3c0.4,0.1,0.8,0.2,1.3,0.2l0.4,7.6c0,2.4,1.9,4.4,4.3,4.4 h7.8c2.4,0,4.3-2,4.3-4.4l0.4-7.6c0.4,0,0.9-0.1,1.3-0.2c0.3,1.9,1.9,3.3,3.8,3.3H49c0,0,0,0,0,0s0,0,0,0h3.3 c2.1,0,3.9-1.8,3.9-3.9l0.3-6.5c2.9-0.3,5.2-2.6,5.1-5.4c0.1-0.7,0.7-7.2,0-9.5C60.7,22.9,56.5,18.2,53.6,16.9z" fill="currentColor" />`,
        description: 'Promovemos la gran variedad de nuestros productos. Nuestros colaboradores...',
        link: '/compromiso/portafolio'
    }
];

export const HERO_SLIDES = [
    {
        desktop: '/images/Header_Home_2024-2.jpg',
        mobile: '/images/Header_Home_2024-Mobile-2.jpg'
    },
    {
        desktop: '/images/products/del-valle-desktop.webp',
        mobile: '/images/products/del-valle-mobile.webp'
    },
    {
        desktop: '/images/products/santa-clara-desktop.png',
        mobile: '/images/products/santa-clara-mobile.png'
    },
    {
        desktop: '/images/products/ades-desktop.png',
        mobile: '/images/products/ades-mobile.png'
    }
];
