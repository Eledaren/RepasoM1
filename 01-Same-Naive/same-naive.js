/**
 * Escribe una function llamada same que acepte dos arrays.
 * La funcion deberia retornar true si cada valor del primer array es 
 * igual al cuadrado de valor del segundo array. 
 * La frecuencia debe ser la misma.

 * @param {Array} arr1 - esto es un array.
 * @param {Array} arr1 - esto es un array.
 * @returns {boolean} - deberia retornar true o false.
 */

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i] ** 2) {
            return false;
        }
    }
    return true;
}
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
console.log(same([16, 1, 81, 16], [4, 1, 9, 4]));
