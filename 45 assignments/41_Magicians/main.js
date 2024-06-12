// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var Magicians = ["Harry", "Ron", "Hermoine", "Draco", "Chopper", "Neville"];
function show_magicians(Magicians) {
    Magicians.forEach(function (element) {
        return console.log(element);
    });
}
;
show_magicians(Magicians);
