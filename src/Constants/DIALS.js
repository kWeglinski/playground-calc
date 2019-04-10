const actions = [
    { display: 'C', action: 'reset' },
    { display: '+/-', action: 'negate' },
    { display: '%', action: 'perCent' },
    { display: '/', action: 'divide' },
    { display: 'x', action: 'multiply' },
    { display: '-', action: 'subtract' },
    { display: '+', action: 'sum' },
    { display: '=', action: 'equals' },
];

export default {
    numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.' ],
    actions
}
