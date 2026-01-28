
export const History = () => {
    // We will generate the timeline items dynamically based on the structure provided by the user.
    // The images have been downloaded to /images/history/

    // Helper to generate a timeline section
    const createTimelineSection = (year, text, image, iconClass, isLeft, bgImage = null) => {
        // Adjust paths for local images
        const localImage = `/images/history/${image.split('/').pop()}`;
        const localBgImage = bgImage ? `/images/history/${bgImage.split('/').pop()}` : null;

        const dateClass = isLeft ? 'date-left' : 'date-right';
        const arrowClass = isLeft ? 'arrow-right' : 'arrow-left';

        // SVG paths (reusing the one from the provided HTML, assuming it's the standard tear shape)
        const svgPath = `<path class="st0 element-animation" d="M44.9,153.5C24.2,136.1,11,110,11,80.9c0-30.2,14.1-57,36.1-74.4l-2-0.8C23.1,23.3,9,50.5,9,81 c0,29.7,13.3,56.2,34.3,73.8h-5.8v2H47v-9.5h-2V153.5z"/>`;
        const svgTransform = isLeft ? 'transform="translate(0, 0) scale(-1, 1) "' : '';

        // Content logic based on side
        let content;
        if (isLeft) {
            content = `
            <div class="row d-flex align-items-center justify-content-center">
                <div class="col tear-container text-center">
                    <div class="year">${year}</div>
                    ${localBgImage ? `<img src="${localBgImage}" class="fondo img-fluid" alt="">` : ''}
                </div>
                <div class="col-2 imagen">
                    <img src="${localImage}" alt="">
                </div>
                <div class="col text-center ${arrowClass}">
                    <div class="desc">${text}</div>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.7 159.9" style="enable-background:new 0 0 56.7 159.9;" xml:space="preserve" ${svgTransform}>
                        ${svgPath}
                    </svg>
                </div>
            </div>`;
        } else {
            content = `
            <div class="row d-flex align-items-center justify-content-center">
                <div class="col text-center ${arrowClass}">
                    <div class="desc">${text}</div>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.7 159.9" style="enable-background:new 0 0 56.7 159.9;" xml:space="preserve" ${svgTransform}>
                        ${svgPath}
                    </svg>
                </div>
                <div class="col-2 imagen">
                    <img src="${localImage}" alt="">
                </div>
                <div class="col tear-container text-center">
                    <div class="year">${year}</div>
                    ${localBgImage ? `<img src="${localBgImage}" class="fondo img-fluid" alt="">` : ''}
                </div>
            </div>`;
        }

        return `
        <section class="timeline-wrap desktop">
            <div class="${dateClass} date">
                ${content}
            </div>
        </section>`;
    };

    // Data for the timeline (extracted from the user's provided HTML)
    const timelineData = [
        { year: '1924', text: 'La familia Conde inicia con el reparto de leche a domicilio a través del establo Santa Clara.', image: '1924.jpg', isLeft: false },
        { year: '1947', text: 'Luis Cetto funda Jugos Del Valle, dedicándose sólo a la producción de jugo de uva.', image: '1947.jpg', bgImage: 'uvas.png', isLeft: true },
        { year: '1956', text: 'Comenzamos la ordeña mecánica.', image: '1956.jpg', isLeft: false },
        { year: '1957', text: 'Sustituimos el ganado criollo por vacas importadas de Canadá y Estados Unidos.', image: '1957.jpg', isLeft: true },
        { year: '1968', text: 'Iniciamos operaciones en Planta Tepotzotlán produciendo jugos y néctares.', image: '1968.jpg', bgImage: 'vaca.png', isLeft: false },
        { year: '1968', text: 'Invertimos en un salón de ordeña y pasteurizador.', image: '1968-2.jpg', isLeft: true },
        { year: '1970', text: 'Fuimos pioneros en la implementación de los empaques con el sistema Twistoff; mejor conocido como “abre fácil”', image: '1970.jpg', isLeft: false },
        { year: '1978', text: 'La familia Albarrán adquiere Jugos Del Valle, traspasando las fronteras de México, haciendo llegar nuestros productos a Brasil y Estados Unidos.', image: '1978.jpg', bgImage: 'naranjas.png', isLeft: true },
        { year: '1982', text: 'Lanzamos al mercado Frutsi.', image: '1982.jpg', isLeft: false },
        { year: '1985', text: 'Diversificamos nuestro portafolio con la fabricación de helados, quesos y yogurt.', image: '1985.jpg', isLeft: true },
        { year: '1985', text: 'Abrimos un nuevo canal de venta para nuestros productos lácteos, Tiendas Santa Clara.', image: '1985-2.jpg', bgImage: 'PALETA.png', isLeft: false },
        { year: '1986', text: 'Lanzamos al mercado Beberé.', image: '1986.jpg', isLeft: true },
        { year: '1992', text: 'Iniciamos operaciones en la planta de Zacatecas, realizando la molienda y pulpa de fruta para nuestras bebidas.', image: '1992.jpg', isLeft: false },
        { year: '1992', text: 'Este año fuimos pioneros en usar el envasado en lata de aluminio.', image: '1992-2.jpg', bgImage: 'manzanas.png', isLeft: true },
        { year: '1992', text: 'Iniciamos con la venta de leche de medio galón y galón.', image: '1992-3.jpg', isLeft: false },
        { year: '1994', text: 'Comenzamos la venta de leche en envase de cartón de 1 litro.', image: '1994.jpg', isLeft: true },
        { year: '1996', text: 'Lanzamos al mercado los primeros empaques de cartón aséptico para jugos y néctares.', image: '1996.jpg', bgImage: 'naranjas-2.png', isLeft: false },
        { year: '2000', text: 'Adquirimos la marca Florida 7, ampliando nuestro portafolio de jugos y néctares.', image: '2000.jpg', isLeft: true },
        { year: '2004', text: 'Iniciamos con la venta de leche UHT (Ultrapasteurizada)', image: '2004.jpg', isLeft: false },
        { year: '2006', text: 'Innovamos la pasteurización de la leche con un sistema de infusión a base de vapor.', image: '2006.jpg', bgImage: 'leche.png', isLeft: true },
        { year: '2007', text: 'Como Jugos Del Valle, nos integramos como parte de la Industria Mexicana de Coca-Cola.', image: '2007-NUEVA.jpg', isLeft: false },
        { year: '2008', text: 'Ampliamos nuestro portafolio de productos de bebidas no carbonatadas con la adopción de Vitaminwater, Powerade, entre otras.', image: '2008.jpg', isLeft: true },
        { year: '2008', text: 'Lanzamos las lechitas de helado con 4 diferentes sabores.', image: '2008-2.jpg', bgImage: 'chocolat3e.png', isLeft: false },
        { year: '2009', text: 'Comenzamos en Planta Monterrey el envasado de bebidas no carbonatadas.', image: '2009.jpg', isLeft: true },
        { year: '2009', text: 'Adquirimos la segunda línea de envasado de leche UHT.', image: '2009-NUEVA.jpg', isLeft: false },
        { year: '2010', text: 'Lanzamos Del Valle Pulpy y Del Valle Reserva, hoy 100% natural.', image: '2010.jpg', bgImage: 'jugo.png', isLeft: true },
        { year: '2011', text: 'Continuamos el crecimiento del portafolio de bebidas, lanzando al mercado Powerade ION4. Este mismo año ampliamos nuestro Centro de Distribución.', image: '2011.jpg', isLeft: false },
        { year: '2012', text: 'Lanzamos Fuze Tea.', image: '2012.jpg', isLeft: true },
        { year: '2012', text: 'Sumamos a Santa Clara en el modelo de la Industria Mexicana de Coca-Cola.', image: '2012-2.jpg', bgImage: 'helado.png', isLeft: false },
        { year: '2013', text: 'Lanzamos la marca Ciel Mini e instalamos más líneas de producción.', image: '2013.jpg', isLeft: true },
        { year: '2014', text: 'Lanzamos Powerade Zero.', image: '2014.jpg', isLeft: false },
        { year: '2014', text: 'Desarrollamos una nueva identidad visual para nuestra marca Del Valle.', image: '2014-2.jpg', bgImage: 'duraznos.png', isLeft: true },
        { year: '2015', text: 'Lanzamos nuevos sabores de Pulpy: mango y durazno.', image: '2015.jpg', isLeft: false },
        { year: '2015', text: 'Obtuvimos la certificación en todos nuestros Centros Operativos en Sistemas de Gestión Integral ISOS.', image: '2015-2.jpg', isLeft: true },
        { year: '2016', text: 'Integramos la operación de Jugos Del Valle-Santa Clara, como la empresa de bebidas no carbonatadas de la Industria Mexicana de Coca-Cola.', image: '2016.jpg', bgImage: 'cono-helado-2.png', isLeft: false },
        { year: '2017', text: 'Sumamos al portafolio la marca de productos de soya AdeS.', image: '2017.jpg', isLeft: true },
        { year: '2017', text: 'Renovamos la imagen de Santa Clara, manteniendo el origen artesanal y delicioso sabor de los productos.', image: '2017-2.jpg', isLeft: false },
        { year: '2017', text: 'Iniciamos operaciones de un nuevo Centro de Distribución.', image: '2017-3.jpg', bgImage: 'mango.png', isLeft: true },
        { year: '2018', text: 'Expandimos nuestro portafolio de yogurts Santa Clara y lanzamos Del Valle 100% jugo.', image: '2018.jpg', isLeft: false },
        { year: '2019', text: 'Tomamos la operación de Planta Lerma para la producción de la marca AdeS, y lanzamos nuevas variedades de bebidas a base de semillas: coco y almendra.', image: '2019.jpg', isLeft: true },
        { year: '2019', text: 'Inauguramos la planta de lácteos más grande del Sistema Coca-Cola en México, ubicada en Lagos de Morenos, Jalisco.', image: '2019-3.jpg', bgImage: 'guayabas.png', isLeft: false },
    ];

    const timelineHTML = timelineData.map(item => createTimelineSection(item.year, item.text, item.image, '', item.isLeft, item.bgImage)).join('');

    return `
    <div id="historia-page" class="full">
        <div id="hero">
            <div class="hero-text"></div>
            <picture>
                <source media="(max-width:650px)" srcset="/images/history/principal-historia-1.jpg">
                <img src="/images/history/Portada-HISTORIA.jpg" class="img-full" alt="">
            </picture>
        </div>
        
        <div id="historia-page-content" class="full">
            <div class="container">
                <div class="row overflow">
                    <div id="secondary-hero" class="full" style="background:#fff; margin-top:-5rem; position:relative; z-index:100; padding:3rem;">
                        <div class="row d-flex align-items-center">
                            <div class="text text-center">
                                <h3 class="p1" style="color:#bb131b; font-weight:bold; font-size:2.5rem;">Todo gran sueño comienza con un gran paso</h3>
                                <div style="font-size:1.2rem; margin:1rem 0;">
                                    <div>Desde hace más de 90 años, en Jugos Del Valle-Santa Clara estamos presentes en las vidas y mesas de los mexicanos.</div>
                                </div>
                                <p class="p1" style="font-size:1.2rem;"><strong><span class="s1">Queremos invitarte a conocer nuestra historia:</span></strong></p>
                            </div>
                        </div>
                    </div>
                    
                    <div id="timeline" class="full">
                        ${timelineHTML}
                        <div id="timeline-wrap-mobile" class="mobile">
                             ${timelineData.map(item => {
        const localImage = `/images/history/${item.image.split('/').pop()}`;
        const localBgImage = item.bgImage ? `/images/history/${item.bgImage.split('/').pop()}` : null;
        return `
                                <div class="date">
                                    <div class="tear-container">
                                        <div class="year">${item.year}</div>
                                        ${localBgImage ? `<img src="${localBgImage}" class="fondo img-fluid" alt="">` : ''}
                                    </div>
                                    <div class="imagen">
                                        <img src="${localImage}" alt="">
                                    </div>
                                    <div class="desc">${item.text}</div>
                                </div>
                                `;
    }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
};

export const initHistory = () => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        const desktopItems = document.querySelectorAll('.timeline-wrap.desktop');
        desktopItems.forEach(item => {
            gsap.fromTo(item,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                    }
                }
            );
        });

        const mobileItems = document.querySelectorAll('#timeline-wrap-mobile .date');
        mobileItems.forEach(item => {
            gsap.fromTo(item,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    }
                }
            );
        });

        // Parallax for front hero overlaps already, just ensuring text entry
        gsap.from("#secondary-hero .text", {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.2
        });
    }
};
