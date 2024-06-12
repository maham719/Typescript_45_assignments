// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

//using rest operator to accept variable number of arguments
function sandwiches(...items:string[]){
    console.log(`your sandwich includes ${items}`);

    return items;
}
sandwiches("bread","cheese","Lettuce","Tomato","chicken patty");
sandwiches("bread","cheese","Tomato","beef patty");
sandwiches("bread","tomato","cucumber","prawn","ketchup");
