var uniqueRandomArray = require('unique-random-array');
var employeeNames = require('./employees.json');

module.exports = {
    all : employeeNames,
    random : uniqueRandomArray(employeeNames)
};