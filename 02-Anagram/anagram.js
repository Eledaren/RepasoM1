/**
 * Dado dos strings, escribe una function para determinar si el 
 * segundo string es un anagrama de el primero.
 * Deberia retornar true si cada letra en el primer string se encuentra 
 * en el segundo string.
 * Un anagrama consiste en crear una palabra a partir de la 
 * reordenación de las letras de otra palabra. 
 * Como cinema y iceman.

 * @param {string} first - esto es un string.
 * @param {string} second - esto es un string.
 * @returns {boolean} - deberia retornar true o false.
 */

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    const firstChar = first.split('').sort().join('');
    const secondChar = second.split('').sort().join('');

    return firstChar === secondChar;
}

validAnagram('cinema', 'iceman');
validAnagram('listen', 'silent');
validAnagram('a', 'b');