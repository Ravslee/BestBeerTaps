const {sumArray} = require('./sumArray');

const condition1 = (arr,n)=>{

    return sumArray(arr) > n;
}

module.exports = {condition1}