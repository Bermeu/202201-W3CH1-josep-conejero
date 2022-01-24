class Escudero extends Personaje {
  sirveA;
  pelotismo;

  constructor(
    nombreEscudero,
    familiaEscudero,
    edadEscudero,
    valorPelotismo,
    personajeSirve
  ) {
    super(nombreEscudero, familiaEscudero, edadEscudero);
    this.pelotismo = this.filtrarPelotismo(valorPelotismo);
    if (personajeSirve instanceof Luchador) {
      this.sirveA = personajeSirve;
    }
  }

  filtrarPelotismo(gradoPelotismo) {
    if (gradoPelotismo < 0) {
      return 0;
    } else if (gradoPelotismo > 10) {
      return 10;
    } else {
      return gradoPelotismo;
    }
  }

  comunicar() {
    return `${super.comunicar()}Soy un loser`;
  }
}
