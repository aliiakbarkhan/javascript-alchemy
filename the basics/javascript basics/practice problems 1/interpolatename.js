// A string is stored in the variable fakeName.

// Take this fake name and use it to replace every occurrence of "John" in the message.

// // Do not change the message in other way.
const fakename = require('./fakename');

const message = `
    Hello, ${fakename}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakename}. 
    If not I will drop it off this weekend.
    Goodbye ${fakename}!
`;

module.exports = message;