// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["Harry", "Ron", "Hermione", "Draco", "Chopper", "Neville"];
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    return magicians;
}
//Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
