function isFloat(n){
    if (!isNaN(n)) {
        if (parseInt(n) != parseFloat(n)) {
            return true;
        }
    }
    return false;
}

console.log(isFloat('teste'));
console.log(isFloat(10));
console.log(isFloat(12.3));