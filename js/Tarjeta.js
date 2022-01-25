export class Tarjeta {
  elemento;
  elementoButtonHabla;
  elementoButtonMuere;
  nombre;
  familia;
  edad;

  vivo = true;
  serie = "Juego de Tronos";

  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje) {
    this.nombre = nombrePersonaje;
    this.familia = familiaPersonaje;
    this.edad = edadPersonaje;

    this.generarHTMLGeneral();
    this.generarHTMLButtons();
  }

  generarHTMLGeneral() {
    this.elemento = document.createElement("div");
    this.elemento.innerHTML = `
          <div class="app container">
            <ul class="characters-list row list-unstyled">
              <li class="character col">
                <div class="card character__card">
                  <img
                    src="img/${this.nombre.toLowerCase()}.jpg"
                    alt="${this.nombre} ${this.familia}"
                    class="character__picture card-img-top"
                  />
                  <div class="card-body">
                    <h2 class="character__name card-title h4">${this.nombre} ${
      this.familia
    }
            </h2>
                    <div class="character__info">
                      <ul class="list-unstyled">
                        <li>Edad: ${this.edad} años</li>
                        <li>
                          Estado:
                          ${this.actualizarIconoEstado(this.vivo)}
                        </li>
                      </ul>
                    </div>
                    <div class="character__overlay">
                      <ul class="list-unstyled">
                      </ul>
                      <div class="character__actions">
                      </div>
                    </div>
                  </div>
                  <i class="emoji"></i>
                </div>
              </li>
            </ul>
          </div>
          <div class="comunications">
            <p class="comunications__text display-1">Una frase que dice alguien</p>
            <img
              class="comunications__picture"
              src="img/no-one.jpg"
              alt="${this.nombre} ${this.familia}"
            />
          </div>`;
    document.querySelector("body").appendChild(this.elemento);
  }

  generarHTMLButtons() {
    this.elementoButtonHabla = document.createElement("button");
    this.elementoButtonHabla.textContent = "habla";
    this.elementoButtonHabla.className = "character__action btn";
    document
      .querySelector("character__actions")
      .appendChild(this.elementoButtonHabla);

    this.elementoButtonMuere = document.createElement("button");
    this.elementoButtonMuere.textContent = "muere";
    this.elementoButtonHabla.className = "character__action btn";
    document
      .querySelector("character__actions")
      .appendChild(this.elementoButtonMuere);
  }

  comunicar() {
    return `${this.nombre} dice: `;
  }

  muere() {
    this.vivo = false;
    this.actualizarIconoEstado(this.vivo);
  }

  actualizarIconoEstado(estado) {
    return estado
      ? '<i class="fas fa-thumbs-up"></i>'
      : '<i class="fas fa-thumbs-downp"></i>';
  }
}
