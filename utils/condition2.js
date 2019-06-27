
const { removeEmp } = require('./removeEmp');
const { sumArray } = require('./sumArray');
const { emptyArray } = require('./emptyArray')

var sumsubset = []

function cloneAndAdd(arr, subset, i) {
    if (i == arr.length) {
        const clean = removeEmp(subset)
        if (clean.length > 0) {
            const sum = sumArray(clean)
            sumsubset.push(sum)
        }
        return subset;
    }

    subset[i] = ''
    cloneAndAdd(arr, subset, i + 1);

    subset[i] = arr[i];
    cloneAndAdd(arr, subset, i + 1);
}


const condition2 = (arr, num) => {
    cloneAndAdd(arr, emptyArray(arr.length), 0)
    if (!sumsubset.includes(num)) {
        return true;
    }
    return false
}

module.exports = {condition2}