import { Tarjeta } from "./Tarjeta.js";

export class TarjetaRey extends Tarjeta {
  anyosReinado;
  elemento;

  constructor(nombreRey, familiaRey, edadRey, anyosReinadoRey, rutaFoto) {
    super(nombreRey, familiaRey, edadRey, rutaFoto);
    this.anyosReinado = anyosReinadoRey;
    this.generarHTML();
  }

  generarHTML() {
    this.elemento = document.createElement("li");
    this.elemento.innerHTML = `Años de reinado: ${anyosReinadoRey}`;
    document
      .querySelector(".character__overlay .list-unstyled")
      .appendChild(this.elemento);
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}
