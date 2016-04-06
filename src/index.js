var uniqueRandomArray = require('unique-random-array');
var employees = require('./employees.json');
var getRandomEmployee = uniqueRandomArray(employees);

module.exports = {
    all : employees,
    random : getRandom
};

function getRandom(count){
    if(count === undefined){
        return getRandomEmployee();
    } else {
        var randomItems = [];
        for (var i=0; i<count; i++){
            randomItems.push(getRandomEmployee());
        }
        return randomItems;
    }
}