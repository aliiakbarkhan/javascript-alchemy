// The function checkNumber takes a single argument: a number num
// The function should return the string positive if the number is positive, negative if the number is negative, and zero if the number is zero.
function checkNumber(num) {
    if (num < 0) {
        return "negative";
    }
    else if (num === 0) {
        return "zero";
    }
    else{
        return "postive";
    }
}
console.log( checkNumber( -3 ) ); // negative
console.log( checkNumber( 0 ) ); // zero
console.log( checkNumber( 2 ) ) //positive
module.exports = checkNumber;