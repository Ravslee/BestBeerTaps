const { findDivisors } = require('./utils/findDivisors')
const { condition1 } = require('./utils/condition1')
const { condition2 } = require('./utils/condition2')

function findtap(n) {
    let bestTaps = []

    for (var i = 1; i <= n; i++) {

        const divs = findDivisors(i)

        const c1 = condition1(divs, i);
        const c2 = condition2(divs, i);
      
        if (c1 & c2) {
            bestTaps.push(i);
        }
    }
    return bestTaps;
}

const bestBeerTaps = findtap(1000);

console.log(bestBeerTaps);

// const divs = findDivisors(10000);

// console.log(divs);




