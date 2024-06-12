// Q18:Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//initializing an arry to store the location names

let citiesToGo:string[]=[  "Dubai","Cape Town", "Edinburgh","Barcelona"];

//printing the original array
console.log("original array",citiesToGo);

//printing array in alphabetical order by making a copy of the original array and applying the built-in sort funtion to sort the array in alphabetical order
console.log("Alphabetical Order:", [...citiesToGo].sort());

//printing the array again to show that it's still in its original  order
console.log("Array is still in it's original order", citiesToGo);

//printing array in reverse order without modifying the original array
console.log("Reverse Order:", [...citiesToGo].reverse());

//printing the array again to show that it's still in its original  order
console.log("Array is still in it's original order", citiesToGo);

//reversing the order of the original array list and printing the array to show that it has changed 
console.log("Original Array Reversed:", citiesToGo.reverse());

//reversing the array again and printing the array to show that it's back in it's original order again
console.log("Back to it's original order:", citiesToGo.reverse());

//sorting the original array in alphabetical order and printing it to show that the original order has been changed in alphabetical order
console.log("Sorted in Alphabetical Order:", citiesToGo.sort());

//sorting the original array in reverse alphabetical array and printing it to show that the originak order has been changed in reverse alphabetical order
console.log("Reversed Alphabetical Order:", citiesToGo.sort().reverse());