
export const Concesionarios = () => {
    return `
    <div id="concesionarios-page" class="full">
        <!-- Hero Section -->
        <div id="hero" class="full">
            <div class="hero-text"></div>
            <picture>
                <source media="(max-width:650px)" srcset="/images/concesionarios/Portada-CONCESIONARIOS-SANTA-CLARA-mobile.jpg">
                <img src="/images/concesionarios/Portada-CONCESIONARIOS-SANTA-CLARA-ingles.jpg" class="img-full" alt="Concesionarios Santa Clara">
            </picture>
        </div>

        <!-- Main Content -->
        <div id="concesionarios-page-content" class="bg-white full">
            <div class="container">
                
                <!-- Secondary Hero -->
                <div id="secondary-hero" class="full">
                    <div class="row d-flex align-items-center justify-content-center text-center p-5">
                       <div class="col-md-10">
                           <div class="text sta-clara">
                               <h3 class="p1" style="color: #633216; font-weight: bold;">Forma parte de nuestro sistema de Concesionarios.</h3>
                               <p class="p1" style="color: #633216;">Podrás gozar de los siguientes beneficios:</p>
                               <p class="p1">· EBITDA superior al mercado del retail.*</p>
                               <p class="p1">· Crecimientos anuales compuestos en doble dígito.</p>
                               <p class="p1">· Retornos de inversión a partir de 3 años.</p>
                               <p class="p1" style="font-size: 0.8em;"><em>*Indicadores obtenidos con los esfuerzos de alineación a estándares, compromisos, efectividad en las operaciones y supervisión de las tiendas.</em></p>
                           </div>
                       </div>
                   </div>
               </div>

                <!-- Concesionario Content -->
                <div id="concesionario" class="full pb-5">

                    <!-- Gallery -->
                    <div class="row gallery mb-5">
                        <div class="col-md-6 mb-3">
                            <img src="/images/concesionarios/EquipoSantaClaraDesktop.webp" class="img-fluid" alt="Equipo Santa Clara">
                        </div>
                        <div class="col-md-6 mb-3">
                            <img src="/images/concesionarios/EquipoSantaClara.webp" class="img-fluid" alt="Tienda Santa Clara">
                        </div>
                    </div>
  
                    <h2 class="subtitle text-center mb-5" style="color: #000;">
                        Modelo de Inversión
                    </h2>

                    <div id="concesionarios-wrap" class="full mb-5">
                        <div class="container">
                            <div class="desktop-v">
                                <!-- Block 1 -->
                                <div class="row concesionarios-block d-flex align-items-center justify-content-center flex-row mb-4">
                                    <div class="col-md-2 icono text-center">
                                         <i class="fas fa-ruler-combined fa-3x" style="color: #633216;"></i>
                                    </div>
                                    <div class="col-md-10 texto">
                                        Requiere ubicaciones <b>a partir de 20 M2</b>.
                                    </div>
                                </div>
                                <!-- Block 2 -->
                                <div class="row concesionarios-block d-flex align-items-center justify-content-center flex-row mb-4">
                                    <div class="col-md-2 icono text-center">
                                        <i class="fas fa-dollar-sign fa-3x" style="color: #633216;"></i>
                                    </div>
                                    <div class="col-md-10 texto">
                                        Inversiones por tienda a partir de <b>$100,000 USD</b>.
                                    </div>
                                </div>
                                <!-- Block 3 -->
                                <div class="row concesionarios-block d-flex align-items-center justify-content-center flex-row mb-4">
                                    <div class="col-md-2 icono text-center">
                                        <i class="fas fa-user-tie fa-3x" style="color: #633216;"></i>
                                    </div>
                                    <div class="col-md-10 texto">
                                        Buscando inversionistas ligados a <b>industria de Retail/Food Service</b> con experiencia y negocios afines.
                                    </div>
                                </div>
                                <!-- Block 4 -->
                                <div class="row concesionarios-block d-flex align-items-center justify-content-center flex-row mb-4">
                                    <div class="col-md-2 icono text-center">
                                        <i class="fas fa-store fa-3x" style="color: #633216;"></i>
                                    </div>
                                    <div class="col-md-10 texto">
                                        Concesiones disponibles a partir de <b>10 tiendas en 24 meses.</b>
                                    </div>
                                </div>
                                <!-- Block 5 -->
                                <div class="row concesionarios-block d-flex align-items-center justify-content-center flex-row mb-4">
                                    <div class="col-md-2 icono text-center">
                                        <i class="fas fa-cogs fa-3x" style="color: #633216;"></i>
                                    </div>
                                    <div class="col-md-10 texto">
                                        Modelo operativo <b>desarrollado por expertos</b> en Retail y Food Service.
                                    </div>
                                </div>
                                <!-- Block 6 -->
                                <div class="row concesionarios-block d-flex align-items-center justify-content-center flex-row mb-4">
                                    <div class="col-md-2 icono text-center">
                                        <i class="fas fa-handshake fa-3x" style="color: #633216;"></i>
                                    </div>
                                    <div class="col-md-10 texto">
                                        Sistema de <b>acompañamiento al inversionista</b> desde la elección del sitio, hasta la operación del día a día.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Call to Action -->
                    <div class="black-block row p-5 mb-5 text-center" style="background-color: #000; color: #fff; font-size: 2rem; font-weight: bold; justify-content: center;">
                        ¡Forma parte de la familia Santa Clara!
                    </div>
   
                    <!-- Form Section -->
                    <div class="row mb-5">
                        <div class="col text-center">
                            <h2 class="subtitulo" style="color: #633216; font-weight: bold;">Compártenos tus datos, en breve te contactaremos:</h2>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col formulario">
                            <div class="row">
                                <div class="col-md-6 offset-md-3">
                                    <form class="contact-form">
                                        <div class="form-group mb-3">
                                            <input type="text" class="form-control" name="firstname" placeholder="Nombre" required>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="text" class="form-control" name="lastname" placeholder="Apellido" required>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="email" class="form-control" name="email" placeholder="Correo electrónico" required>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="tel" class="form-control" name="phone" placeholder="Teléfono" required>
                                        </div>

                                        <div class="form-group mb-3">
                                            <label class="mr-3">¿Tienes experiencia en negocios similares?</label>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="experience" id="expYes" value="Si">
                                                <label class="form-check-label" for="expYes">Si</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="experience" id="expNo" value="No">
                                                <label class="form-check-label" for="expNo">No</label>
                                            </div>
                                        </div>

                                        <div class="form-group mb-3">
                                            <select class="form-control" name="budget">
                                                <option value="">Monto de inversión disponible</option>
                                                <option value="5-10">$5 a $10 millones de pesos</option>
                                                <option value="11-30">$11 a $30 millones de pesos</option>
                                                <option value="31-50">$31 a $50 millones de pesos</option>
                                                <option value="50+">Más de $50 millones de pesos</option>
                                            </select>
                                        </div>

                                        <div class="form-group mb-3">
                                            <select class="form-control" name="location">
                                                <option value="">Territorios disponibles</option>
                                                <option value="Sonora">Sonora</option>
                                                <option value="Chihuahua">Chihuahua</option>
                                                <option value="Baja California Norte">Baja Californa Norte</option>
                                                <option value="Baja California Sur">Baja Californa Sur</option>
                                                <option value="Coahuila">Coahuila</option>
                                                <option value="Tamaulipas">Tamaulipas</option>
                                                <option value="Sinaloa">Sinaloa</option>
                                                <option value="Durango">Durango</option>
                                                <option value="Zacatecas">Zacatecas</option>
                                                <option value="San Luis Potosí">San Luis Potosí</option>
                                                <option value="Veracruz">Veracruz</option>
                                                <option value="Nayarit">Nayarit</option>
                                                <option value="Aguascalientes">Aguascalientes</option>
                                                <option value="Guerrero">Guerrero</option>
                                                <option value="Oaxaca">Oaxaca</option>
                                                <option value="Chiapas">Chiapas</option>
                                            </select>
                                        </div>

                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary" style="background-color: #bb131b; border-color: #bb131b;">Enviar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
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
                                <img src="/images/concesionarios/HISTORIA.jpg" class="img-fluid mb-2" alt="Historia">
                                <div style="font-weight: bold;">Historia</div>
                                <a href="#/nosotros/historia" class="text-danger font-weight-bold">Leer más</a>
                            </div>
                        </div>

                        <div class="col-md-4 mb-4">
                            <div class="cont-li text-center">
                                <img src="/images/concesionarios/nuestras-marcas-interes.webp" class="img-fluid mb-2" alt="Nuestras Marcas">
                                <div style="font-weight: bold;">Nuestras Marcas</div>
                                <a href="#/producto/nuestras-marcas-2" class="text-danger font-weight-bold">Leer más</a>
                            </div>
                        </div>

                        <div class="col-md-4 mb-4">
                            <div class="cont-li text-center">
                                <img src="/images/concesionarios/Directorio-Sta-Clara-Notas-de-Interes.jpg" class="img-fluid mb-2" alt="Directorio">
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

export const initConcesionarios = () => {
    console.log('Initializing Concesionarios...');
    // Add form handling logic here if needed
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Gracias por tu interés. Nos pondremos en contacto contigo pronto.');
            form.reset();
        });
    }
};
