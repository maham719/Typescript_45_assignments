"use strict";
// //Q17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
//printing a message on clonsole to inform the gueasts that we can only invite 2 people
console.log("unfortunately , tha dinner table won't arrive on time so we can only invite two guests for the dinner");
//running while loop to remove the guests whome we cannot invite to the dinner from the guest list except two people
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`sorry, ${removedGuest} i can't invite you to the dinner`);
}
//inviting the two remaining guests
console.log("invitation to the two remaining guests");
guestList.forEach(remainingGuests => console.log(`${remainingGuests} , you're still inviited to the dinner`));
//removing the last two guests by using pop method and the printing the list to show that it is empty now
guestList.pop();
guestList.pop();
console.log(`the list is empty now ${guestList}`);
