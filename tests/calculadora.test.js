const { diff } = require('../src/calculadora');
const { div } = require('../src/calculadora');
const { sum } = require('../src/calculadora');
const calculadora = require('./../src/calculadora')

test('a soma de 1 + 2 deve ser igual a 3', () => {

    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2)).not.toBe(5);

})

test('a diferenca de 10 + 2 deve ser igual a 8', () => {

    expect(diff(10, 2)).toBe(8);

})

test('a divisao de 10 + 2 deve ser igual a 8', () => {

    expect(div(10, 2)).toBe(5);

})