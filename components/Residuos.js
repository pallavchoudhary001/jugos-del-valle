
export const Residuos = () => {
    const contributionData = [
        {
            desc: 'Durante los últimos años hemos disminuido el grosor y gramaje del Pet de nuestras bebidas, facilitando su reciclaje.',
            image: '1-1.jpg',
            isSmall: true
        },
        {
            desc: 'El 99.6% de los residuos que generamos en nuestros centros de producción, se reciclan.',
            image: '2-1.jpg',
            isSmall: true,
            imageFirst: true
        },
        {
            desc: 'Contamos con la botella más ligera en el mundo en procesos PET Hot Fill, Powerade.',
            image: '3-1.jpg',
            isSmall: true
        },
        {
            desc: 'Como parte de la IMCC colaboramos con las plantas de reciclaje más importantes del país: IMER y PetStar.',
            image: '4-1.jpg',
            isSmall: true,
            imageFirst: true
        },
        {
            desc: 'Somos parte de ECOCE, asociación mediante la que impulsamos y participamos en acciones a favor del reciclaje en México.',
            image: '5-1.jpg',
            isSmall: false
        },
        {
            desc: 'Desde el 2004 hemos obtenido consecutivamente el certificado de Industria Limpia al incorporarnos al Programa Nacional de Auditoría Ambiental de la PROFEPA.',
            image: '6-1.jpg',
            isSmall: false
        }
    ];

    const generateDesktopBlocks = () => {
        // First 4 are 3-column (col-md-3), last 2 are 6-column (col-md-6)
        let html = '';

        // Block 1
        html += `
        <div class="col-md-3 bloque-contribucion">
            <div class="bloque">
                <div class="desc">${contributionData[0].desc}</div>
                <div class="thumb"><img src="/images/residuos/${contributionData[0].image}" class="img-fluid" alt=""></div>
            </div>
        </div>`;

        // Block 2
        html += `
        <div class="col-md-3 bloque-contribucion">
            <div class="bloque">
                <div class="thumb"><img src="/images/residuos/${contributionData[1].image}" class="img-fluid" alt=""></div>
                <div class="desc">${contributionData[1].desc}</div>
            </div>
        </div>`;

        // Block 3
        html += `
        <div class="col-md-3 bloque-contribucion">
            <div class="bloque">
                <div class="desc">${contributionData[2].desc}</div>
                <div class="thumb"><img src="/images/residuos/${contributionData[2].image}" class="img-fluid" alt=""></div>
            </div>
        </div>`;

        // Block 4
        html += `
        <div class="col-md-3 bloque-contribucion">
            <div class="bloque">
                <div class="thumb"><img src="/images/residuos/${contributionData[3].image}" class="img-fluid" alt=""></div>
                <div class="desc">${contributionData[3].desc}</div>
            </div>
        </div>`;

        // Block 5 (6 columns, layout flex)
        html += `
        <div class="col-md-6 bloque-contribucion">
            <div class="bloque-flex">
                <div class="desc mid-block">${contributionData[4].desc}</div>
                <div class="thumb mid-block"><img src="/images/residuos/${contributionData[4].image}" class="img-fluid" alt=""></div>
            </div>
        </div>`;

        // Block 6 (6 columns, layout flex)
        html += `
        <div class="col-md-6 bloque-contribucion">
            <div class="bloque-flex">
                <div class="desc mid-block">${contributionData[5].desc}</div>
                <div class="thumb mid-block"><img src="/images/residuos/${contributionData[5].image}" class="img-fluid" alt=""></div>
            </div>
        </div>`;

        return html;
    };

    const generateMobileBlocks = () => {
        return contributionData.map(item => `
            <div class="col-md-3 bloque-contribucion">
              <div class="bloque">
                <div class="desc">${item.desc}</div>
                <div class="thumb">
				  <picture>
                  <img src="/images/residuos/${item.image}" class="d-block w-100" alt="">
				 </picture>
                </div>
              </div>
            </div>`).join('');
    };

    return `
    <div id="residuos-page" class="full">
        <div id="hero">
            <div class="hero-text"></div>
            <picture>
                <source media="(max-width:650px)" srcset="/images/residuos/IMAGEN-1-11.jpg">
                <img src="/images/residuos/Portada-RESIDUOS.jpg" class="img-full" alt="">
            </picture>
        </div>
        <div id="residuos-page-content" class="full">
            <div class="container">
                <div class="row overflow">
                    <div id="secondary-hero" class="full">
                        <div class="row d-flex align-items-center">
                            <div class="text">
                                <h3 class="p1"></h3>
                                <ul class="ul1">
                                    <li class="li1">Promocionamos y difundimos una cultura ambiental con nuestros colaboradores, familias y comunidades.</li>
                                    <li class="li1">Creamos envases que sean reciclados y reciclables.</li>
                                    <li class="li1">Trabajamos por un #MundoSinResiduos.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div id="residuos" class="full">
                        <div id="residuos-info">
                            <div class="container">
                                <h2 class="subtitle">Estas son algunas de las contribuciones que hemos realizado:</h2>
                                <div class="row desktop-v">
                                    ${generateDesktopBlocks()}
                                </div>
                                <div class="row slider-residuosp mobile-v">
                                    ${generateMobileBlocks()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
};

export const initResiduos = () => {
    if (typeof gsap !== 'undefined') {
        gsap.from("#secondary-hero .text", {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.2
        });

        gsap.utils.toArray('.bloque-contribucion').forEach(block => {
            gsap.from(block, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                scrollTrigger: {
                    trigger: block,
                    start: "top 85%",
                }
            });
        });
    }
};
