
export const Contacto = () => {
    return `
    <div id="contacto-page" class="full">
        <div id="hero">
            <div class="hero-text"></div>
            <picture>
                <source media="(max-width:650px)" srcset="images/contacto/hero-mobile.jpg">
                <img src="images/contacto/hero-desktop.jpg" class="img-full" alt="Contacto">
            </picture>
        </div>
        <div id="contacto-page-content" class="full">
            <div class="container">
                <!-- Secondary Hero / Intro -->
                <div id="secondary-hero" class="mb-5 pb-5">
                    <div class="row align-items-center">
                        <div class="col-12 text">
                            <h3 class="font-weight-bold mb-4 text-center" style="color: #bb131b;">Oficinas Centrales:</h3>
                            <p class="lead text-center mb-5" style="font-size: 1.15rem; color: #555;">
                                Mario Pani No.100 Piso 3, Colonia Santa Fe, Alcaldía Cuajimalpa de Morelos México, Ciudad de México. C.P. 05348.
                            </p>
                            
                            <div class="contacto-cont-p text-center p-4 rounded shadow-sm bg-light mb-5">
                                <p class="p1 font-weight-bold mb-3" style="font-size: 1.5rem; color: #bb131b;">Llámanos al (55) 3088 5000</p>
                                <p class="p1 mb-4">Síguenos y envíanos tus comentarios a través de nuestras cuentas oficiales:</p>
                                <ul class="list-inline">
                                    <li class="list-inline-item mx-3">
                                        <a href="https://www.facebook.com/jugosdelvallesantaclaraoficial" target="_blank">
                                            <img src="images/contacto/icon-facebook.png" alt="Facebook" style="height: 40px; transition: transform 0.3s;">
                                        </a>
                                    </li>
                                    <li class="list-inline-item mx-3">
                                        <a href="https://www.linkedin.com/company/49394/" target="_blank">
                                            <img src="images/contacto/icon-linkedin.png" alt="LinkedIn" style="height: 40px; transition: transform 0.3s;">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Google Map Placeholder -->
                <div class="row mb-5">
                    <div class="col-12">
                        <div class="map-container shadow-sm border rounded overflow-hidden" style="height: 400px; background-color: #eee; position: relative;">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.486877864356!2d-99.28114468509395!3d19.362148986924376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2076043444445%3A0x6b42023507444444!2sMario%20Pani%20100%2C%20Santa%20Fe%2C%20Contadero%2C%20Cuajimalpa%20de%20Morelos%2C%2005348%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1620000000000!5m2!1sen!2smx" 
                                width="100%" 
                                height="100%" 
                                style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>

                <!-- Contact Form Section -->
                <div id="contacto-form-section" class="text-center mb-5 pb-5">
                    <h2 class="subtitle text-center mb-5 font-weight-bold" style="color: #bb131b; position: relative; padding-bottom: 15px;">
                        Contáctanos
                        <span style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 80px; height: 3px; background: #bb131b;"></span>
                    </h2>

                    <div class="contact-form-container mt-5">
                        <div class="row justify-content-center">
                            <div class="col-md-7">
                                <form id="contact-form" class="p-4 rounded shadow-sm bg-light text-left border">
                                    <div class="form-group mb-3">
                                        <input type="text" class="form-control" name="name-usr" placeholder="Nombre" required>
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="email" class="form-control" name="email-usr" placeholder="E-mail" required>
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="tel" class="form-control" name="phone-usr" placeholder="Teléfono" required>
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="text" class="form-control" name="estado" placeholder="Estado">
                                    </div>
                                    
                                    <div class="form-group mb-4">
                                        <div class="custom-file-upload border rounded p-3 bg-white text-center position-relative">
                                            <input type="file" id="contact-file" name="mi-archivo" accept=".doc,.docx,.pdf" style="opacity: 0; position: absolute; top: 0; left: 0; width: 100%; height: 100%; cursor: pointer;">
                                            <div id="file-label">
                                                <i class="fas fa-file-upload fa-2x mb-2" style="color: #6b17dd;"></i><br>
                                                <span class="text-muted">Cargar archivo (máximo 3.5mb)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="text-center mt-4">
                                        <button type="submit" class="btn btn-lg px-5 text-white font-weight-bold" style="background-color: #6b17dd; border: none; border-radius: 5px;">
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer Related Section -->
                <section id="footer-relacionadas" class="py-5 border-top mt-5">
                    <h4 class="mb-4 font-weight-bold" style="color: #333;">Tal vez te pueda interesar:</h4>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="cont-li">
                                <img src="images/contacto/footer-marcas.webp" class="img-fluid w-100 mb-2" alt="Nuestras Marcas">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="font-weight-bold" style="color: #333; font-size: 1rem;">Nuestras Marcas</span>
                                    <a href="#/producto/nuestras-marcas-2" class="text-danger font-weight-bold" style="font-size: 0.85rem; text-decoration: none;">Leer más</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="cont-li">
                                <img src="images/proveedores/footer-cadena.jpg" class="img-fluid w-100 mb-2" alt="Cadena de Valor">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="font-weight-bold" style="color: #333; font-size: 1rem;">Cadena de Valor</span>
                                    <a href="#/compromiso/cadena-de-valor" class="text-danger font-weight-bold" style="font-size: 0.85rem; text-decoration: none;">Leer más</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="cont-li">
                                <img src="images/contacto/footer-directorio.webp" class="img-fluid w-100 mb-2" alt="Directorio">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="font-weight-bold" style="color: #333; font-size: 1rem;">Directorio</span>
                                    <a href="#/tiendas-santa-clara/directorio" class="text-danger font-weight-bold" style="font-size: 0.85rem; text-decoration: none;">Leer más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>

    <style>
        .hover-up {
            transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .hover-up:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
        }
        #contact-form .form-control {
            border-radius: 8px;
            padding: 12px 15px;
            border: 1px solid #ddd;
        }
        #contact-form .form-control:focus {
            border-color: #6b17dd;
            box-shadow: 0 0 0 0.2rem rgba(107, 23, 221, 0.1);
        }
        .custom-file-upload:hover {
            background-color: #f8f9fa !important;
            border-color: #6b17dd !important;
        }
        .list-inline-item img:hover {
            transform: scale(1.1);
        }
        .cont-li span {
            color: #333;
            font-size: 1.1rem;
        }
        .cont-li a {
            text-transform: uppercase;
            font-size: 0.8rem;
            font-weight: bold;
            letter-spacing: 1px;
            border-radius: 20px;
        }
    </style>
    `;
};

