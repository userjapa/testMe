let rand = require('./../random/random.js');

const checkSelect = (el) => {
    for (e of el) {
        e.selectedIndex = rand.randNum(e.options.length,1);
    }
}

let serviceSelect = {
    checkSelect : checkSelect
}

module.exports = serviceSelect
