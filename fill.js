/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const randStr = (tm) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < tm; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const randNum = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const dateGenerator = () => {
    var aux = new Date(randNum(2017,1922), randNum(12,1),randNum(30,1)) 
    return new Date(new Date().getTime() + Math.random() * (aux.getTime() - new Date().getTime()));
}

const fixTime = (time) => {
    var hh, mm;
    if (time.getHours() < 10)
        hh = "0"+time.getHours()
    else
        hh = time.getHours()
    if(time.getMinutes() < 10)
        mm = "0"+time.getMinutes()
    else
        mm = time.getMinutes()
    
    return hh+":"+mm
}
 
const randDate = (qnt) => {
    var temp = dateGenerator();
    console.log(temp.getHours()+" "+temp.getMinutes()+" "+temp.getSeconds());
    switch(qnt) {
        case 0: return temp.toISOString().slice(0,10); break;
        case 1: return fixTime(temp); break;
    }
}

const rand = (el) => {
    switch(el.type) {
        case 'number': return randNum(100000,0); break;
        case 'text': return randStr(10); break;
        case 'date': return randDate(0); break;
        case 'time': return randDate(1); break;
        case 'email': return randStr(8)+"@testme.com"; break;
        case 'password': return "*********"; break;
        case 'tel': return randNum(44444444,11111111); break;
        case 'url': return "www.testme.com"; break;
        default: return '';
    }
}

let random = {
    rand : rand,
    randNum : randNum
}

module.exports = random

/***/ }),
/* 1 */
/***/ (function(module, exports) {

const verify = (el, str) => {
    if (!(el.length > 0)) {
        throw Error('Element ' + str + ' not found');
    }
}

const auth = {
    verify: verify
}

module.exports = auth

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

let rand = __webpack_require__(0);

const insert = (el) => {
    for (e of el) {
        e.value = (rand.rand(e));
    }
}

let serviceInput = {
    insert : insert
}
module.exports = serviceInput


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

let rand = __webpack_require__(0);

const checkSelect = (el) => {
    for (e of el) {
        e.selectedIndex = rand.randNum(e.options.length,1);
    }
}

let serviceSelect = {
    checkSelect : checkSelect
}

module.exports = serviceSelect


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

let serviceInput = __webpack_require__(2),
    serviceSelect = __webpack_require__(3),
    auth = __webpack_require__(1);

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

/***/ })
/******/ ]);