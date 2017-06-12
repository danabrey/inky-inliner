const Inky = require('inky').Inky;
const cheerio = require('cheerio');

const transform = (input, options) => {
    let input = input || "";
    let options = options || {};
    const i = new Inky(options);
    const html = cheerio.load(input);
    return i.releaseTheKraken(html);
};

module.exports = transform;
