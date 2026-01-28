
export const ProductosSantaClara = () => {
    return `
    <div id="producto-page" class="full">
        <div id="hero">
            <div class="hero-text"></div>
            <picture>
                <source media="(max-width:650px)" srcset="/images/productos-santa-clara/Portada-PRODUCTOS-SANTA-CLARA-mobile.jpg">
                <img src="/images/productos-santa-clara/Portada-PRODUCTOS-SANTA-CLARA.jpg" class="img-full" alt="Productos Santa Clara">
            </picture>
        </div>
        <div id="producto-page-content" class="sta-clara-bg full">
            <div class="container">
                
                <div id="secondary-hero" class="full">
                     <div class="row d-flex align-items-center justify-content-center text-center p-5">
                        <div class="col-md-10">
                            <h3 class="p1" style="color: #633216; font-weight: bold;">Contamos con un amplio portafolio con opciones, porciones y soluciones diseñadas para diferentes estilos de vida,</h3>
                            <p class="p1" style="color: #633216;">con la más alta calidad e inocuidad, estándares Premium y un toque artesanal que caracteriza a Santa Clara. ¡Conócelos!</p>
                        </div>
                    </div>
                </div>

                <div id="producto" class="full">
                    <div id="productos-wrap" class="full">
                        <div class="row">
                            <div class="marca-selector slider-marcasp">
                                <a href="javascript:void(0)" class="sta-clara active" data-cat="ambiente">Ambiente</a>
                                <a href="javascript:void(0)" class="sta-clara" data-cat="refrigerados">Refrigerados</a>
                                <a href="javascript:void(0)" class="sta-clara" data-cat="congelados">Congelados</a>
                                <a href="javascript:void(0)" class="sta-clara" data-cat="cafeteria">Cafetería</a>
                            </div>
                        </div>

                        <div class="row product-ajax-wrap desktop-v">
                            <div class="col-md-3">
                                <div class="products">
                                    <ul id="product-list">
                                        <!-- Dynamic list -->
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-9">
                                <div id="product-detail" class="product-shot">
                                    <!-- Dynamic detail -->
                                </div>
                            </div>
                        </div>

                        <div class="row product-ajax-wrap mobile-v">
                            <div class="col-md-12">
                                <div class="slider-productp" id="mobile-product-slider">
                                    <!-- Dynamic mobile slides -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
             <!-- Tal vez te pueda interesar section (Copied from Directorio since it appeared in screenshots) -->
            <div class="container" style="margin-top: 50px; margin-bottom: 50px;">
                <div class="row">
                    <div class="col-12">
                        <h3 style="font-weight: bold; margin-bottom: 30px;">Tal vez te pueda interesar:</h3>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0">
                            <img src="/images/productos-santa-clara/SE-PARTE.jpg" class="card-img-top" alt="Sé Parte">
                            <div class="card-body pl-0">
                                <h5 class="card-title font-weight-bold">Sé Parte</h5>
                                <a href="#/talento/se-parte" class="text-danger font-weight-bold">Leer más</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0">
                            <img src="/images/productos-santa-clara/Promociones-Sta-Clara-Notas-de-Interes.jpg" class="card-img-top" alt="Promociones">
                            <div class="card-body pl-0">
                                <h5 class="card-title font-weight-bold">Promociones</h5>
                                <a href="#/tiendas-santa-clara/promociones" class="text-danger font-weight-bold">Leer más</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0">
                            <img src="/images/productos-santa-clara/Directorio-Sta-Clara-Notas-de-Interes.jpg" class="card-img-top" alt="Directorio">
                            <div class="card-body pl-0">
                                <h5 class="card-title font-weight-bold">Directorio</h5>
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

// Placeholder data - Needs to be filled with accurate scraping results later
const productsSantaClaraData = {
    ambiente: [
        {
            id: 'leche-uht',
            name: 'Santa Clara Leche UHT',
            image: 'LEches-UHT.png',
            desc: 'Leche Santa Clara UHT, el sabor de siempre con la practicidad que necesitas.',
            specs: ['1 L: Entera, Semidescremada, Light, Deslactosada, Deslactosada Light.']
        },
        {
            id: 'leche-sabor',
            name: 'Santa Clara Leche Saborizada',
            image: 'SANTA-CLARA-LECHE-UHT-SABOR.jpg',
            desc: 'Deliciosa leche saborizada Santa Clara, para disfrutar en cualquier momento.',
            specs: ['200 ml: Chocolate, Fresa, Vainilla.']
        }
    ],
    refrigerados: [
        {
            id: 'queso-provolone',
            name: 'Queso Provolone',
            image: 'Quesoprovolone-1.webp',
            desc: 'Disfruta del auténtico sabor del Queso Provolone Santa Clara.',
            specs: ['400g']
        },
        {
            id: 'queso-edam',
            name: 'Queso Edam',
            image: 'QuesoEdam-1.webp',
            desc: 'El sabor suave y característico del Queso Edam Santa Clara.',
            specs: ['Bola']
        },
        {
            id: 'queso-morbier',
            name: 'Queso Morbier',
            image: 'MORBIER.jpg',
            desc: 'Un queso con carácter y distinción.',
            specs: ['Pieza']
        },
        {
            id: 'queso-port-salut',
            name: 'Queso Port Salut',
            image: 'PORT-SALUTE.jpg',
            desc: 'Cremosidad y sabor en cada rebanada.',
            specs: ['Pieza']
        }
    ],
    congelados: [
        // Placeholder data based on common Santa Clara products
        {
            id: 'helado-tradicional',
            name: 'Helado Tradicional',
            image: 'Portada-PRODUCTOS-SANTA-CLARA.jpg', // Placeholder image
            desc: 'Nuestros helados tradicionales están hechos con leche 100% de vaca.',
            specs: ['1 L: Vainilla, Chocolate, Fresa']
        }
    ],
    cafeteria: [
        // Placeholder
        {
            id: 'cafe-del-dia',
            name: 'Café del Día',
            image: 'Portada-PRODUCTOS-SANTA-CLARA.jpg', // Placeholder image
            desc: 'El mejor café para empezar tu día.',
            specs: ['Varios tamaños']
        }
    ]
};

export const initProductosSantaClara = () => {
    console.log('Initializing Productos Santa Clara...');

    // Mobile Slider Logic (using Slick if available, otherwise simple display)
    if (typeof $ !== 'undefined' && $.fn.slick) {
        // Destroy if exists
        try {
            $('#mobile-product-slider').slick('unslick');
        } catch (e) { }
    }

    const categoryLinks = document.querySelectorAll('.marca-selector a');
    const productList = document.getElementById('product-list');
    const productDetail = document.getElementById('product-detail');
    const mobileSlider = document.getElementById('mobile-product-slider');

    const renderDetail = (p) => {
        if (!productDetail || !p) return;
        const imagePath = p.image.startsWith('http') ? p.image : `/images/productos-santa-clara/${p.image}`;

        productDetail.innerHTML = `
            <div class="row fade-in">
                <div class="col-md-6">
                    <img src="${imagePath}" class="img-fluid" alt="${p.name}">
                </div>
                <div class="col-md-6 info-prod">
                    <h2 class="title-product" style="color: #633216;">${p.name}</h2>
                    <div class="p-content"><p>${p.desc}</p></div>
                    
                    <h4 style="color: #633216;">Presentaciones</h4>
                    <ul class="clean-list">
                        ${p.specs.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                    
                    <div class="social-share mt-4">
                         <h4 style="color: #633216;">Síguenos en redes sociales</h4>
                         <ul class="clean-list d-flex">
                            <li class="social-icons mr-3"><a href="#" class="fab fa-facebook-f" style="color: #633216; font-size: 20px;"></a></li>
                            <li class="social-icons"><a href="#" class="fab fa-instagram" style="color: #633216; font-size: 20px;"></a></li>
                         </ul>
                    </div>
                </div>
            </div>
        `;

        // Simple fade in animation
        const fadeIn = productDetail.querySelector('.fade-in');
        if (fadeIn) {
            fadeIn.style.opacity = 0;
            fadeIn.style.transition = 'opacity 0.5s';
            setTimeout(() => fadeIn.style.opacity = 1, 50);
        }
    };

    const renderProducts = (cat) => {
        const products = productsSantaClaraData[cat] || [];

        // Desktop List
        if (productList) {
            productList.innerHTML = products.map((p, index) => `
                <li>
                    <a href="javascript:void(0)" data-id="${p.id}" class="${index === 0 ? 'active' : ''}">
                        ${p.name}
                        <i class="fa fa-chevron-right"></i>
                    </a>
                </li>
            `).join('');

            // Add click listeners to list items
            const listItems = productList.querySelectorAll('a');
            listItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    listItems.forEach(i => i.classList.remove('active'));
                    item.classList.add('active');
                    const productId = item.getAttribute('data-id');
                    const product = products.find(p => p.id === productId);
                    renderDetail(product);
                });
            });
        }

        // Render first product detail by default
        if (products.length > 0) {
            renderDetail(products[0]);
        } else {
            if (productDetail) productDetail.innerHTML = '<p>No hay productos en esta categoría.</p>';
        }

        // Mobile Slider Content
        if (mobileSlider) {
            const slidesHTML = products.map(p => {
                const imagePath = p.image.startsWith('http') ? p.image : `/images/productos-santa-clara/${p.image}`;
                return `
                <div class="cont-product-mobile">
                    <ul><li><p>${p.name}</p></li></ul>
                    <div class="product-shot">
                        <div class="product-image">
                            <img src="${imagePath}" class="img-fluid" alt="${p.name}">
                        </div>
                        <div class="product-info">
                            <div class="p-content"><p>${p.desc}</p></div>
                            <h4>Presentaciones</h4>
                            <ul class="clean-list">
                                ${p.specs.map(s => `<li>${s}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `}).join('');

            mobileSlider.innerHTML = slidesHTML;

            // Re-init Slick
            if (typeof $ !== 'undefined' && $.fn.slick) {
                $('#mobile-product-slider').not('.slick-initialized').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
                    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
                });
            }
        }
    };

    // Category Click Handling
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            categoryLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const cat = link.getAttribute('data-cat');
            renderProducts(cat);
        });
    });

    // Initial Render (Load first category)
    renderProducts('ambiente');
};
