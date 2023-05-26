import { pedirCarta } from './pedir-carta';
import { acumularPuntos } from './acumular-puntos';
import { dibujarTurno } from './dibujar-turno';
import { determinarGanador } from './determinar-ganador';

/**
 * Esta funcion permite que la computadora realice todas sus jugadas
 * @param {Array<String>} baraja array con las cartas, ejemplo ['2D', 'JS', 'KC', '5D', '2H', ........]
 */ 
export const juegaComputadora = ( baraja = [], puntosJugadores, $spanPuntos, turnoActual, $divCartasJugadores )=>{

    do{
        const carta = pedirCarta(baraja);
        acumularPuntos(turnoActual, carta, puntosJugadores, $spanPuntos); 
        dibujarTurno(turnoActual, carta, $divCartasJugadores);
        
    }while((puntosJugadores[turnoActual]<puntosJugadores[turnoActual-1]) && (puntosJugadores[turnoActual-1]<=21));

        
    determinarGanador(puntosJugadores, turnoActual);
};