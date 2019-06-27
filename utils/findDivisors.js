const findDivisors = (num) =>{
    var a = [];
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            if (i !== 12) {
                a.push(i)
            }
        }
    }

    return a;
}

module.exports = {findDivisors}