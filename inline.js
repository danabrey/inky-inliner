const juice = require("juice");

const inline = (input = "") => {
    return juice(input);
};

module.exports = inline;