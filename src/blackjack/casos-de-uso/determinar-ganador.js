/**
 * Determina cual de los jugadores ha ganado la partida
 * @param {Array<Number>} puntosJugadores array que almacena los puntos de los jugadores, ejemplo [11, 21] puntos jugador 1 y puntos computadora
 * @param {Number} turnoActual turno del actual jugador, el ultimo, ejemplo 1
 */
export const determinarGanador = (puntosJugadores, turnoActual)=>{
    if(puntosJugadores[turnoActual]===puntosJugadores[turnoActual-1]){
        alert('Ninguno ha ganado');            
    }
    else if(puntosJugadores[turnoActual]>21){
        alert(`El jugador ha ganado con ${puntosJugadores[turnoActual-1]} puntos`);    
    }
    else{
        alert(`La computadora ha ganado con ${puntosJugadores[turnoActual]} puntos`);
    }
};