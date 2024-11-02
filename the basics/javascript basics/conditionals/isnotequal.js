// If a is not equal to b return true.
function isNotEqual(a, b) {
    if (a !== b) {
        return true;
    }
    else{
        return false;
    }
}
const put = isNotEqual(4,5);
console.log(put);

module.exports = isNotEqual;