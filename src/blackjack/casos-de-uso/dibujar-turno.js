/**
 * Dibuja o inserta la imagen de la carta en el HTML
 * @param {Number} jugador el turno del jugador, Ejemplo 1
 * @param {String} carta la carta a dibujar, ejemplo '2D'
 * @param {HTMLDivElement} $divCartasJugadores el div donde se dibujara la carta
 */ 
export const dibujarTurno = (jugador, carta, $divCartasJugadores)=>{        
    const $imgCarta = document.createElement('img');
    $imgCarta.src = `assets/cartas/${carta}.png`; 
    $imgCarta.classList.add('carta');
    $imgCarta.alt = 'imagen de carta';
    $divCartasJugadores[jugador].appendChild($imgCarta);              
};