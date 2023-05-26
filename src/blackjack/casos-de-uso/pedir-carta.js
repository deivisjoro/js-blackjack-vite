/**
 * Esta funcion obtiene una carta de la baraja 
 * @param {Array<String>} baraja array con las cartas, ejemplo ['2D', 'JS', 'KC', '5D', '2H', ........]
 * @returns {String} retorna un string que representa la carta valor + tipo, ejemplo '2D'
 */ 
export const pedirCarta = (baraja)=>{
    if(!baraja || baraja.length === 0) 
        throw 'No hay cartas en la baraja';
        
    return baraja.pop();
};