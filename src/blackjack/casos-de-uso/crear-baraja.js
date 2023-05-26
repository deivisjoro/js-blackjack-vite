import { shuffle } from 'underscore';
//exportacion individual
//export const crearBaraja = (tiposDeCartas, tiposEspeciales)=>{  
/**
 * Esta funcion crea una nueva baraja segun los tipos de cartas enviadas, trabaja con los numeros del 2 al 10 y las especiales que se le envien, como letras
 * @param {Array<String>} tiposDeCartas cada elemento debe ser un solo caracter, ejemplo ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales cada elemento debe ser un solo caracter ejemplo ['J', 'Q', 'K', 'A']
 * @returns {Array<String>} retorna un array con las cartas barajadas, ejemplo ['2D', 'JS', 'KC', '5D', '2H', ........]
 */    
export const crearBaraja = (tiposDeCartas, tiposEspeciales)=>{
    
    if(!tiposDeCartas || tiposDeCartas.length === 0) 
        throw new Error('tiposDeCartas es obligatorio como un array de string');

    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales es obligatorio como un array de string');

    const cartas = [];  
    
    for (let tipo of tiposDeCartas) {        
        for (let i = 2; i <= 10; i++) {
            cartas.push(`${i+''+tipo}`);      
        }
        for (let especial of tiposEspeciales) {
            cartas.push(`${especial+''+tipo}`);    
        } 
    } 
    return shuffle(cartas);
};
//exporacion por defecto
//export default crearBaraja;
