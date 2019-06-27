const removeEmp =  (arr) =>{
    return arr.filter(el => {
        return el != '';
    });
}

module.exports = { removeEmp };