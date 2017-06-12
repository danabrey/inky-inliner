const Inky = require('inky').Inky;
const cheerio = require('cheerio');

const transform = (input = "", options = {}) => {
    const i = new Inky(options);
    const html = cheerio.load(input);
    return i.releaseTheKraken(html);
};

module.exports = transform;
