
export const Marcas = () => {
    return `
    <div id="producto-page" class="full">
        <div id="hero">
            <div class="hero-text"></div>
            <picture>
                <source media="(max-width:650px)" srcset="/images/marcas/Header-nuestras-marcas-mobile-2024.png">
                <img src="/images/marcas/Header-nuestras-marcas-desktop-2024.jpg" class="img-full" alt="Nuestras Marcas">
            </picture>
        </div>
        <div id="producto-page-content" class="full">
            <div class="container">
                <div class="row overflow">
                    <div id="secondary-hero" class="full">
                        <div class="row d-flex align-items-center">
                            <div class="text">
                                <h3 class="p1">9 marcas en 9 categorías que te hidratan y te ofrecen bienestar y nutrición</h3>
                                <p class="p1">con los más altos estándares de calidad e inocuidad a través de diferentes opciones, porciones y soluciones para cualquier gusto y estilo de vida.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div id="producto" class="full">
                        <h2 class="subtitle">Dividimos nuestros productos hacia 3 objetivos, da clic en alguno para conocerlos</h2>

                        <div id="productos-wrap" class="full">
                            <div class="container">
                                <div class="des-note">
                                    <p>Da clic en la categoría que desees para conocer más.</p>
                                </div>
                                <div class="row">
                                    <div class="marca-selector slider-marcasp">
                                        <a href="javascript:void(0)" class="active" data-cat="nutricion">Nutrición</a>
                                        <a href="javascript:void(0)" data-cat="indulgencia">Indulgencia</a>
                                        <a href="javascript:void(0)" data-cat="hidratacion">Hidratación</a>
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
                </div>
            </div>
        </div>
    </div>
    `;
};

