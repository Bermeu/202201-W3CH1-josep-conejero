import { personajes } from "./personajes.js";
import { TarjetaRey } from "./TarjetaRey.js";

//const tarj = new Tarjeta(""nombrePersonaje"", familiaPersonaje, edadPersonaje);

const tarj = new TarjetaRey(
  personajes[0].nombre,
  personajes[0].familia,
  personajes[0].edad,
  personajes[0].anyosReinado
);
