"use strict";
//Q:start with the array you used in exercise 11, but instead of just printing each person's name,print a message to them. the text of each message should be the same, but each message should be personalized with the person's name
let names = ["fabiha", "shiza", "waniya", "afshan"];
//using foreach function to print the values of our array one by one the for each function will run for all the values stored in our array it wil take one vale at a time and store it in the variable personName and print it with the message i have added with the variable, in console 
names.forEach(personNAme => console.log(`Hi ${personNAme}, good morning and have a nice day`));
