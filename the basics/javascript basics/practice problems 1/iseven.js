// Given an integer value num, determine if it is even.
// If it is even, return true. Return false otherwise.
function isEven(num) {
   if (num%2===0) {
    return true;
   } 
   else{
    return false;
   }
}
console.log(isEven(5));
console.log(isEven(6));
module.exports = isEven;