

function sayHello() {
    console.log("Hello");
}
sayHello();

// sayHello();  --calling
// sayHello;    --referencing

var Jeevan = "S K N ";
function sayHi(name) {
    console.log("hello there", name);
    console.log("hello there "+name);
    console.log(`Hi there ${name}`);
}
sayHi("Jeevan");
sayHi(Jeevan);

// return in JS Functions
function add(a,b){
    console.log(a+b)
}
let a=1
let b=3

add(1,2) //direct int can get passed

add(a,b) //or reference variable can be passed either way it works

//es6 have this latest arrow function

const addArrow =(a,b)=>{
    console.log(a+b)
}
addArrow(a,b)



function namaste() {
    return "Hello India";
}
namaste(); //doesngt print anythng 

console.log(namaste());
  
var greetings = namaste(); //returns value to variable greetings
console.log(greetings,"_How are you?");  