export const initContacto = () => {
    window.scrollTo(0, 0);

    if (typeof gsap !== 'undefined') {
        gsap.from("#hero img", {
            duration: 1.5,
            scale: 1.1,
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from("#secondary-hero", {
            duration: 1.2,
            y: 50,
            opacity: 0,
            ease: "power2.out",
            delay: 0.5
        });

        gsap.from(".map-container", {
            duration: 1,
            opacity: 0,
            y: 30,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".map-container",
                start: "top 85%"
            }
        });

        gsap.from("#contact-form", {
            duration: 1,
            y: 40,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#contact-form",
                start: "top 80%"
            }
        });

        gsap.from("#footer-relacionadas .cont-li", {
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#footer-relacionadas",
                start: "top 90%"
            }
        });
    }

    // File input label update
    const fileInput = document.getElementById('contact-file');
    const fileLabel = document.getElementById('file-label');
    if (fileInput && fileLabel) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                fileLabel.innerHTML = `<i class="fas fa-check-circle fa-2x mb-2 text-success"></i><br><span class="text-success font-weight-bold">${e.target.files[0].name}</span>`;
            }
        });
    }

    // Form submission simulation
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Enviando...';
            btn.disabled = true;

            setTimeout(() => {
                alert('¡Gracias! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.');
                form.reset();
                if (fileLabel) {
                    fileLabel.innerHTML = `<i class="fas fa-file-upload fa-2x mb-2" style="color: #6b17dd;"></i><br><span class="text-muted">Cargar archivo (máximo 3.5mb)</span>`;
                }
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);
        });
    }
};
