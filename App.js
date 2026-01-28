import { Header, initHeader } from './components/Header.js';
import { Hero, initHero } from './components/Hero.js';
import { Footer } from './components/Footer.js';
import { Home } from './pages/Home.js';
import { initBrands } from './components/Brands.js';
import { initContactForm } from './components/Contact.js';
// Generic page for other routes
import { GenericPage } from './pages/GenericPage.js';

export const renderApp = () => {
    const app = document.getElementById('app');

    // Simple Hash Router
    const hash = window.location.hash || '#/';
    let content = '';
    let isHome = false;

    // Routing Logic
    // Routing Logic
    if (hash === '#/' || hash === '' || hash === '#') {
        content = Home();
        isHome = true;
    } else if (hash === '#/nosotros/historia') {
        import('./components/History.js').then(module => {
            document.querySelector('main').innerHTML = module.History();
            if (module.initHistory) {
                // specific timeout to ensure DOM is painted
                setTimeout(module.initHistory, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Historia...</div>'; // Placeholder
    } else if (hash === '#/talento/capacitacion') {
        import('./components/Capacitacion.js').then(module => {
            document.querySelector('main').innerHTML = module.Capacitacion();
            if (module.initCapacitacion) {
                setTimeout(module.initCapacitacion, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Capacitación y Desarrollo...</div>';
    } else if (hash === '#/nosotros/cultura') {
        import('./components/Cultura.js').then(module => {
            document.querySelector('main').innerHTML = module.Cultura();
            if (module.initCultura) {
                setTimeout(module.initCultura, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Cultura...</div>';
    } else if (hash === '#/nosotros/centros-de-operacion') {
        import('./components/Centros.js').then(module => {
            document.querySelector('main').innerHTML = module.Centros();
            if (module.initCentros) {
                setTimeout(module.initCentros, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Centros de Operación...</div>';
    } else if (hash === '#/compromiso/cadena-de-valor') {
        import('./components/Cadena.js').then(module => {
            document.querySelector('main').innerHTML = module.Cadena();
            if (module.initCadena) {
                setTimeout(module.initCadena, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Cadena de Valor...</div>';
    } else if (hash === '#/compromiso/residuos') {
        import('./components/Residuos.js').then(module => {
            document.querySelector('main').innerHTML = module.Residuos();
            if (module.initResiduos) {
                setTimeout(module.initResiduos, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Residuos...</div>';
    } else if (hash === '#/compromiso/agua') {
        import('./components/Agua.js').then(module => {
            document.querySelector('main').innerHTML = module.Agua();
            if (module.initAgua) {
                setTimeout(module.initAgua, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Agua...</div>';
    } else if (hash === '#/compromiso/bienestar') {
        import('./components/Bienestar.js').then(module => {
            document.querySelector('main').innerHTML = module.Bienestar();
            if (module.initBienestar) {
                setTimeout(module.initBienestar, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Bienestar...</div>';
    } else if (hash === '#/producto/nuestras-marcas-2') {
        import('./components/Marcas.js').then(module => {
            document.querySelector('main').innerHTML = module.Marcas();
            if (module.initMarcas) {
                setTimeout(module.initMarcas, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Nuestras Marcas...</div>';
    } else if (hash === '#/tiendas-santa-clara/directorio') {
        import('./components/Directorio.js').then(module => {
            document.querySelector('main').innerHTML = module.Directorio();
            if (module.initDirectorio) {
                setTimeout(module.initDirectorio, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Directorio...</div>';
    } else if (hash === '#/tiendas-santa-clara/productos') {
        import('./components/ProductosSantaClara.js').then(module => {
            document.querySelector('main').innerHTML = module.ProductosSantaClara();
            if (module.initProductosSantaClara) {
                setTimeout(module.initProductosSantaClara, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Productos Santa Clara...</div>';
    } else if (hash === '#/tiendas-santa-clara/promociones') {
        import('./components/Promociones.js').then(module => {
            document.querySelector('main').innerHTML = module.Promociones();
            if (module.initPromociones) {
                setTimeout(module.initPromociones, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Promociones...</div>';
    } else if (hash === '#/talento/oferta-de-valor') {
        import('./components/OfertaValor.js').then(module => {
            document.querySelector('main').innerHTML = module.OfertaValor();
            if (module.initOfertaValor) {
                setTimeout(module.initOfertaValor, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Oferta de Valor...</div>';
    } else if (hash === '#/talento/se-parte') {
        import('./components/SeParte.js').then(module => {
            document.querySelector('main').innerHTML = module.SeParte();
            if (module.initSeParte) {
                setTimeout(module.initSeParte, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Sé Parte...</div>';
    } else if (hash === '#/talento/diversidad') {
        import('./components/Diversidad.js').then(module => {
            document.querySelector('main').innerHTML = module.Diversidad();
            if (module.initDiversidad) {
                setTimeout(module.initDiversidad, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Diversidad e Inclusión...</div>';
    } else if (hash === '#/proveedores') {
        import('./components/Proveedores.js').then(module => {
            document.querySelector('main').innerHTML = module.Proveedores();
            if (module.initProveedores) {
                setTimeout(module.initProveedores, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Proveedores...</div>';
    } else if (hash === '#/contacto') {
        import('./components/Contacto.js').then(module => {
            document.querySelector('main').innerHTML = module.Contacto();
            if (module.initContacto) {
                setTimeout(module.initContacto, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Contacto...</div>';
    } else if (hash === '#/tiendas-santa-clara/concesionarios') {
        import('./components/Concesionarios.js').then(module => {
            document.querySelector('main').innerHTML = module.Concesionarios();
            if (module.initConcesionarios) {
                setTimeout(module.initConcesionarios, 100);
            }
        });
        content = '<div class="text-center p-5">Cargando Concesionarios...</div>';
    } else {
        // Extract title from hash
        const title = hash.replace('#/', '').replace(/-/g, ' ').toUpperCase();
        content = GenericPage(title);
    }

    // Render Full Layout
    // Note: The Header component now includes the #floating div inside itself or we can move it out.
    // In the HTML provided: #floating is a sinking sibling to header, but for simplicity we kept it in Header.js output.
    app.innerHTML = `
        ${Header()}
        <main>
            ${content}
        </main>
        ${Footer()}
    `;

    // Initialize Components
    initHeader();

    if (isHome) {
        initHero();
        initBrands();
        initContactForm();
    }

    // Scroll to top on navigation
    window.scrollTo(0, 0);
};

// Listen for hash changes
window.addEventListener('hashchange', renderApp);
