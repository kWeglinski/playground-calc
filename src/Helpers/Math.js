/**
 * Counts how long behind comma the number is
 * @param {string|number} number - value to check for decimals
 * @returns {number} number of decimals
 */
export const countDecimals = (number) => {
    const split = number.toString().split('');
    const integer = split.lastIndexOf('.');
    // if comma is not found return 0
    // otherwise return amount of characters behind comma
    return (integer < 0 ) ? 0 : split.length - integer - 1;
}

/**
 * Finds common multiplication that turns both numbers into integers
 * Reason is IEEE standard and how processors define floating point numbers
 * i.e. 0.1+0.2 !== 0.3
 * @param {string|number} a - first value
 * @param {string|number} b - second value
 * @returns {Object} integer value of A, B and used multiplicator to achieve integers
 */
export const commonMulti = (a, b) => {
    const decimalsA = countDecimals(a);
    const decimalsB = countDecimals(b);
    // take number with more decimals as a base
    const bigestMultiplier = decimalsA > decimalsB ? decimalsA : decimalsB;
    const multi = parseInt(`1${Array.apply(null, { length: bigestMultiplier }).map(() => 0).join('')}`);
    return {
        multiA: parseFloat(a) * multi,
        multiB: parseFloat(b) * multi,
        multi,
    };
}

/**
 * Set of available mathematical actions
 */
export const actions = {
    reset: a => a,
    negate: (a, b) => -a,
    perCent: (a, b) => parseFloat(b) / 100,
    divide: (a, b) => {
        const divided = parseFloat(a) / parseFloat(b);
        // check if user divided by 0 if so return nice notification
        return !isFinite(divided)  ? 'Not a Number' : divided;
    },
    multiply: (a, b) => parseFloat(a) * parseFloat(b),
    subtract: (a, b) => {
        const { multiA, multiB, multi } = commonMulti(a, b);
        return (multiA - multiB) / multi;
    },
    sum: (a, b) => {
        const { multiA, multiB, multi } = commonMulti(a, b);
        return (multiA + multiB) / multi;
    },
    equals: (a, b) => b,
};

