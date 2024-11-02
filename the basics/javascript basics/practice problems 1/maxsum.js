// The function maxSum takes a number argument num.

// Your goal is find the sum all of numbers, starting from 1, up to and including num.

// For example, if num is 5, your sum would be 1 + 2 + 3 + 4 + 5 or 15.

function maxSum(num) {
    let n = 0;
    for (let index = 0; index <= num; index++) {
        n = n + index;
    }
    return n;
}
console.log(maxSum(5));
module.exports = maxSum;