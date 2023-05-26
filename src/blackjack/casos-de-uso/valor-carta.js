/**
 * Esta funcion obtiene el valor de una carta, dejando de lado la figura y obteniendo solo los numeros o el tipo especial, ejemplo: entrada '6H' | salida 6
 * @param {String} carta string con el texto de la carta, ejemplo '2D'
 * @returns {Number} retorna el valor de una carta como un numero, ejemplo 5
 */
export const valorCarta = (carta)=>{
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ? ((valor==='A') ? 11 : 10) : Number(valor);
};