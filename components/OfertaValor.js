
import { OfertaValorSVG } from './OfertaValorSVG.js';

export const OfertaValor = () => {
    return `
    <div id="oferta-talento-page">
        <!-- Hero Section -->
        <section id="talento" class="position-relative">
            <picture>
                <source media="(max-width: 414px)" srcset="images/oferta-valor/Oferta-Valor-Mobile.webp">
                <img src="images/oferta-valor/Oferta-de-Valor-Desktop.webp" alt="Oferta de Valor" class="w-100">
            </picture>
            <div class="texto-talento" style="position: absolute; bottom: 10%; left: 50%; transform: translateX(-50%); text-align: center; color: #fff; text-shadow: 2px 2px 10px rgba(0,0,0,0.5);">
                <h1 style="font-size: 3rem; font-weight: 900; line-height: 1;">OFERTA DE <br><span style="font-size: 8rem; font-weight: 900; font-style: italic;">VALOR</span></h1>
            </div>
        </section>

        <!-- Intro Text Section -->
        <section class="container my-5 py-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                    <h2 class="font-weight-bold mb-4" style="color: #6b17dd; font-size: 2.5rem;">En Jugos Del Valle-Santa Clara tenemos un compromiso genuino “Primero la Gente”.</h2>
                    <p class="lead mb-4" style="font-size: 1.25rem;">Creamos y facilitamos experiencias de vida profesionales, únicas y personalizadas, combinando el momento de vida personal y etapa de carrera profesional, potenciando así nuestra Oferta de Valor de Talento.</p>
                    <h4 class="font-weight-bold mt-5 text-uppercase" style="color: #333;">Esta es nuestra oferta de valor:</h4>
                </div>
            </div>
        </section>

        <!-- SVG Section -->
        <section id="oferta-talento" class="py-5" style="background-color: #f8f9fa;">
            <div class="container">
                <div id="oferta-wrap" class="row align-items-center">
                    <div class="col-lg-6 anim-circle">
                        <div class="svg-container" style="max-width: 500px; margin: 0 auto;">
                            ${OfertaValorSVG()}
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="pillar-descriptions px-4 py-4">
                            <div class="pillar-item mb-4" style="border-left: 5px solid #6b17dd; padding-left: 20px;">
                                <h5 class="font-weight-bold mb-1" style="color: #6b17dd; font-size: 1.2rem;">GENTE</h5>
                                <p class="mb-0" style="color: #555;">Liderazgo, calidad humana y excelente clima organizacional.</p>
                            </div>
                            <div class="pillar-item mb-4" style="border-left: 5px solid #f6c01c; padding-left: 20px;">
                                <h5 class="font-weight-bold mb-1" style="color: #f6c01c; font-size: 1.2rem;">RECOMPENSA TOTAL</h5>
                                <p class="mb-0" style="color: #555;">Compensación y beneficios.</p>
                            </div>
                            <div class="pillar-item mb-4" style="border-left: 5px solid #ed6b0c; padding-left: 20px;">
                                <h5 class="font-weight-bold mb-1" style="color: #ed6b0c; font-size: 1.2rem;">TRABAJO</h5>
                                <p class="mb-0" style="color: #555;">Retos de negocios, experiencias críticas y objetivos individuales.</p>
                            </div>
                            <div class="pillar-item mb-4" style="border-left: 5px solid #bb131b; padding-left: 20px;">
                                <h5 class="font-weight-bold mb-1" style="color: #bb131b; font-size: 1.2rem;">ORGANIZACIÓN</h5>
                                <p class="mb-0" style="color: #555;">Una gran marca empleadora y socialmente responsable.</p>
                            </div>
                            <div class="pillar-item mb-4" style="border-left: 5px solid #9dda19; padding-left: 20px;">
                                <h5 class="font-weight-bold mb-1" style="color: #9dda19; font-size: 1.2rem;">OPORTUNIDAD</h5>
                                <p class="mb-0" style="color: #555;">Desarrollo profesional y posibilidades de carrera.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Experience Section -->
        <section class="container py-5 my-5">
            <div class="row text-center mb-5">
                <div class="col-12">
                    <h2 class="font-weight-bold text-uppercase mb-4" style="color: #bb131b;">Experiencia Integral</h2>
                    <div style="width: 80px; height: 4px; background: #bb131b; margin: 0 auto;"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="card h-100 border-0 shadow-sm transition-hover" style="border-top: 4px solid #6b17dd !important;">
                        <div class="card-body text-center p-4">
                            <h5 class="font-weight-bold mb-3" style="color: #6b17dd;">Atraemos e inspiramos</h5>
                            <p class="text-muted small">Procesos de excelencia para atraer nuevo talento, balanceando expertise interno y nuevas capacidades.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="card h-100 border-0 shadow-sm transition-hover" style="border-top: 4px solid #f6c01c !important;">
                        <div class="card-body text-center p-4">
                            <h5 class="font-weight-bold mb-3" style="color: #f6c01c;">Desarrollo personal y carrera</h5>
                            <p class="text-muted small">Diseño de experiencias holísticas de desarrollo profesional y carrera.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="card h-100 border-0 shadow-sm transition-hover" style="border-top: 4px solid #ed6b0c !important;">
                        <div class="card-body text-center p-4">
                            <h5 class="font-weight-bold mb-3" style="color: #ed6b0c;">Evolución continua</h5>
                            <p class="text-muted small">Una plataforma integral de posibilidades de desarrollo.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="card h-100 border-0 shadow-sm transition-hover" style="border-top: 4px solid #bb131b !important;">
                        <div class="card-body text-center p-4">
                            <h5 class="font-weight-bold mb-3" style="color: #bb131b;">Analíticos talento</h5>
                            <p class="text-muted small">Medición y toma de decisiones basadas en inteligencia de datos de talento.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    <style>
        .transition-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .transition-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
        }
        @media (max-width: 768px) {
            .texto-talento h1 {
                font-size: 2rem !important;
            }
            .texto-talento h1 span {
                font-size: 4rem !important;
            }
        }
    </style>
    `;
};

export const initOfertaValor = () => {
    window.scrollTo(0, 0);

    if (typeof gsap !== 'undefined') {
        gsap.from(".texto-talento h1", {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".pillar-item", {
            duration: 0.8,
            x: 50,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#oferta-talento",
                start: "top 70%"
            }
        });

        gsap.from(".anim-circle", {
            duration: 1.2,
            scale: 0.9,
            opacity: 0,
            rotation: -10,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#oferta-talento",
                start: "top 70%"
            }
        });
    }
};
