document.addEventListener('DOMContentLoaded', function () {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function () {
        chrome.tabs.executeScript(null, {file: "fill.js"});
    }, false);
}, false);