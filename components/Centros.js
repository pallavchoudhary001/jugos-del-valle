
export const Centros = () => {
    // Data for the centers (extracted from the user's provided HTML for better maintainability)
    const centersData = [
        {
            title: 'Oficinas Ciudad de México',
            image: 'Oficinas-Centrales_-1.jpg',
            bgColor: '#9dda19',
            isLeft: true // Description on left, image on right
        },
        {
            title: 'Planta Tepotzotlán, Estado de México',
            image: 'Planta-Tepotzotlán_-1.jpg',
            bgColor: '#f6c01c',
            isLeft: false
        },
        {
            title: 'Centro de Distribución La Torre, Tepotzotlán, Estado de México',
            image: 'Centro-de-Distribución-La-Torre_-1.jpg',
            bgColor: '#be1183',
            isLeft: true
        },
        {
            title: 'Centro de Distribución El Convento, Tepotzotlán, Estado de México',
            image: 'Centro-de-Distribución-El-Convento_-1.jpg',
            bgColor: '#9dda19',
            isLeft: false
        },
        {
            title: 'Planta Lerma, Estado de México',
            image: 'Planta-Lerma_-1.jpg',
            bgColor: '#f6c01c',
            isLeft: true
        },
        {
            title: 'Planta Pachuca, Hidalgo',
            image: 'Planta-Pachuca-NUEVA.png',
            bgColor: '#be1183',
            isLeft: false
        },
        {
            title: 'Centro de Distribución Platah, Villa de Tezontepec, Hidalgo',
            image: 'centrode-distribucion-platah.webp',
            bgColor: '#9dda19',
            isLeft: true
        },
        {
            title: 'Planta Monterrey, Nuevo León',
            image: 'Planta-Monterrey-1.jpg',
            bgColor: '#f6c01c',
            isLeft: false
        },
        {
            title: 'Planta Lagos de Moreno, Jalisco',
            image: 'Planta-Lagos-de-Moreno_-1.jpg',
            bgColor: '#be1183',
            isLeft: true
        },
        {
            title: 'Planta Zacatecas, Calera, Zacatecas',
            image: 'Planta-Zacatecas_-1.jpg',
            bgColor: '#9dda19',
            isLeft: false
        }
    ];

    const generateRow = (item) => {
        const localImage = `/images/centros/${item.image.split('/').pop()}`;
        const descDiv = `
            <div class="col-md-6">
                <div class="desc" style="background: ${item.bgColor}">
                    <p class="p1"><b>${item.title}</b></p>
                </div>
            </div>`;
        const imageDiv = `
            <div class="col-md-6">
                <div class="image">
                    <img src="${localImage}" class="img-full" alt="${item.title}">
                </div>
            </div>`;

        if (item.isLeft) {
            return `
            <div class="row operacion-row">
                ${descDiv}
                ${imageDiv}
            </div>`;
        } else {
            return `
            <div class="row operacion-row">
                ${imageDiv}
                ${descDiv}
            </div>`;
        }
    };

    const generateMobileRow = (item) => {
        const localImage = `/images/centros/${item.image.split('/').pop()}`;
        return `
        <div class="row operacion-row">
          <div class="col-md-12">
            <div class="image">
              <img src="${localImage}" class="img-full" alt="${item.title}">
            </div>
            <div class="desc" style="background: ${item.bgColor}">
              <p class="p1"><b>${item.title}</b></p>
            </div>
          </div>
        </div>`;
    };


    return `
    <div id="operacion-page" class="full">
        <div id="hero">
            <div class="hero-text"></div>
            <picture>
                <source media="(max-width:650px)" srcset="/images/centros/HeaderCentrosDeTrabajoMobile.webp">
                <img src="/images/centros/Header-CentrosDeTrabajo.webp" class="img-full" alt="">
            </picture>
        </div>
        <div id="operacion-page-content" class="full">
            <div class="container">
                <div class="row overflow">
                    <div id="secondary-hero" class="full">
                        <div class="row d-flex align-items-center">
                            <div class="text">
                                <h3 class="p1">Contamos con seis plantas de producción en diversos puntos del país,</h3>
                                <p class="p1">tres centros de distribución<span class="Apple-converted-space">  </span>y oficinas centrales ubicadas en la Ciudad de México.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div id="operacion" class="full">
                         <div class="container desktop-v">
                            ${centersData.map(item => generateRow(item)).join('')}
                         </div>

                        <div class="container slider-operacionp mobile-v">
                            ${centersData.map(item => generateMobileRow(item)).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
};

export const initCentros = () => {
    if (typeof gsap !== 'undefined') {
        gsap.from("#secondary-hero .text", {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.2
        });

        gsap.utils.toArray('.desktop-v .operacion-row').forEach(row => {
            gsap.from(row, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                scrollTrigger: {
                    trigger: row,
                    start: "top 85%",
                }
            });
        });
    }
};
