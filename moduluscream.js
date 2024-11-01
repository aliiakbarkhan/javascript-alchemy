// Let's create a function scream which will take in a value n and return a string with the letter "a" repeated that many times.

function scream(n) {
    let sc = "a";
    for (let index = 0; index < n-1; index++) {
        if (index%2 === 0) {    
            sc += "A";
        }
        else{
            sc += "a";
        }

    }
    return sc;
}
const out = scream(4);
console.log(out);
module.exports = scream;