
export const Directorio = () => {
    return `
    <div id="directorio-page" class="full">
        <div id="hero">
            <div class="hero-text"></div>
            <picture>
                <source media="(max-width:650px)" srcset="/images/directorio/Portada-DIRECTORIO-SANTA-CLARA-mobile.jpg">
                <img src="/images/directorio/Portada-DIRECTORIO-SANTA-CLARA.jpg" class="img-full" alt="">
            </picture>
        </div>
        <div id="directorio-page-content" class="full">
            <div class="container">
                <div class="row overflow">
                    <div id="secondary-hero" class="full">
                        <div class="row d-flex align-items-center">
                            <div class="text sta-clara">
                                <h3 class="p1">Te invitamos a disfrutar de nuestros deliciosos helados, cafés, productos refrigerados y otras creaciones</h3>
                                <p class="p1">que te harán vivir una experiencia extraordinaria.</p>
                            </div>
                        </div>
                    </div>
                    <div id="directorios-loop" class="full">
                        <h2 class="subtitle">Busca la Tienda Santa Clara más cercana a ti: </h2>

                        <div id="directorio-frame">
                            <div class="container">
                                <!-- Mockup of Store Locator UI -->
                                <div id="asl-storelocator" class="container asl-template-1 storelocator-main asl-p-cont asl-layout-0 asl-bg-0 asl-text-1 full-width ">
                                    <div class="row Filter_section">
                                        <div class="col-xs-12 col-sm-4 search_filter">
                                            <p>Search Location</p>
                                            <div class="sl-search-group">
                                                <input type="text" value="" tabindex="2" id="auto-complete-search" placeholder="Enter a Location" class="asl-search-address form-control isp_ignore">
                                                <span><i class="asl-geo icon-direction-outline" title="Current Location"></i></span>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-8">
                                            <div class="asl-advance-filters" style="display:flex; align-items:flex-end; height:100%;">
                                                <div class="Status_filter" style="margin-left: 20px;">
                                                    <label class="asl-cntrl-lbl">Status</label>
                                                    <div class="onoffswitch">
                                                        <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="asl-open-close" checked>
                                                        <label class="onoffswitch-label" for="asl-open-close">
                                                            <span class="onoffswitch-inner"></span>
                                                            <span class="onoffswitch-switch"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row asl-loc-sec">
                                        <div class="col-sm-8 col-xs-12 asl-map">
                                            <div class="store-locator" style="background:#eee; height:500px; display:flex; align-items:center; justify-content:center; flex-direction:column; border:1px solid #ccc;">
                                                <i class="fas fa-map-marked-alt" style="font-size:4rem; color:#999; margin-bottom:1rem;"></i>
                                                <p style="color:#666;">Mapa Interactivo de Tiendas</p>
                                                <div id="asl-map-canv" style="width:100%; height:100%; display:none;"></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 col-xs-12 asl-panel">
                                            <div id="asl-list" class="storelocator-panel">
                                                <div class="panel-cont">
                                                    <div class="panel-inner" style="height:500px; overflow-y:auto;">
                                                        <ul id="p-statelist" class="p-0" style="list-style:none;">
                                                            <li class="sl-item p-3 border-bottom">
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <p class="p-title" style="font-weight:bold; color:#8d654c; margin-bottom:5px;">Santa Clara Polanco</p>
                                                                        <p class="p-area" style="font-size:0.9rem;">Av. Homero 1200, Polanco, CDMX</p>
                                                                        <p class="p-area" style="font-size:0.9rem;"><span class="fas fa-phone-alt mr-2"></span>55 1234 5678</p>
                                                                        <p class="p-time" style="font-size:0.9rem;"><span class="far fa-clock mr-2"></span>9:00 AM - 9:00 PM</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="sl-item p-3 border-bottom">
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <p class="p-title" style="font-weight:bold; color:#8d654c; margin-bottom:5px;">Santa Clara Condesa</p>
                                                                        <p class="p-area" style="font-size:0.9rem;">Michoacán 50, Condesa, CDMX</p>
                                                                        <p class="p-area" style="font-size:0.9rem;"><span class="fas fa-phone-alt mr-2"></span>55 8765 4321</p>
                                                                        <p class="p-time" style="font-size:0.9rem;"><span class="far fa-clock mr-2"></span>8:00 AM - 10:00 PM</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="sl-item p-3 border-bottom">
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <p class="p-title" style="font-weight:bold; color:#8d654c; margin-bottom:5px;">Santa Clara Santa Fe</p>
                                                                        <p class="p-area" style="font-size:0.9rem;">Centro Santa Fe, Planta Baja</p>
                                                                        <p class="p-area" style="font-size:0.9rem;"><span class="fas fa-phone-alt mr-2"></span>55 1122 3344</p>
                                                                        <p class="p-time" style="font-size:0.9rem;"><span class="far fa-clock mr-2"></span>11:00 AM - 9:00 PM</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
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
            
            <!-- Related/Interest Section (Footer style) -->
            <div id="footer-relacionadas" class="container mt-5 pt-5 pb-5">
                <h4 style="color:#000; font-weight:bold; margin-bottom:2rem;">Tal vez te pueda interesar:</h4>
                <div class="row">
                    <div class="col-md-4">
                        <div class="cont-li">
                            <img src="/images/directorio/Promociones-Sta-Clara-Notas-de-Interes.jpg" class="img-fluid" alt="">
                            <span>Promociones</span>
                            <a href="#/tiendas-santa-clara/promociones">Leer más</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="cont-li">
                            <img src="/images/directorio/nuestras-marcas-interes.webp" class="img-fluid" alt="">
                            <span>Nuestras Marcas</span>
                            <a href="#/producto/nuestras-marcas-2">Leer más</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="cont-li">
                            <img src="/images/directorio/Concesionarios-Sta-Clara-Notas-de-Interes.jpg" class="img-fluid" alt="">
                            <span>Concesionarios</span>
                            <a href="#/tiendas-santa-clara/concesionarios">Leer más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style>
        #directorio-frame { margin-top: 30px; margin-bottom: 50px; }
        .asl-template-1 .Filter_section { background: #f8f9fa; padding: 20px; border-radius: 8px 8px 0 0; border: 1px solid #ddd; border-bottom: none; }
        .asl-template-1 .search_filter p { font-weight: bold; margin-bottom: 5px; color: #333; }
        .asl-template-1 .sl-search-group { position: relative; }
        .asl-template-1 .asl-geo { position: absolute; right: 10px; top: 10px; cursor: pointer; color: #8d654c; }
        .asl-template-1 .onoffswitch { position: relative; width: 90px; -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none; }
        .asl-template-1 .onoffswitch-checkbox { display: none; }
        .asl-template-1 .onoffswitch-label { display: block; overflow: hidden; cursor: pointer; border: 2px solid #8d654c; border-radius: 20px; }
        .asl-template-1 .onoffswitch-inner { display: block; width: 200%; margin-left: -100%; transition: margin 0.3s ease-in 0s; }
        .asl-template-1 .onoffswitch-inner:before, .asl-template-1 .onoffswitch-inner:after { display: block; float: left; width: 50%; height: 30px; padding: 0; line-height: 30px; font-size: 14px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold; box-sizing: border-box; }
        .asl-template-1 .onoffswitch-inner:before { content: "OPEN"; padding-left: 10px; background-color: #8d654c; color: #FFFFFF; }
        .asl-template-1 .onoffswitch-inner:after { content: "ALL"; padding-right: 10px; background-color: #EEEEEE; color: #999999; text-align: right; }
        .asl-template-1 .onoffswitch-switch { display: block; width: 18px; margin: 6px; background: #FFFFFF; position: absolute; top: 0; bottom: 0; right: 56px; border: 2px solid #8d654c; border-radius: 20px; transition: all 0.3s ease-in 0s; }
        .asl-template-1 .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner { margin-left: 0; }
        .asl-template-1 .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch { right: 0px; }
    </style>
    `;
};

export const initDirectorio = () => {
    if (typeof gsap !== 'undefined') {
        gsap.from("#secondary-hero", { opacity: 0, y: 30, duration: 1 });
        gsap.from(".sl-item", {
            opacity: 0,
            x: -20,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: "#asl-list",
                start: "top 80%"
            }
        });
    }
};
