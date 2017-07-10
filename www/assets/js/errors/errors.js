const verify = (el, str) => {
    if (!(el.length > 0)) {
        throw Error('Element ' + str + ' not found');
    }
}

const auth = {
    verify: verify
}

module.exports = auth