import { Usuario } from "../Usuario/Usuario.model";

export class Reserva {

  id: string = "";
  tituloReserva: string = "";
  inicioReserva: string = "";
  fimReserva: string = "";
  usuario = new Usuario();

}
