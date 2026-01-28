
export const Cultura = () => {
    return `
    <div id="cultura-page" class="full">
        <div id="hero">
             <div class="hero-text"></div>
            <picture>
                <source media="(max-width:650px)" srcset="/images/cultura/IMAGEN-1-8.jpg">
                <img src="/images/cultura/Portada-CADENA-DE-VALOR.jpg" class="img-full" alt="">
            </picture>
        </div>
        <div id="cultura-page-content" class="full">
            <div class="container">
                <div class="row overflow">
                    <div id="secondary-hero" class="full">
                        <div class="row d-flex align-items-center">
                            <div class="text">
                                <h3 class="p1">Este es nuestro compromiso que trasciende.</h3>
                                <p class="p1">Es parte de nuestra esencia vivir una Cultura Organizacional que guía nuestros objetivos e impulsa nuestra estrategia de negocio.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div id="cultura" class="full">
                        <div id="cultura-info">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="cultura-block d-flex flex-column align-items-center">
                                            <div class="titulo">
                                                <h2>Propósito</h2>
                                            </div>
                                            <div class="thumb p-3">
                                                <img src="/images/cultura/Proposito.jpg" class="img-full" style="max-width:500px;" alt="">
                                            </div>
                                            <div class="desc p-3" style="height:auto;">
                                                <p class="p1" style="text-align: center">Llevar bienestar, hidratación y nutrición a las familias mexicanas ofreciendo <b>opciones, porciones y soluciones</b> para diferentes gustos, necesidades y estilos de vida.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="container">
                            <div class="d-flex justify-content-center mb-5" style="width:100%;">
                                <img class="img-fluid" src="/images/cultura/PRIMERO-LA-GENTE.png" style="max-width:400px;">
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-6 d-flex justify-content-center p-0">
                                    <img class="img-fluid" src="/images/cultura/ROSA.png">
                                </div>
                                <div class="col-12 col-md-6 d-flex justify-content-center p-0">
                                    <img class="img-fluid" src="/images/cultura/VERDE.png">
                                </div>
                                <div class="col-12 col-md-6 d-flex justify-content-center p-0">
                                    <img class="img-fluid" src="/images/cultura/DURAZNO.png">
                                </div>
                                <div class="col-12 col-md-6 d-flex justify-content-center p-0">
                                    <img class="img-fluid" src="/images/cultura/GRIS.png">
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

export const initCultura = () => {
    if (typeof gsap !== 'undefined') {
        gsap.from("#secondary-hero .text", {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.2
        });

        gsap.from(".cultura-block", {
            opacity: 0,
            y: 50,
            duration: 0.8,
            scrollTrigger: {
                trigger: ".cultura-block",
                start: "top 80%",
            }
        });
    }
};
