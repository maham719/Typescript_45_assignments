// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function Car(manufacturer:string,model:string,...args){
    let cars={
        manufacturer:manufacturer,
        model:model
    };
     args.forEach(arg=>{
        let[key,value]=arg.split(":");
        cars[key]=value;
     })
    return cars;
    }
   let car= Car("Volkswagen AG","Golf","color: blue","year: 2020");
console.log(car);
let car2=Car("Bugatti","Veyron","color: red","Year: 2021");
console.log(car2);