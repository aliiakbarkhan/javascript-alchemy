// Using whichever loop you'd like, complete the top double function to find the largest double for the value that is below the top.
function topDouble(value, top) {
    for (let index = 0; value < top; index++) {
        if (value*2 < top) {
            value = value * 2;       
        }
        else{

            return value;
        }
} 
}
const out  = topDouble(2,100);
console.log(out);
module.exports = topDouble;