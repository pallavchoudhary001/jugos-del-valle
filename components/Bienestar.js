
export const Bienestar = () => {
    return `
    <div id="bienestar-page" class="full">
        <div id="hero">
            <div class="hero-text"></div>
            <picture>
                <source media="(max-width:650px)" srcset="/images/bienestar/BIENESTAR-Mobile.webp">
                <img src="/images/bienestar/BIENESTAR-Desktop.webp" class="img-full" alt="">
            </picture>
        </div>
        <div id="bienestar-page-content" class="full">
            <div class="container">
                <div class="row overflow">
                    <div id="secondary-hero" class="full">
                        <div class="row d-flex align-items-center">
                            <div class="text">
                                <h3 class="p1">La salud y protección de nuestros colaboradores es lo más importante, por ello incentivamos estilos de vida saludables que contribuyan con su bienestar integral a través de las siguientes prácticas:</h3>
                                <ul class="ul1">
                                    <li class="li3">Promovemos programas de alimentación, hidratación, bienestar físico y emocional, así como de prevención de enfermedades.</li>
                                    <li class="li3">Incentivamos una cultura del cuidado de la salud a través de exámenes médicos periódicos, chequeos y ferias de salud para nuestros colaboradores.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div id="bienestar" class="full">
                        <div id="bienestar-info">
                            <div class="container">
                                <h2 class="subtitle">Estos son algunos de los logros que hemos obtenido:</h2>
                                <div class="row justify-content-center desktop-v">
                                    <div class="col-md-3 bloque-logros">
                                        <div class="bloque">
                                            <div class="desc">
                                                Contamos con la Certificación Oro como Empresa Activa y Saludable.
                                            </div>
                                            <div class="thumb">
                                                <img src="/images/bienestar/JugosDelValle-StaClara-Bienestar-2023-1.webp" class="d-block w-100" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 bloque-logros">
                                        <div class="bloque">
                                            <div class="thumb">
                                                <img src="/images/bienestar/PausaActivaBienestar2023.webp" class="img-fluid" alt="">
                                            </div>
                                            <div class="desc">
                                                A través de nuestro Programa de Wellness, algunos de nuestros colaboradores han logrado disminuir peso, adoptando estilos de vida saludables.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 bloque-logros">
                                        <div class="bloque">
                                            <div class="desc">
                                                Contamos con una línea de atención emocional para nuestros colaboradores y familiares.
                                            </div>
                                            <div class="thumb">
                                                <img src="/images/bienestar/JugosDelValle-StaClara-Bienestar-2023.webp" class="d-block w-100" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-center slider-bienestarp mobile-v">
                                    <div class="col-md-3 bloque-logros">
                                      <div class="bloque">
                                        <div class="desc">
                                          Contamos con la Certificación Oro como Empresa Activa y Saludable.                </div>
                                        <div class="thumb">
                                          <img src="/images/bienestar/JugosDelValle-StaClara-Bienestar-2023-1.webp" class="d-block w-100" alt="">
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-3 bloque-logros">
                                      <div class="bloque">
                                        <div class="desc">
                                          A través de nuestro Programa de Wellness, algunos de nuestros colaboradores han logrado disminuir peso, adoptando estilos de vida saludables.                </div>
                                        <div class="thumb">
                                          <img src="/images/bienestar/PausaActivaBienestar2023.webp" class="d-block w-100" alt="">
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-3 bloque-logros">
                                      <div class="bloque">
                                        <div class="desc">
                                          Contamos con una línea de atención emocional para nuestros colaboradores y familiares.                </div>
                                        <div class="thumb">
                                          <img src="/images/bienestar/JugosDelValle-StaClara-Bienestar-2023.webp" class="d-block w-100" alt="">
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

export const initBienestar = () => {
    if (typeof gsap !== 'undefined') {
        gsap.from("#secondary-hero .text", {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.2
        });

        gsap.utils.toArray('.bloque-logros').forEach(block => {
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
