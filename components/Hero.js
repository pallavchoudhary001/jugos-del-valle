import { HERO_SLIDES } from '../constants.js';

export const Hero = () => {
  const mainSlide = HERO_SLIDES[0];
  return `
    <div id="hero" class="hero-static">
        <div class="hero-slide">
          <picture>
            <source media="(max-width:767px)" srcset="${mainSlide.mobile}">
            <img src="${mainSlide.desktop}" class="img-full" alt="">
          </picture>
        </div>
    </div>
    
    <div id="front-page-content" class="full">
        <div class="container">
          <div class="row overflow">
            <div id="secondary-hero" class="full">
              <div class="row d-flex align-items-center">
                <div class="col-md-7 d-flex justify-content-center align-items-center">
                  <div class="text">
                    <p><strong>Jugos Del Valle -Santa Clara</strong></p>
                    <p><strong>es la compañía de bebidas</strong></p>
                    <p>no carbonatadas de la Industria</p>
                    <p>Mexicana de Coca-Cola</p>
                    <p><a href="#/nosotros/historia">Conoce más de nuestra historia</a></p>
                  </div>
                </div>
              
                <div class="col-md-5">
                  <div class="image">
                    <picture>
                      <source media="(max-width:650px)" srcset="/images/camioneta.png">
                    <img src="/images/foto-staclara.jpg" class="img-full" alt="">
                    </picture>
                  </div>
                </div>
              </div>
            </div>        
          </div>
        </div>
    </div>
    `;
}

export const initHero = () => {
  // GSAP Parallax Animation
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect on the Hero image
    gsap.to('#hero img', {
      y: '20%', // Move hero image slightly slower
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Suble fade/scale effect on the white card as it enters
    gsap.from('#secondary-hero', {
      opacity: 0.8,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#secondary-hero',
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
  }
}
