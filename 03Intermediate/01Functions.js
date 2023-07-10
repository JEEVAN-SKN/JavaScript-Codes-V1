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

function namaste() {
    return "Hello India";
}
namaste(); //doesngt print anythng 

console.log(namaste());
  
var greetings = namaste(); //returns value to variable greetings
console.log(greetings,"_How are you?");  