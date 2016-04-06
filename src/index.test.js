/**
 * Created by vijitha on 22/03/2016.
 */
var expect = require('chai').expect;
var employees = require('./index');


describe('Employees', function () {
    describe('test-All', function () {
        it('should be an array of employee', function () {
            expect(employees.all).to.satisfy(isArrayOfEmployee);

            function isArrayOfEmployee(arr) {
                return arr.every(function (item) {
                    return typeof item.name === 'string' && typeof item.age === 'number';
                });
            }
        });

        it('should contain employee vijitha', function () {
            expect(employees.all).to.include({"name": "Vijitha", "age": 45, "company": "Dialog"});
        });

    });

    describe("test-Random", function () {
        it('should return random employee from employees', function () {
            var random = employees.random();
            expect(employees.all).to.include(random);
        });

        it('should return random number of employees when passing a number', function(){
            var random = employees.random(2);
            expect(random).to.have.length(2);
            random.forEach(function(item){
                expect(employees.all).to.include(item);
            });
        });
    });

});