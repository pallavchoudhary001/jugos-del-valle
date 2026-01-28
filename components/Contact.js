export const Contact = () => {
  return `
    <!-- Talento Banner (Part of flow) -->
    <div id="talento" class="full">
      <picture>
        <source media="(max-width:650px)" srcset="/images/Home-Contacto-Talento-2-mobile.jpg">
        <img src="/images/talento-banner.jpg" class="img-full" alt="">
      </picture>
    
      <div class="texto-talento">
        <p>Nuestro principal</p>
        <p>compromiso es</p>
        <p><strong>el talento</strong></p>
        <p>de nuestra gente</p>
        <p><a href="#/talento">conoce más</a></p>
      </div>
    </div>

    <!-- Contact Form -->
    <div id="contact" class="full">
      <div id="bg-map"></div>
    
      <div class="container">
        <div class="contact-area">
          <div class="row d-flex align-items-center">
            <div class="col-md-5">
              <div class="contact-info">
                <h2>Contacto</h2>
                <div class="contact-data">
                  <p class="p1">Llámanos al (55) 3088 5000</p>
                  <div class="desktop-v"><p class="p1"><strong>Síguenos y envíanos tus comentarios</strong></p>
                  <p class="p1"><strong>a través de nuestras cuentas oficiales</strong></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <form class="contact-form form-hom-footer">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text"><i class="fas fa-user"></i></div>
                    </div>
                    <input class="form-control" type="text" placeholder="Nombre" required>
                  </div>
    
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text"><i class="fas fa-envelope"></i></div>
                    </div>
                     <input class="form-control" type="email" placeholder="E-mail" required>
                  </div>
    
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text"><i class="fas fa-phone"></i></div>
                    </div>
                    <input class="form-control" type="tel" placeholder="Teléfono">
                  </div>
    
                  <div class="input-message mb-4">..
                  
                   <textarea class="form-control" rows="3" placeholder="Escribe tu mensaje aquí..."></textarea>
                  </div>
    
                  <div class="input-send text-center">
                    <input class="btn btn-dark" type="submit" value="Enviar" />
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
}

export const initContactForm = () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Mensaje enviado (Simulado)');
      form.reset();
    });
  }
}
