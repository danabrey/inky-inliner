const juice = require("juice");

const inline = (input) => {
    input = input || "";
    return juice(input);
};

module.exports = inline;