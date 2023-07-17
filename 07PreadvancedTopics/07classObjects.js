// import User from "./06classjs.js"; // modern way also used in many frameworks 

const User = require("./06classjs.js")

const skn = new User("Jeevan","sknjeev@gmail.com");

console.log(skn.getInfo());

console.log(skn.getInfo().name);
console.log(skn.getInfo().email);

skn.enrollCourse("Java BootCamp");
skn.enrollCourse("JavaScript BootCamp");
skn.enrollCourse("C++ BootCamp");
skn.enrollCourse("Backend BootCamp");

console.log(skn.getCourse());

// while we handle with backend we always retrieve data and get them in arrays
// so looping thru the arrays and arrays based methods are something to be good at 

let courses = skn.getCourse();

for (const course of courses){
    console.log(course);
}
// or this way
console.log("\nMETHOD: forEach way");
courses.forEach((c)=> {console.log(c);})