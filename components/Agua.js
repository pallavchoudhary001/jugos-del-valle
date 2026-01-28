
export const Agua = () => {
    return `
    <div id="agua-page" class="full">
        <div id="hero">
            <div class="hero-text"></div>
            <picture>
                <source media="(max-width:650px)" srcset="/images/agua/IMAGEN-1-12.jpg">
                <img src="/images/agua/Portada-AGUA.jpg" class="img-full" alt="">
            </picture>
        </div>
        <div id="agua-page-content" class="full">
            <div class="container">
                <div class="row overflow">
                    <div id="secondary-hero" class="full">
                        <div class="row d-flex align-items-center">
                            <div class="text">
                                <h3 class="p1">Buscamos devolver al planeta parte del agua que utilizamos en nuestros procesos de producción a través del:</h3>
                                <ul class="ul1">
                                    <li class="li1">Uso responsable del líquido mediante nuestras plantas de tratamiento de agua en todos los centros de operación.</li>
                                    <li class="li1">Reforestación de las cuencas que nos suministran el líquido para su conservación.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div id="agua" class="full">
                        <div id="agua-info">
                            <div class="container">
                                <h2 class="subtitle">Alineados a este objetivo, hemos llevado a cabo exitosamente las siguientes actividades:</h2>
                                <div class="row justify-content-center slider-aguap">
                                    <div class="col-md-6 bloque-actividades">
                                        <div class="bloque-flex">
                                            <div class="desc mid-block">
                                                Desde el 2010 plantamos más de 93,000 árboles en zonas aledañas a nuestras operaciones, como parte del Programa Nacional de Reforestación de la Industria Mexicana de Coca-Cola.
                                            </div>
                                            <div class="thumb mid-block">
                                                <img src="/images/agua/1-2.jpg" class="d-block w-100" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 bloque-actividades">
                                        <div class="bloque-flex">
                                            <div class="desc mid-block">
                                                Desde el 2012 reducimos 720 millones litros de agua en nuestros procesos.
                                            </div>
                                            <div class="thumb mid-block">
                                                <img src="/images/agua/2-2.jpg" class="d-block w-100" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 bloque-actividades">
                                        <div class="bloque-flex">
                                            <div class="desc mid-block">
                                                Nuestras Plantas Operativas cuentan con Planta de Tratamiento de Agua, para tratar toda la que se desecha, aprovechando una parte de la misma para servicios y riego.
                                            </div>
                                            <div class="thumb mid-block">
                                                <img src="/images/agua/AGUA-LOGRO-3.jpg" class="d-block w-100" alt="">
                                            </div>
                                        </div>
                                    </div>
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

export const initAgua = () => {
    if (typeof gsap !== 'undefined') {
        gsap.from("#secondary-hero .text", {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.2
        });

        gsap.utils.toArray('.bloque-actividades').forEach(block => {
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
