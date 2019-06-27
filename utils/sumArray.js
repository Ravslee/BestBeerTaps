const sumArray =  (arr) =>{
    return arr.reduce((total, num) => {
        return total + num;
    })
}

module.exports ={sumArray};