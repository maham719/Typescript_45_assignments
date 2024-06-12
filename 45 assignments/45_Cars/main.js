// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function Car(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var cars = {
        manufacturer: manufacturer,
        model: model
    };
    args.forEach(function (arg) {
        var _a = arg.split(":"), key = _a[0], value = _a[1];
        cars[key] = value;
    });
    return cars;
}
var car = Car("Volkswagen AG", "Golf", "color: blue", "year: 2020");
console.log(car);
var car2 = Car("Bugatti", "Veyron", "color: red", "Year: 2021");
console.log(car2);