const productsData = {
    nutricion: [
        { id: '3092', name: 'Del Valle Selección', logo: 'Del-Valle.webp', image: 'Del-Valle-Seleccion-Familia-2024.png', desc: 'Del Valle Selección es la bebida que selecciona lo mejor del jugo de las frutas y las combina para crear un sabor único, delicioso y natural. ¡Llena de bienestar esos pequeños descansos dentro y fuera de casa!', specs: ['237 ml, 500 ml y 1 lt', 'Mango-Fresa y Piña Mandarina'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/DelValleMx/' }] },
        { id: '848', name: 'Del Valle 100%', logo: 'DelValleReserva.png', image: 'Del-Valle-100.webp', desc: '100% jugo de fruta, sin azúcares añadidos ni conservadores. Del Valle sabe bien y lo hace bien.', specs: ['413 ml y 936 ml', 'Naranja y Manzana'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/DelValleMx/' }] },
        { id: '845', name: 'Del Valle', logo: 'Del-Valle.webp', image: 'Del-Valle.webp', desc: 'En Del Valle nos apasionan las frutas, por eso decidimos hacer estos deliciosos néctares para que los disfrutes en cualquier momento del día y con toda la nutrición para tu familia. Del Valle sabe bien y lo hace bien.', specs: ['125 ml, 200 ml, 250 ml, 355 ml, 413 ml, 500 ml, 946 ml, 1 lt y 1.89 lt', 'Mango, Durazno, Manzana, Piña, Guayaba y Clarificado de Manzana.'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/DelValleMx/' }] },
        { id: '851', name: 'Del Valle Pulpy', logo: 'LOGO-PULPY.png', image: 'Pulpy-1.webp', desc: 'Del Valle Pulpy es una deliciosa bebida con jugo de fruta donde puedes sentir y disfrutar sus deliciosos cachitos y gajitos de fruta.', specs: ['400 ml', 'Mango, Durazno, Aloe y Naranja'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/DelValleMx/' }] },
        { id: '854', name: 'Del Valle Antiox', logo: 'DelValleReserva.png', image: 'Antiox-1.webp', desc: 'Del Valle Antiox es nuestra línea selecta que combina jugos con extractos de fruta, creando deliciosos néctares premium que favorecen tu hidratación y bienestar. Encuentra en nuestra línea Antiox extractos de arándano y granada.', specs: ['237 ml y 1 lt', 'Manzana-Granada, Manzana-Arándano, Uva-Granada y Uva-Arándano'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/DelValleMx/' }] },
        { id: '857', name: 'Valle Frut', logo: 'LOGO-FRUT.png', image: 'Frut-1.webp', desc: 'Del Valle Frut es una bebida súper refrescante, que te da lo bueno y delicioso de Del Valle para que puedas saborearla en cualquier momento del día, y acompañar todas nuestras riquísimas comidas.', specs: ['355 ml, 600 ml, 2 lt y 3 lt', 'Ponche Cítrico, Uva, Manzana y Guayaba'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/DelValleMx/' }] },
        { id: '860', name: 'AdeS Lácteo', logo: 'ADES-LOGOTIPO-1.jpg', image: 'AdesLacteo-2024.png', desc: 'Nuestro propósito es ofrecer lo mejor de las semillas para que todos puedan disfrutar de una VIDA MÁS LARGA y la puedan vivir PLENAMENTE. Toma AdeS y haz un pequeño cambio para sentirte bien. Sin lactosa, colesterol, gluten, conservadores y colorantes artificiales.', specs: ['946 ml: Soya, Soya Sin Azúcar, Soya-Vainilla, Almendra, Almendra Sin Azúcar, Almendra-Vainilla y Coco sin azúcar.'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/Ades-227625413930551/' }, { type: 'instagram', url: 'https://www.instagram.com/ades_mex/' }] },
        { id: '682', name: 'AdeS Frutal', logo: 'ADES-LOGOTIPO.jpg', image: 'AdesFrutal-2024.png', desc: 'AdeS es una bebida a base de Soya con jugo de fruta que contiene proteína vegetal y vitaminas. Además tiene un gran sabor y menos de 50 calorías por porción. Consiente y cuida a quienes más quieres de una manera deliciosa.', specs: ['200 ml y 946 ml: Manzana, Mango, Durazno, Guanábana, Naranja, Uva, Piña, Frutos Tropicales, Manzana Light, Mango Light y Durazno Light.'], social: [{ type: 'facebook-f', url: 'https://es-la.facebook.com/Ades-227625413930551/' }] },
        { id: '863', name: 'Santa Clara Leche UHT', logo: 'Santa-Clara.webp', image: 'LEches-UHT.png', desc: 'Cuidamos cada detalle del origen y la elaboración de nuestra leche 100% pura de vaca, tenemos un proceso de ultra pasteurización a base de inyección de vapor que mantiene las propiedades naturales de la leche.', specs: ['200 ml: Entera', '250 ml y 946 ml: Leche Deslactosada + Avena', '1lt: Entera, Semidescremada, Light, Deslactosada y Deslactosada Light', '1.5 lt: Entera y Deslactosada'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/SantaClaraMex/' }, { type: 'instagram', url: 'https://www.instagram.com/santaclaramx/' }] },
        { id: '864', name: 'Santa Clara Sabores', logo: 'Santa-Clara.webp', image: 'SANTA-CLARA-LECHE-UHT-SABOR-1.jpg', desc: 'Nuestras lechitas son de la más alta calidad, pues están hechas con leche 100% pura de vaca, libres de colorantes y saborizantes artificiales, con vitaminas A y D. Además sus diferentes sabores están inspirados en nuestros deliciosos helados Santa Clara.', specs: ['135 ml: Chocolate, Fresa, Vainilla, y Capuccino.', '200 ml: Cajeta, Fresa, Natural, Capuccino, Vainilla y Fantasía.', '250 ml: Fresa, Menta con Chispas, y Triple Chocolate.', '750 ml: Chocolate y Fresa'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/SantaClaraMex/' }, { type: 'instagram', url: 'https://www.instagram.com/santaclaramx/' }] },
        { id: '868', name: 'Crema Santa Clara', logo: 'Santa-Clara.webp', image: 'Producto-Crema-Santa-Clara.webp', desc: 'Hecha a base de 100% leche de vaca, con la cantidad ideal de grasa butírica y proteína que reafirman su calidad Premium.', specs: ['225 ml, 450 ml, 800 ml y 4 lt'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/SantaClaraMex/' }] },
        { id: '1958', name: 'Queso Cottage', logo: 'Santa-Clara.webp', image: 'QuesoCotagge.webp', desc: 'Bajo en grasa y alto en proteínas con sabor delicioso, suave, ligeramente ácido y muy agradable.', specs: ['380 g, 500 g y 1kg'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/SantaClaraMex/' }] },
        { id: '1959', name: 'Queso Panela', logo: 'Santa-Clara.webp', image: 'QuesoPanella.webp', desc: 'Queso elaborado con leche parcialmente descremada de vaca, bajo en grasa y sal para aquellos que llevan una vida saludable.', specs: ['500 g'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/SantaClaraMex/' }] },
        { id: '1960', name: 'Queso Oaxaca', logo: 'Santa-Clara.webp', image: 'QUESO-OAXACA.jpg', desc: 'De sabor ácido y ligeramente cremoso, prueba la textura fresca, suave y con la mejor consistencia, lista para saborearse.', specs: ['500 g'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/SantaClaraMex/' }] },
        { id: '1961', name: 'Queso Manchego', logo: 'Santa-Clara.webp', image: 'QuesoManchego.webp', desc: 'Nuestro queso tipo manchego se caracteriza por su delicioso aroma y suave textura, con cremosidad única. Digno de un producto Santa Clara.', specs: ['500 g y 1 kg'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/SantaClaraMex/' }] },
        { id: '1962', name: 'Queso Provolone', logo: 'Santa-Clara.webp', image: 'QuesoProvolone.webp', desc: 'Con sabor suave, ahumado y de consistencia firme al rebanar que se disfrutan desde la primera mordida.', specs: ['500 g y 1 kg'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/SantaClaraMex/' }] },
        { id: '1963', name: 'Queso EDAM', logo: 'Santa-Clara.webp', image: 'QuesoEDAM.webp', desc: 'Con un toque de nuez y mantequilla, acompañado de sutiles toques de frutos secos. Degusta este queso ideal para los paladares más exigentes.', specs: ['500 g y 1 kg'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/SantaClaraMex/' }] },
        { id: '1964', name: 'Queso Morbier', logo: 'Santa-Clara.webp', image: 'MORBIER.jpg', desc: 'Destacado por su sabor suave y delicado equilibrio de acidez, característico de nuestra línea Premium.', specs: ['500 g y 1 kg'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/SantaClaraMex/' }] },
        { id: '1965', name: 'Queso Port Salute', logo: 'Santa-Clara.webp', image: 'PORT-SALUTE.jpg', desc: 'Hecho con leche de vaca y con una delicada corteza naranja, que complementan brindan un sabor suave y delicado a tus platillos.', specs: ['500 g y 1 kg'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/SantaClaraMex/' }] }
    ],
    indulgencia: [
        { id: 'fuze', name: 'Fuze Tea', logo: 'FUZE_TEA-LOGOTIPO.jpg', image: 'Familia-FuzeTea-Desktop.webp', desc: 'Fuze Tea es una bebida hecha con extracto de té e ingredientes de origen natural, que te ofrece una experiencia única de sabor y frescura.', specs: ['453 ml, 600 ml y 1 lt', 'Negro-Durazno, Negro-Limón, Verde-Limón, Negro-Frutos Rojos.'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/fuzeMX' }] },
        { id: 'florida', name: 'Florida7', logo: 'FLORIDA-LOGOTIPO-NUEVO.png', image: 'Familia-Florida-Desktop.webp', desc: 'Florida 7 es la bebida con jugo de fruta que te ofrece frescura y sabor para acompañar tus comidas y momentos en familia.', specs: ['200 ml, 413 ml, 1 lt y 1.89 lt', 'Naranja, Mango, Manzana, Uva.'], social: [] },
        { id: 'frutsi', name: 'Frutsi', logo: 'FRUTSI.webp', image: 'Familia-Frutsi-Desktop.webp', desc: 'Frutsi es la bebida divertida y deliciosa para los niños, fortificada con vitaminas para acompañarlos en sus juegos y aventuras.', specs: ['250 ml', 'Ponche, Uva, Naranja, Manzana.'], social: [] },
        { id: 'cielmini', name: 'Ciel Mini', logo: 'CIEL-MINI.webp', image: 'FamiliaCielMiniDesktop.webp', desc: 'Ciel Mini es el agua purificada diseñada para los más pequeños, con el tamaño ideal para sus manos y la hidratación que necesitan.', specs: ['300 ml'], social: [] }
    ],
    hidratacion: [
        { id: 'powerade', name: 'Powerade', logo: 'POWERADE-LOGOTIPO.jpg', image: 'Familia-Powerade-Desktop.webp', desc: 'Powerade es la bebida deportiva que te ayuda a reponer los electrolitos que pierdes al sudar, dándote la energía para seguir adelante.', specs: ['500 ml, 600 ml, 1 lt'], social: [{ type: 'facebook-f', url: 'https://www.facebook.com/powerademexico' }] },
        { id: 'vitamin', name: 'Vitaminwater', logo: 'VITAMINWATER-LOGOTIPO.jpg', image: 'FamiliaVitamineWaterDesktop.webp', desc: 'Glaceau Vitaminwater es el agua adicionada con vitaminas y minerales que te ofrece una hidratación inteligente con sabores deliciosos.', specs: ['500 ml', 'Energy, Power-C, Restore.'], social: [] }
    ]
};

export const initMarcas = () => {
    const productList = document.getElementById('product-list');
    const productDetail = document.getElementById('product-detail');
    const mobileSlider = document.getElementById('mobile-product-slider');
    const catSelectors = document.querySelectorAll('.marca-selector a');

    const renderProducts = (cat) => {
        const products = productsData[cat] || [];

        // Desktop Sidebar
        productList.innerHTML = products.map((p, idx) => `
            <li><a href="#" class="${idx === 0 ? 'active' : ''}" data-id="${p.id}">${p.name}</a></li>
        `).join('');

        // Desktop Detail Initial
        if (products.length > 0) {
            renderDetail(products[0]);
        }

        // Mobile Render
        mobileSlider.innerHTML = products.map(p => {
            const logoPath = p.logo.includes('/') ? p.logo : `/images/marcas/${p.logo}`;
            const imagePath = p.image.includes('/') ? p.image : (p.image.startsWith('Familia') ? `/images/${p.image}` : `/images/marcas/${p.image}`);

            return `
            <div class="cont-product-mobile">
                <ul><li><p>${p.name}</p></li></ul>
                <div class="product-shot">
                    <div class="p-logo aligncenter mobile-v text-center">
                        <img src="${logoPath}" class="img-fluid" alt="">
                    </div>
                    <div class="product-image">
                        <img src="${imagePath}" class="img-fluid" alt="">
                    </div>
                    <div class="product-info">
                        <div class="p-logo aligncenter desktop-v">
                             <img src="${logoPath}" class="img-fluid" alt="">
                        </div>
                        <div class="p-content"><p>${p.desc}</p></div>
                        <h4>Presentaciones y Sabores</h4>
                        <ul class="clean-list">
                            ${p.specs.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                        ${p.social && p.social.length > 0 ? `
                            <h4>Síguenos en redes sociales</h4>
                            <ul class="clean-list">
                                ${p.social.map(s => `
                                    <li class="social-icons">
                                        <a href="${s.url}" class="fab fa-${s.type}" target="_blank"></a>
                                    </li>
                                `).join('')}
                            </ul>
                        ` : ''}
                    </div>
                </div>
            </div>
        `}).join('');

        // Slick re-init
        if (window.jQuery && jQuery.fn.slick) {
            if (jQuery(mobileSlider).hasClass('slick-initialized')) {
                jQuery(mobileSlider).slick('unslick');
            }
            jQuery(mobileSlider).slick({
                dots: true,
                arrows: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                adaptiveHeight: true
            });
        }
    };

    const renderDetail = (p) => {
        const logoPath = p.logo.includes('/') ? p.logo : `/images/marcas/${p.logo}`;
        const imagePath = p.image.includes('/') ? p.image : (p.image.startsWith('Familia') ? `/images/${p.image}` : `/images/marcas/${p.image}`);

        productDetail.innerHTML = `
            <div class="product-shot">
                <div class="p-logo aligncenter mobile-v text-center">
                    <img src="${logoPath}" class="img-fluid" alt="">
                </div>
                <div class="product-image">
                    <img src="${imagePath}" class="img-fluid" alt="">
                </div>
                <div class="product-info">
                    <div class="p-logo aligncenter desktop-v">
                        <img src="${logoPath}" class="img-fluid" alt="">
                    </div>
                    <div class="p-content"><p>${p.desc}</p></div>
                    <h4>Presentaciones y Sabores</h4>
                    <ul class="clean-list">
                        ${p.specs.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                    ${p.social && p.social.length > 0 ? `
                        <h4>Síguenos en redes sociales</h4>
                        <ul class="clean-list">
                            ${p.social.map(s => `
                                <li class="social-icons">
                                    <a href="${s.url}" class="fab fa-${s.type}" target="_blank" style="color:#000; font-size:1.5rem; margin-right:10px;"></a>
                                </li>
                            `).join('')}
                        </ul>
                    ` : ''}
                </div>
            </div>
        `;
        // Animation
        if (typeof gsap !== 'undefined') {
            gsap.from(productDetail, { opacity: 0, x: 20, duration: 0.5 });
        }
    };

    // Category click
    catSelectors.forEach(sel => {
        sel.addEventListener('click', (e) => {
            e.preventDefault();
            catSelectors.forEach(s => s.classList.remove('active'));
            sel.classList.add('active');
            renderProducts(sel.dataset.cat);
        });
    });

    // Product click
    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            productList.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            e.target.classList.add('active');
            const id = e.target.dataset.id;
            const activeCatSel = document.querySelector('.marca-selector a.active');
            if (!activeCatSel) return;
            const cat = activeCatSel.dataset.cat;
            const product = productsData[cat].find(p => p.id === id);
            if (product) renderDetail(product);
        }
    });

    renderProducts('nutricion');

    if (typeof gsap !== 'undefined') {
        gsap.from("#secondary-hero", { opacity: 0, y: 30, duration: 1 });
    }
};
