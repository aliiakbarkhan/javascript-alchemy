// Let's create a function scream which will take in a value n and return a string with the letter "a" repeated that many times.

function scream(n) {
    let sc = "a";
    for (let index = 1; index < n; index++) {
        sc += "a";
        
    }
    return sc;
}
const out  = scream(4);
console.log(out);
module.exports = scream;