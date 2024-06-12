// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings


// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
//------------------------------------------------------------------------------//

//• Tests for equality and inequality with strings



let apple= "apple";
let upperCaseApple="APPLE";
let ten=10;
let twenty=20;
let colors=["red","blue","green"];

console.log("\n is apple equals to apple? I Predict True ");
console.log(apple==="apple");

console.log("\n is apple not equals to apple? I Predict False ");
console.log(apple!="apple");

//• Tests using the lower case function

console.log("\n is APPLE equals to apple after converting to lower case? I Predict True ");
console.log(upperCaseApple.toLowerCase()==="apple");

console.log("\n is APPLE not equals to apple after convertin to lower case?I Predict False ");
console.log(upperCaseApple.toLowerCase()!=="apple");

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//equality
console.log("\n is ten equals to twenty?I Predict False");
console.log(ten==twenty);
//ineuqlity 
console.log("\n is ten not equals to twenty?I Predict True");
console.log(ten!=twenty);
//greater than 
console.log("\n is 10 greater than 0?I Predict True");
console.log(ten>0);
//less than
console.log("\n is twenty less than ten?I Predict False");
console.log(twenty<ten);
//greater than or equals to
console.log("is twenty greater than or equals to ten?I Predict True");
console.log(twenty>=ten);
//less than or equals to 
console.log("\n is tewnty  less than or equals to ten?I Predict false");
console.log(twenty<=ten);

// • Tests using "and" and "or" operators

console.log("\n is twenty not equals to ten and twenty is greater than ten?I Predict True");
console.log(twenty!=ten&&twenty>ten);

console.log("\n is twenty not equals to ten and twenty is greater than 30?I Predict False");
console.log(twenty!=ten&&twenty>30);

console.log("\n is twenty equals to ten or twenty is greater than ten ?I Predict True");
console.log(twenty==ten || twenty>ten);


// • Test whether an item is in a array

console.log("\n is color 'red' included in the array? I Predict True ");
console.log(colors.includes("red"));


// • Test whether an item is not in a array
console.log("\n is color red? not included in the array?I Predict False" );
console.log(!colors.includes("red"));