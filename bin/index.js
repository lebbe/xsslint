#!/usr/bin/env node
var XSSLint = require('../main.js');

var files = process.argv.slice(2);

var returnValue = 0;
files.forEach(function (file) {
    var warnings = XSSLint.run(file);
    warnings.forEach(function (warning) {
        console.log(
            file +
                ':' +
                warning.line +
                ': possibly XSS-able `' +
                warning.method +
                '` call.'
        );
        returnValue++;
    });
});

// Enable `echo $?` to check number of errors
process.exitCode = returnValue;
