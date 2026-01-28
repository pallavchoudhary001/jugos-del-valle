
export const Proveedores = () => {
    return `
    <div id="proveedor-page" class="full">
        <!-- Hero Section -->
        <section id="hero" class="position-relative overflow-hidden">
            <picture>
                <source media="(max-width: 650px)" srcset="images/proveedores/hero-mobile.jpg">
                <img src="images/proveedores/hero-desktop.jpg" class="w-100" alt="Proveedores">
            </picture>
        </section>

        <div id="proveedor-page-content" class="full py-5">
            <div class="container">
                <!-- Secondary Hero / Intro -->
                <div id="secondary-hero" class="mb-5 pb-5">
                    <div class="row align-items-center">
                        <div class="col-12 text">
                            <h3 class="font-weight-bold mb-4" style="color: #6b17dd; font-size: 2.2rem;">El sistema de proveeduría es esencial dentro de nuestra cadena de valor.</h3>
                            <p class="lead" style="font-size: 1.15rem; color: #555; line-height: 1.8;">
                                Trabajamos de la mano con más de 3,500 compañías que comparten nuestra visión y estándares de calidad. Promovemos y fortalecemos el respeto a los derechos humanos, laborales e infantiles, así como el cumplimiento de las normas y principios internacionales. Es por ello que, desarrollamos un sistema de principios rectores con nuestros socios y proveedores, compartiendo buenas prácticas e iniciativas globales como la del Pacto de las Naciones Unidas.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Facturación Section -->
                <div id="proveedor-actions" class="text-center mb-5 pb-5">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="facturacion mb-5">
                                <a target="_blank" href="https://jugosdelvalle.cfdinova.com.mx/CFDIPortalProveedores/" class="btn btn-danger btn-lg px-5 py-3 font-weight-bold" style="background-color: #bb131b; border: none; border-radius: 50px; letter-spacing: 1px; box-shadow: 0 4px 15px rgba(187, 19, 27, 0.3);">
                                    FACTURACIÓN PROVEEDORES
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="facturacion-data mt-5">
                        <h2 class="subtitle text-center mb-5 font-weight-bold" style="color: #bb131b; position: relative; padding-bottom: 15px; font-size: 1.8rem;">
                            Envíanos tu información para ser parte de nuestro catálogo de proveedores y socios comerciales.
                            <span style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 80px; height: 3px; background: #bb131b;"></span>
                        </h2>

                        <div class="contact-form-container mt-5">
                            <div class="row justify-content-center">
                                <div class="col-md-7">
                                    <form id="supplier-form" class="p-4 rounded shadow-sm bg-light text-left border">
                                        <div class="form-group mb-3">
                                            <input type="text" class="form-control" name="name-usr" placeholder="Nombre completo" required>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="email" class="form-control" name="email-usr" placeholder="Correo electrónico" required>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="tel" class="form-control" name="phone-usr" placeholder="Teléfono de contacto" required>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="text" class="form-control" name="estado" placeholder="Estado">
                                        </div>
                                        <div class="form-group mb-3">
                                            <select class="form-control" name="ciudad">
                                                <option value="" disabled selected>Selecciona un centro de trabajo</option>
                                                <option value="Oficinas CDMX">Oficinas CDMX</option>
                                                <option value="Planta Tepotzotlán">Planta Tepotzotlán</option>
                                                <option value="CEDIS Edo. Méx.">CEDIS Edo. Méx.</option>
                                                <option value="Planta Lerma">Planta Lerma</option>
                                                <option value="Planta Pachuca">Planta Pachuca</option>
                                                <option value="CEDIS Pachuca">CEDIS Pachuca</option>
                                                <option value="Planta Lagos de Moreno">Planta Lagos de Moreno</option>
                                                <option value="Planta Monterrey">Planta Monterrey</option>
                                                <option value="Planta Zacatecas">Planta Zacatecas</option>
                                            </select>
                                        </div>
                                        <div class="form-group mb-4">
                                            <div class="custom-file-upload border rounded p-3 bg-white text-center position-relative">
                                                <input type="file" id="supplier-file" name="mi-archivo" accept=".doc,.docx,.pdf" style="opacity: 0; position: absolute; top: 0; left: 0; width: 100%; height: 100%; cursor: pointer;">
                                                <div id="file-label">
                                                    <i class="fas fa-file-upload fa-2x mb-2" style="color: #6b17dd;"></i><br>
                                                    <span class="text-muted">Cargar archivo (PDF o Word, máx. 3.5MB)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-center mt-4">
                                            <button type="submit" class="btn btn-lg px-5 text-white font-weight-bold" style="background-color: #6b17dd; border: none; border-radius: 5px;">
                                                Enviar Solicitud
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer Related Section -->
                <section id="footer-relacionadas" class="py-5 border-top mt-5">
                    <h4 class="mb-4 font-weight-bold">Tal vez te pueda interesar:</h4>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="cont-li shadow-sm rounded overflow-hidden h-100 bg-white hover-up border">
                                <img src="images/proveedores/footer-centros.webp" class="img-fluid w-100" alt="Centros de Trabajo" style="height: 200px; object-fit: cover;">
                                <div class="p-3 text-center">
                                    <span class="d-block font-weight-bold mb-2">Centros de Trabajo</span>
                                    <a href="#/nosotros/centros-de-operacion" class="btn btn-sm btn-outline-danger">Leer más</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="cont-li shadow-sm rounded overflow-hidden h-100 bg-white hover-up border">
                                <img src="images/proveedores/footer-marcas.webp" class="img-fluid w-100" alt="Nuestras Marcas" style="height: 200px; object-fit: cover;">
                                <div class="p-3 text-center">
                                    <span class="d-block font-weight-bold mb-2">Nuestras Marcas</span>
                                    <a href="#/producto/nuestras-marcas-2" class="btn btn-sm btn-outline-danger">Leer más</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="cont-li shadow-sm rounded overflow-hidden h-100 bg-white hover-up border">
                                <img src="images/proveedores/footer-cadena.jpg" class="img-fluid w-100" alt="Cadena de Valor" style="height: 200px; object-fit: cover;">
                                <div class="p-3 text-center">
                                    <span class="d-block font-weight-bold mb-2">Cadena de Valor</span>
                                    <a href="#/compromiso/cadena-de-valor" class="btn btn-sm btn-outline-danger">Leer más</a>
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
        #supplier-form .form-control {
            border-radius: 8px;
            padding: 12px 15px;
            border: 1px solid #ddd;
        }
        #supplier-form .form-control:focus {
            border-color: #6b17dd;
            box-shadow: 0 0 0 0.2rem rgba(107, 23, 221, 0.1);
        }
        .custom-file-upload:hover {
            background-color: #f8f9fa !important;
            border-color: #6b17dd !important;
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

export const initProveedores = () => {
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

        gsap.from(".facturacion", {
            duration: 1,
            scale: 0.9,
            opacity: 0,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".facturacion",
                start: "top 85%"
            }
        });

        gsap.from("#supplier-form", {
            duration: 1,
            y: 40,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#supplier-form",
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
    const fileInput = document.getElementById('supplier-file');
    const fileLabel = document.getElementById('file-label');
    if (fileInput && fileLabel) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                fileLabel.innerHTML = `<i class="fas fa-check-circle fa-2x mb-2 text-success"></i><br><span class="text-success font-weight-bold">${e.target.files[0].name}</span>`;
            }
        });
    }

    // Form submission simulation
    const form = document.getElementById('supplier-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Enviando...';
            btn.disabled = true;

            setTimeout(() => {
                alert('¡Gracias! Tu información ha sido enviada correctamente. Nos pondremos en contacto contigo pronto.');
                form.reset();
                if (fileLabel) {
                    fileLabel.innerHTML = `<i class="fas fa-file-upload fa-2x mb-2" style="color: #6b17dd;"></i><br><span class="text-muted">Cargar archivo (PDF o Word, máx. 3.5MB)</span>`;
                }
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);
        });
    }
};

