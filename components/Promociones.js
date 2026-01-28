
export const Promociones = () => {
    return `
    <div id="promociones-page" class="full">
        <!-- Hero Section -->
        <div id="hero" class="full">
            <div class="hero-text"></div>
            <picture>
                <source media="(max-width:650px)" srcset="/images/promociones/Portada-PROMOCIONES-SANTA-CLARA-mobile.jpg">
                <img src="/images/promociones/Portada-PROMOCIONES-SANTA-CLARA-ingles.jpg" class="img-full" alt="Promociones Santa Clara">
            </picture>
        </div>

        <!-- Main Content -->
        <div id="promociones-page-content" class="bg-white full">
            <div class="container">
                
                <!-- Secondary Hero -->
                <div id="secondary-hero" class="full">
                    <div class="row d-flex align-items-center justify-content-center text-center p-5">
                       <div class="col-md-10">
                           <div class="text sta-clara">
                               <h3 class="p1" style="color: #633216; font-weight: bold;">En Jugos Del Valle-Santa Clara siempre estamos buscando la forma de agradecer tu preferencia,</h3>
                               <p class="p1" style="color: #633216;">por ello te invitamos a disfrutar de la gran variedad de nuestro portafolio con diferentes opciones y promociones diseñadas para todos los gustos.</p>
                           </div>
                       </div>
                   </div>
               </div>

                <!-- Promotions Section -->
                <div id="promociones" class="full pb-5">
                    <h2 class="subtitle text-center mb-5" style="color: #000;">
                        Descubre las mejores promociones de este mes:
                    </h2>

                    <div id="promociones-wrap" class="full">
                        <div id="my-carousel" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <picture>
                                        <source media="(max-width:650px)" srcset="/images/promociones/LK_SC_diamuertos_23_720x1280px.jpg">
                                        <img class="d-block w-100" src="/images/promociones/LK_SC_diamuertos_23_1360x523px-scaled.jpg" alt="Promoción Día de Muertos">
                                    </picture>
                                </div>
                                <!-- Add more carousel items here if needed in the future -->
                            </div>
                            
                            <!-- Carousel Controls (Hidden if only one item, but keeping structure active for future) -->
                             <a class="carousel-control-prev" href="#my-carousel" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true" style="background-color: #bb131b; border-radius: 50%; padding: 20px;"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#my-carousel" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true" style="background-color: #bb131b; border-radius: 50%; padding: 20px;"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Related Content -->
                <div class="container" style="margin-top: 50px; margin-bottom: 50px;">
                    <div class="row">
                        <div class="col-12">
                            <h4 style="font-weight: bold; margin-bottom: 30px;">Tal vez te pueda interesar:</h4>
                        </div>
                        
                        <div class="col-md-4 mb-4">
                            <div class="cont-li text-center">
                                <img src="/images/promociones/CULTURA.jpg" class="img-fluid mb-2" alt="Cultura">
                                <div style="font-weight: bold;">Cultura</div>
                                <a href="#/nosotros/cultura" class="text-danger font-weight-bold">Leer más</a>
                            </div>
                        </div>

                        <div class="col-md-4 mb-4">
                            <div class="cont-li text-center">
                                <img src="/images/promociones/nuestras-marcas-interes.webp" class="img-fluid mb-2" alt="Nuestras Marcas">
                                <div style="font-weight: bold;">Nuestras Marcas</div>
                                <a href="#/producto/nuestras-marcas-2" class="text-danger font-weight-bold">Leer más</a>
                            </div>
                        </div>

                        <div class="col-md-4 mb-4">
                            <div class="cont-li text-center">
                                <img src="/images/promociones/Directorio-Sta-Clara-Notas-de-Interes.jpg" class="img-fluid mb-2" alt="Directorio">
                                <div style="font-weight: bold;">Directorio</div>
                                <a href="#/tiendas-santa-clara/directorio" class="text-danger font-weight-bold">Leer más</a>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
    `;
};

export const initPromociones = () => {
    console.log('Initializing Promociones...');
    // Initialize Bootstrap Carousel manually if needed, though data-attributes should handle it
    if (typeof $ !== 'undefined' && $.fn.carousel) {
        $('.carousel').carousel({
            interval: 5000
        });
    }
};
