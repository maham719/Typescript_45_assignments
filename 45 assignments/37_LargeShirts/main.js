// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("The Size of the shirt is ".concat(size, " and the message printed on it is ").concat(message));
}
make_shirt("Large");
make_shirt("Medium");
make_shirt("Small", "I Love Python");
