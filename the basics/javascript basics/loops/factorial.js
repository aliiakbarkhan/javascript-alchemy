// Taking in some integer value n, find the factorial for that number and return it.

function factorial(n) {
    let fact  = 1;
    for (let index = n; index > 0; index--) {
                fact = fact * index;
    }
    return fact;
}
const out = factorial(5);
console.log(out);
module.exports = factorial;