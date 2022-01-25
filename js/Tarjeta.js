export class Tarjeta {
  elemento;
  nombre;
  familia;
  edad;
  vivo = true;
  serie = "Juego de Tronos";

  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje) {
    this.nombre = nombrePersonaje;
    this.familia = familiaPerso;
    this.edad = edadPersonaje;
    this.elemento = document.createElement("div");
    this.elemento.innerHTML = `
     <div class="app container">
      <ul class="characters-list row list-unstyled">
        <li class="character col">
          <div class="card character__card">
            <img
              src="img/no-one.jpg"
              alt="${this.nombre} de la familia ${this.familia}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${
                this.nombre
              } de la familia ${this.familia}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${this.edad} años</li>
                  <li>
                    Estado:
                    ${actualizarIconoEstado(estado)}
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: X</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
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
        alt="${this.nombre} de la familia ${this.familia}"
      />
    </div>
    
    
    `;
    document.querySelector("body").appendChild(this.elemento);

    /* crearAppContainer();
    crearComunications();
    crearUlCharactersList(); */
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

  crearAppContainer() {
    this.elemento = document.createElement("div");
    this.elemento.className = "app container";
    document.querySelector("body").appendChild(this.elemento);
  }

  crearUlCharactersList() {
    this.elemento = document.createElement("ul");
    this.elemento.className = "characters-list row list-unstyled";
    document.querySelector("app container").appendChild(this.elemento);
  }

  crearComunications() {
    this.elemento = document.createElement("div");
    this.elemento.className = "comunications";
    document.querySelector("body").appendChild(this.elemento);
  }
}

/* 
    <div class="app container">
      <ul class="characters-list row list-unstyled">
        <li class="character col">
          <div class="card character__card">
            <img
              src="img/no-one.jpg"
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">Nombre y familia</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: X años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: X</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
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
        alt="Nombre y familia del que habla"
      />
    </div>
*/
