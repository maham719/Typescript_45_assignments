"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let users = [];
if (users.length !== 0) {
    users.forEach((user) => (console.log(`hello ${user} thank you for logging in agian`)));
}
else {
    console.log("The array is empty we need to find some users");
}
