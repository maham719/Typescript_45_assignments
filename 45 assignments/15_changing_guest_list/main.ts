//Q:You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guestList=["fabiha","shiza","waniya"];


//arrays start with the index of 0 so that if shiza from my array is on index of 1 and fabiha is on the index of 0 in following line of code i am calling the value (shiza) on index of 1 to tell that she can't come over
console.log(`\n \n unfortunately ${guestList[1]} can't make it to the Dinner\n\n`);


//splice function takes 3 arguments first to specify the index position of at which to start changing the array
//second argument (1) specifies the number of elements to be removed
//third argument (zainab) specifies the new element to add to the array at the index of 1
guestList.splice(1,1,"zainab");

// This loop iterates over each guest in the guestList array.
// For each guest, it prints a personalized invitation message using template literals.
guestList.forEach(guest=>console.log(`Dear ${guest},I would like to invite you to dinner with me at my place tomorrow. It would be great if you could come.\n \n Thank you`));
