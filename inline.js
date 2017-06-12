const juice = require("juice");

const inline = (input) => {
    let input = input || "";
    return juice(input);
};

module.exports = inline;