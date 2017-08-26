let serviceInput = require('./services/inputService.js'),
    serviceSelect = require('./services/selectService.js'),
    auth = require('./errors/errors.js');

var form = document.forms;

let fill = () => {
  if (form.length > 0) {
    for (x in form) {
        try {
            auth.verify(form, 'Form');
            try {
                var inputs = form[x].getElementsByTagName('input');
                var selects = form[x].getElementsByTagName('select');
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
  } else {
    try {
        var inputs = form[x].getElementsByTagName('input');
        var selects = form[x].getElementsByTagName('select');
        auth.verify(inputs, 'INPUT');
        serviceInput.insert(inputs);
    } catch (err) {
        alert(err.name + ": " + err.message);
    }
  }
}
fill()
