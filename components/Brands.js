export const Brands = () => {
  return `
    <div id="marcas" class="full">
    <h2 class="subtitle">
      <a href="#/productos/nuestras-marcas">Nuestras Marcas</a>
    </h2>

    <div id="marcas-block" class="desktop">
      <div class="row desktop-v">
          ${['DelValle', 'SantaClara', 'ADES', 'PowerAde', 'FuzeTea', 'GlaceauVitaminwater', 'Florida7', 'CielMini', 'Frutsi'].map(brand => `
          <div class="col-md-2 brand-trigger" data-target="${brand}">
             <div class="marca d-none">
              <a href="javascript:void(0)">
              <img src="/images/${getBrandImage(brand)}" alt="\${brand}" class="img-fluid">
              </a>
              </div>
             <div class="marca">
              <a href="javascript:void(0)">
              <img src="/images/${getBrandImage(brand)}" alt="\${brand}" class="img-fluid">
              </a>
            </div>
          </div>
          `).join('')}
      </div>

      <!-- Mobile Slider Structure -->
      <div class="row mobile-v">
        <div class="marcas-slider">
             ${['DelValle', 'SantaClara', 'ADES', 'PowerAde', 'FuzeTea', 'GlaceauVitaminwater', 'Florida7', 'CielMini', 'Frutsi'].map(brand => `
              <div class="marca">
              <a href="#${brand}">
              <img src="/images/${getBrandImage(brand)}" alt="\${brand}" class="img-fluid">
              </a>
            </div>
            `).join('')}
        </div>
      </div>

      <div class="row" id="brand-tabs-container">
          <!-- Principal Tab -->
          <div class="tab_content active" id="principal">
            <picture>
              <source media="(max-width:650px)" srcset="/images/products/principal.png">
              <img src="/images/products/principal.png" class="img-fluid" alt="">
            </picture>
          </div>
          
          <!-- Dynamic Tabs --> 
          <!-- Note: I am simplifying the repetition from the source HTML by generating these, 
               but keeping the exact IDs and classes required by the logic. -->
               
          <div class="tab_content" id="DelValle">
            <picture>
              <source media="(max-width:650px)" srcset="/images/products/del-valle-mobile.webp">
              <img src="/images/products/del-valle-desktop.webp" class="img-fluid" alt="">
            </picture>
          </div>
          <div class="tab_content" id="SantaClara">
            <picture>
              <source media="(max-width:650px)" srcset="/images/products/santa-clara-mobile.png">
              <img src="/images/products/santa-clara-desktop.png" class="img-fluid" alt="">
            </picture>
          </div>
          <div class="tab_content" id="ADES">
            <picture>
              <source media="(max-width:650px)" srcset="/images/products/ades-mobile.png">
              <img src="/images/products/ades-desktop.png" class="img-fluid" alt="">
            </picture>
          </div>
          <div class="tab_content" id="PowerAde">
            <picture>
              <source media="(max-width:650px)" srcset="/images/products/powerade-mobile.webp">
              <img src="/images/products/powerade-desktop.webp" class="img-fluid" alt="">
            </picture>
          </div>
          <div class="tab_content" id="FuzeTea">
            <picture>
              <source media="(max-width:650px)" srcset="/images/products/fuze-tea-mobile.webp">
              <img src="/images/products/fuze-tea-desktop.webp" class="img-fluid" alt="">
            </picture>
          </div>
          <div class="tab_content" id="GlaceauVitaminwater">
            <picture>
              <source media="(max-width:650px)" srcset="/images/products/vitaminwater-mobile.webp">
              <img src="/images/products/vitaminwater-desktop.webp" class="img-fluid" alt="">
            </picture>
          </div>
          <div class="tab_content" id="Florida7">
            <picture>
              <source media="(max-width:650px)" srcset="/images/products/florida-mobile.webp">
              <img src="/images/products/florida-desktop.webp" class="img-fluid" alt="">
            </picture>
          </div>
          <div class="tab_content" id="CielMini">
            <picture>
              <source media="(max-width:650px)" srcset="/images/products/ciel-mini-mobile.webp">
              <img src="/images/products/ciel-mini-desktop.webp" class="img-fluid" alt="">
            </picture>
          </div>
          <div class="tab_content" id="Frutsi">
            <picture>
              <source media="(max-width:650px)" srcset="/images/products/frutsi-mobile.webp">
              <img src="/images/products/frutsi-desktop.webp" class="img-fluid" alt="">
            </picture>
          </div>
      </div>
    </div>
    </div>
    `;
}

// Helper to match brand IDs to logo filenames from user provided HTML
function getBrandImage(id) {
  const map = {
    'DelValle': 'logos/del-valle.webp',
    'SantaClara': 'logos/santa-clara.webp',
    'ADES': 'logos/ades.png',
    'PowerAde': 'logos/powerade.png',
    'FuzeTea': 'logos/fuze-tea.png',
    'GlaceauVitaminwater': 'logos/vitaminwater.png',
    'Florida7': 'logos/florida.png',
    'CielMini': 'logos/ciel-mini.webp',
    'Frutsi': 'logos/frutsi.webp'
  };
  return map[id] || 'logos/del-valle.webp';
}

export const initBrands = () => {
  // Desktop Tab Interactions
  const triggers = document.querySelectorAll('.brand-trigger');
  const contents = document.querySelectorAll('.tab_content');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-target');

      // Hide all tabs
      contents.forEach(c => c.classList.remove('active'));
      document.querySelectorAll('.tab_content').forEach(el => el.style.display = 'none');

      // Show target
      const target = document.getElementById(targetId);
      if (target) {
        target.classList.add('active');
        target.style.display = 'block';
      }
    });
  });

  // Default state: Show principal
  document.querySelectorAll('.tab_content').forEach(el => el.style.display = 'none');
  const princ = document.getElementById('principal');
  if (princ) princ.style.display = 'block';

  // Initialize Slick Slider for Mobile if library loaded
  if ($.fn.slick) {
    $('.marcas-slider').not('.slick-initialized').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
}
