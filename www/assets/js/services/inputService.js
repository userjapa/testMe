let rand = require('./../random/random.js');

const insert = (el) => {
    for (e of el) {
        e.value = (rand.rand(e));
    }
}

let serviceInput = {
    insert : insert
}
module.exports = serviceInput
