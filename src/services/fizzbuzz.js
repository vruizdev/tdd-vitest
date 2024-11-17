
// Escribir una función que al pasar un número:
//     - Devuelve "Fizz" si es múltiplo por 3.
//     - Devuelve "buzz" si es múltiplo de 5.
//     - Devuelve "fizzbuzz" si es múltiplo de 3 y 5.
//     - Devuelve el número si no es múltiplo de ninguno de los anteriores.

export const fizzbuzz = (number) => {
    const multiples = { 3: 'fizz', 5: 'buzz', 7: 'woff' };
    let output = '';

    if (typeof number !== 'number') throw new Error('parameter provided must be a number');
    if (Number.isNaN(number)) throw new Error('parameter provided must be a number');
    // if (number % 3 === 0 && number % 5 === 0) return 'buzz';
    // if (number % 3 === 0) return 'fizz';
    // if (number % 5 === 0) return 'buzz';

    Object.entries(multiples).forEach(([multiplier, word]) => {
        if (number % multiplier === 0) output += word;
    });

    return (output === '') ? number : output;
};