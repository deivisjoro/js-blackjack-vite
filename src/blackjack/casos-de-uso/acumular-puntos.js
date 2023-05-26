import { valorCarta } from './valor-carta';

/**
 * Dibuja o inserta la imagen de la carta en el HTML
 * @param {Number} turno el turno del jugador, Ejemplo 1
 * @param {String} carta la carta obtenida por el jugador, ejemplo '2D'
 * @param {Array<Number>} puntosJugadores array que almacena los puntos de los jugadores, ejemplo [11, 21] puntos jugador 1 y puntos computadora
 * @param {HTMLSpanElement} $spanPuntos el span que muestra los puntos del jugador
 */
export const acumularPuntos = (turno, carta, puntosJugadores, $spanPuntos)=>{
    puntosJugadores[turno] += valorCarta(carta);
    $spanPuntos[turno].textContent = puntosJugadores[turno];
};