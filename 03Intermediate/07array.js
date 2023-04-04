//classic way to declare array 
var countries = ["India", "USA", "Japan", "Russia"];

// new popular way to declare array 
var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam" );

console.log(states);
console.log(states[2]);
console.log(countries[2]);
console.log(countries);

console.log(states.length);
states[0] = "Punjab";
console.log(states);
console.log(states[0]);

 states.pop(); //removes last element
 console.log(states);
 states.push("Tamilnadu"); //adds at lastindex
 console.log(states);

 states.shift(); //removes first element  and 
 console.log(states);
 states.unshift("Karnataka");//adds as first element 
 console.log(states);

 //get index of a element in an array
 console.log(states.indexOf("Delhi"));

 //gives -1 index for non-existenet element 
 console.log(states.indexOf("Kerala"));

 //-1 index usecase :
    //when user needs to delete an element
    //use if case and if user types in a nonexistent element
    //then the index of it will be -1 
    //so if index is -1 then show error to user 

//converting a string into an array
console.log(Array.from("Jeevan"));



