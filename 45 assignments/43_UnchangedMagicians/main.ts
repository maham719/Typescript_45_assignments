// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians: string[] = ["Harry", "Ron", "Hermione", "Draco", "Chopper", "Neville"];

//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.with a copy of the original array
function make_great(magicians: string[]): string[] {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    return magicians;
}
//Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
//Making a copy of original array
let copyOfmagicians:string[]=magicians.slice();

console.log("copied and modified array:\n")
//calling the function with copied array to modify copied array
let copiedArrayFunction=make_great(copyOfmagicians);

//calling the show_magicians function to show copyed array
show_magicians(copiedArrayFunction);

console.log("\n The original array is still unchanged:");
//printing the original array 
show_magicians(magicians);
