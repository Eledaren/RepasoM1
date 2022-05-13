/**
 * Escribe una funcion que reciba un array y un numero promedio. 
 * Determina si dentro del array dos numeros dan el promedio pasado.
 * Deberia retornar true si dos numeros sumados dentro del array 
 * es igual al num pasado.

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

function averagePair(arr, num) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let average = (arr[i] + arr[j]) / 2;
        if (average === num) {
            return true;
        } else if (average < num) {
            i++;
        } else {
            j--;
        }
    }
}

averagePair([1, 2, 3], 2.5);
averagePair([], 1);
