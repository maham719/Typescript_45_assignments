"use strict";
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alienColor = "green";
//the version that runs if block
if (alienColor === "green") {
    console.log("player earned 5 points");
}
else {
    console.log("player earned 10 points");
}
//the version that runs else block 
if (alienColor === "red") {
    console.log("player earned 5 points");
}
else {
    console.log("player earned 10 points");
}
