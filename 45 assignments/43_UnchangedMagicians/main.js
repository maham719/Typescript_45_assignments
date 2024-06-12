// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ["Harry", "Ron", "Hermione", "Draco", "Chopper", "Neville"];
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.with a copy of the original array
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
//Making a copy of original array
var copyOfmagicians = magicians.slice();
console.log("copied and modified array:\n");
//calling the function with copied array to modify copied array
var copiedArrayFunction = make_great(copyOfmagicians);
//calling the show_magicians function to show copyed array
show_magicians(copiedArrayFunction);
console.log("\n The original array is still unchanged:");
//printing the original array 
show_magicians(magicians);
