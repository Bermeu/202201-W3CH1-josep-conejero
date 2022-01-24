class Tarjeta {
  elemento;

  constructor() {
    crearAppContainer();
    crearComunications();
    crearUlCharactersList();
  }

  crearAppContainer() {
    this.elemento = document.createElement("div");
    this.elemento.className = "app container";
    document.querySelector("body").append(this.elemento);
  }

  crearUlCharactersList() {
    this.elemento = document.createElement("ul");
    this.elemento.className = "characters-list row list-unstyled";
    document.querySelector("app container").append(this.elemento);
  }

  crearComunications() {
    this.elemento = document.createElement("div");
    this.elemento.className = "comunications";
    document.querySelector("body").append(this.elemento);
  }
}
