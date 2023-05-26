//importacion por defecto
//import crearBaraja from './casos-de-uso/crear-baraja';

//importacion individual
//import { crearBaraja } from './casos-de-uso/crear-baraja';
//podemos crear alias a exportaciones individuales con el as
//import { crearBaraja as crearNuevaBaraja} from './casos-de-uso/crear-baraja';
//por defecto e individuales
//import crearBaraja, { otroElementoIndividual} from './casos-de-uso/crear-baraja';

//para las importaciones utilizaremos un archivo de barril, se debe hacer con exportaciones individuales, por defecto(la exportacion en los archivos individuales funciono, pero cuando se trata de exporta en el archivo de barril no funciona) no me funcionaron
import {crearBaraja, pedirCarta, juegaComputadora, acumularPuntos, dibujarTurno} from './casos-de-uso';

const juego = (()=>{
  'use strict'

  let baraja       = [];
  const tipos      = ['C', 'D', 'H', 'S'],
        especiales = ['J', 'Q', 'K', 'A'];

  let puntosJugadores = [],
      turnoActual = 0;

  const $btnPedir         = document.querySelector('#btnPedir'),
        $btnDetener       = document.querySelector('#btnDetener'),
        $btnNuevo         = document.querySelector('#btnNuevo'),
        $spanPuntos       = document.querySelectorAll('.tablero small span'),
        $divCartasJugadores = document.querySelectorAll('[id^="cartas-jugador-"]');

  const inicializarJuego = (numJugadores = 2)=>{
      baraja = crearBaraja(tipos, especiales);
      puntosJugadores = [];
      turnoActual = 0;
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
          $spanPuntos[i].textContent = 0;
          $divCartasJugadores[i].innerHTML = '';
      }

      $btnPedir.disabled = false;
      $btnDetener.disabled = true; 
  };

  //Eventos
  $btnDetener.disabled = true;
  $btnPedir.addEventListener('click', (e)=>{
      if(btnDetener.disabled){
          btnDetener.disabled = false;
      }

      const carta = pedirCarta(baraja);
      acumularPuntos(turnoActual, carta, puntosJugadores, $spanPuntos); 
      dibujarTurno(turnoActual, carta, $divCartasJugadores);

      if(puntosJugadores[turnoActual]>=21){
          $btnPedir.disabled = true;
          $btnDetener.disabled = true; 
          turnoActual++;  
          juegaComputadora(baraja, puntosJugadores, $spanPuntos, turnoActual, $divCartasJugadores);
      }

  });

  $btnDetener.addEventListener('click', (e)=>{
      $btnPedir.disabled = true;
      $btnDetener.disabled = true; 
      turnoActual++;  
      juegaComputadora(baraja, puntosJugadores, $spanPuntos, turnoActual, $divCartasJugadores);
  });

  $btnNuevo.addEventListener('click', (e)=>{ 
      inicializarJuego();   
  });

  inicializarJuego();

  return {
      inicializarJuego
  }
})();

