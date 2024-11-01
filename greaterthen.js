// Given two arguments, first and last, determine which one is greater.
// If first is greater than last, return first!
// If last is greater than first, return last!
function greater(first, last) {
    if (first>last) {
        return first;
    }
    else if (last>first) {
        return last;
    }
}
const out  = greater(4,5);
console.log(out);

module.exports = greater;