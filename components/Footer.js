export const Footer = () => {
    return `
    <footer id="mastfooter" class="full">
        <!-- Contact Section -->
        <div id="footer-contact-section" class="full py-5" style="background-color: #bb131b; color: #fff;">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-5 mb-4 mb-md-0">
                        <h2 class="font-weight-bold mb-3" style="font-size: 3rem;">Contacto</h2>
                        <p class="mb-2" style="font-size: 1.2rem;">Llámanos al (55) 3088 5000</p>
                        <p class="mb-0 font-weight-bold small" style="letter-spacing: 1px;">SÍGUENOS Y ENVÍANOS TUS COMENTARIOS</p>
                        <p class="font-weight-bold small" style="letter-spacing: 1px;">A TRAVÉS DE NUESTRAS CUENTAS OFICIALES</p>
                    </div>
                    <div class="col-md-7">
                        <form onsubmit="event.preventDefault();">
                            <div class="form-row align-items-center">
                                <div class="col-md-6 mb-3">
                                    <div class="position-relative">
                                        <input type="tel" class="form-control rounded-pill py-4 pl-5" placeholder="Teléfono" style="border: none;">
                                        <i class="fas fa-phone position-absolute text-muted" style="left: 20px; top: 50%; transform: translateY(-50%);"></i>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <!-- Using a text input for the message to match the single-line look or similar -->
                                    <input type="text" class="form-control" placeholder="Escribe tu mensaje aquí..." style="background: transparent; border: none; border-bottom: 1px solid #fff; color: #fff; border-radius: 0;">
                                </div>
                            </div>
                            <div class="text-right mt-2">
                                <button type="submit" class="btn font-weight-bold px-5 rounded-pill" style="background-color: #9dda19; color: #fff; border: none; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">ENVIAR</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Related Links Section -->
        <div id="footer-relacionadas" class="container py-5">
            <h4 class="font-weight-bold mb-4" style="color: #333;">Tal vez te pueda interesar:</h4>
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
        </div>
				
			<div id="footer-top" class="text-center desktop-v" style="font-weight: bold;color: #000;">
				<i class="fas fa-phone-alt al-iconof"></i>
				Hola Coca-Cola<br>
				<a href="tel:8007044400" target="_blank" style="color: #000;">800-704-4400</a>
			</div>

			<div id="footer-bottom">
				<div class="container">
					<!-- Desktop Footer Row -->
					<div class="row desktop-v">
						<div class="col">
							<nav id="bottom-menu">
								<ul>
									<li><a href="#">Aviso de Privacidad</a></li>
									<li><a href="#">Legal</a></li>
									<li>Jugos Del Valle-Santa Clara</li>
									<li><a href="#">Políticas de Privacidad</a></li>
									<li>En JDV-SC no realizamos ningún tipo de venta de automóviles o equipos de transporte</li>
								</ul>
							</nav>
						</div>
						<div class="col-1">
							<img width="60" src="/images/logo-jugos-del-valle.svg" class="logo-footer" alt="">
						</div>
						<div class="col d-flex align-items-end">
							<div class="text-right">
								Desarrollado por ABC Digital - <a href="#" rel="nofollow"><strong>ABC Digital (by ABCW)</strong></a>
							</div>
						</div>
					</div>

                    <!-- Mobile Footer Row -->
					<div class="row mobile-v">
					    <div class="col-md-12">
				          <div class="row align-items-center">
						  <div class="col text-center" style="font-weight: bold;color: #000;">
							  <i class="fas fa-phone-alt al-iconof"></i>
							  Hola Coca-Cola<br>
			            	<a href="tel:8007044400" target="_blank" style="color: #000;">800-704-4400</a>
						  </div>
						  <div class="col text-center">
						  <img src="/images/LOGO-IMCC-.png" class="logo-imcc-f" alt="">
						  </div>
						  </div>
			            </div>
						<div class="col-md-12">
							<div id="bottom-menu-mob">
								<div>
        							<a href="#">AVISO DE PRIVACIDAD</a> 
        							<a href="#">LEGAL</a>Jugos Del Valle-Santa Clara<br>
        							<a href="#">POLÍTICAS DE PRIVACIDAD</a> 
								</div>
								<div>
						    		En JDV-SC no realizamos ningún tipo de venta de automóviles o equipos de transporte
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="text-center">
								Desarrollado por ABC Digital - <a href="#" rel="nofollow"><strong>ABC Digital (by ABCW)</strong></a>
							</div>
						</div>
					</div>

				</div>
			</div>
	</footer>
    `;
}
