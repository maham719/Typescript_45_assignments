"use strict";
//Q:store a person's name in a variable , and then print that person's name in lowercasse,uppercase and title case?
let myName = "Syeda Maham Amjad";
console.log("LowerCase:", myName.toLowerCase());
console.log("UpperCase:", myName.toUpperCase());
console.log("TitleCase:", (myName.replace(/\b\w/g, (char) => char.toUpperCase())));
