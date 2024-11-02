// If a is equal to b return true.
function isEqual(a, b) {
    if (a === b) {
        return true;
    }
    else{
        return false;
    }
}
const out  = isEqual(5,5);
console.log(out);

module.exports = isEqual;