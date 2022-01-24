class Luchador extends Personaje {
  arma;
  destreza;

  constructor(
    nombreLuchador,
    familiaLuchador,
    edadLuchador,
    armaLuchador,
    valorDestreza
  ) {
    super(nombreLuchador, familiaLuchador, edadLuchador);
    this.arma = armaLuchador;
    this.destreza = this.filtraDestreza(valorDestreza);
  }

  filtraDestreza(valorDestreza) {
    if (valorDestreza < 0) {
      return 0;
    } else if (valorDestreza > 10) {
      return 10;
    } else {
      return valorDestreza;
    }
  }

  comunicar() {
    return `${super.comunicar()}Primero pego y luego pregunto`;
  }
}
