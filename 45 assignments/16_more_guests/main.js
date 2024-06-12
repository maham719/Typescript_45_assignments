"use strict";
//Q: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//creating a new array to define our guestlist
let guestList = ["fabiha", "shiza", "waniya"];
//arrays start with the index of 0 so that if shiza from my array is on index of 1 and fabiha is on the index of 0 in following line of code i am calling the value (shiza) on index of 1 to tell that she can't come over
console.log(`\n \n unfortunately ${guestList[1]} can't make it to the Dinner\n\n`);
//splice function takes 3 arguments first to specify the index position of at which to start changing the array
//second argument (1) specifies the number of elements to be removed
//third argument (zainab) specifies the new element to add to the array at the index of 1
guestList.splice(1, 1, "zainab");
//prinnting a new message to announce that we have found a bigger dinner table
console.log("hello people i've found a bigger dinner table so i would like to invite more guests");
//we use unshift command to add a new guest name at the beginning of our array
guestList.unshift("afshan");
//adding new guest name at the ending of my array by push command which is used to do so 
guestList.push("sana");
//beacuse there is no built in function or command to add a value to the middle index of an array so we would do it manually by creating logic
//Finding the middle index of our array by dividing the lenght of our array by 2 .. math.floorfunction is used here to round the result of our division operation
let middleIndex = Math.floor(guestList.length / 2);
//adding the new guest name to the middle index of ou aarray
guestList.splice(middleIndex, 0, "zoya");
// This loop iterates over each guest in the guestList array.
// For each guest, it prints a personalized invitation message using template literals.
guestList.forEach(guest => console.log(`Dear ${guest},I would like to invite you to dinner with me at my place tomorrow. It would be great if you could come.\n \n Thank you`));
