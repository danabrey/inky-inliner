const juice = require("juice");

const inline = (input) => {
    const input  = input || "";
    return juice(input);
};

module.exports = inline;