let serviceInput = require('./services/inputService.js'),
    serviceSelect = require('./services/selectService.js'),
    auth = require('./errors/errors.js');

var form = document.forms;

const fill = () => {
    try {
        auth.verify(form, 'Form');
        try {
            var inputs = form[0].getElementsByTagName('input');
            var selects = form[0].getElementsByTagName('select');
            auth.verify(inputs, 'INPUT');
            serviceInput.insert(inputs);
        } catch (err) {
            alert(err.name + ": " + err.message);
        }
        if (selects.length > 0) {
            try {
                serviceSelect.checkSelect(selects);
            } catch (err) {
                alert(err.name + ": " + err.message);
            }
            console.log(inputs);
        }
    } catch (err) {
        alert(err.name + ": " + err.message);
    }
}   
fill();