// Take the argument x and use Math.floor to turn it into an integer without the values after the decimal place.
function getFloor(x) {
    return Math.floor(x);
}
const out = getFloor(3.98999);
console.log(out);
module.exports = getFloor;