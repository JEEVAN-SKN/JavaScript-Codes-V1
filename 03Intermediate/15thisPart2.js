// this -- for all regular functions this points to window object 
// inside an object it points to the object 

console.log(this);  // in node it points to an empty object
//in browser it points to window object

var user = {
    firtsName : "hitesh",
    courseCount : 4,
    getCourseCount: function() {  ///method inside a object 
        console.log(this);   // this points to the whole object itself
                                // smaein browser with some added proto etc.                            
    },
};
//  //out:{
//   firtsName: 'hitesh',
//   courseCount: 4,
//   getCourseCount: [Function: getCourseCount]
// }

user.getCourseCount(); // invoking the method

// Note that this is not an regular function call , it is invoking a method thru an object 
//but wwhen we use "this" within jn a regular function call we get the window object in browser 
                                                         //or global object in node

function sayHello(){
    console.log("Hello");
    console.log(this);
}
sayHello();

// even if we put an regular function inside an object it still points to the eindow/global object 

var candidate = {
    firtsName : "hitesh",
    courseCount : 4,
    getCourseCount: function() {  ///method inside a object 
        console.log(this); //this works 
        function hello(){  //even inside object regular func always points to global/window object
            console.log("Hi");
            console.log(this); //but its not working bcs there is  no objects here
        }
        hello();
    },
};

candidate.getCourseCount();
