/**
 * Escribe una function llamada sumZero que acepte un array de numeros 
 * enteros ordenado. La function deberia encontrar el primer para de 
 * numeros que sumados den 0. Retorna un array que incluya los dos 
 * numeros encontrados o undefined si el par no existe..

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

function sumZero(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j--) {
            if (arr[i] + arr[j] === 0) {
                arr2.push(arr[i]);
                arr2.push(arr[j]);
                return arr2;
            } else {
                return undefined;
            }
        }
    }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4]);
sumZero([-3, -2, -1, 0, 1, 2]);
