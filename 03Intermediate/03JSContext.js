// JS - Global Context 
    // scans through code just to know the code 
sayHello(); // it works even if is called before declatration
            // bsc JS has global context
//  arrow() it gives error because of uninitialized


// while compiling the js code it first separates the 
// functions and store it separate and then reads the 
// initializations from the top this property is called hoisting
function sayHello() {
      console.log("JS has Global context");
}


//but js arrow functions doesnt work that way
const arrow =()=>{
    console.log("arrow functions has no global context");
}
if (2 == '2'){ //not strict enough 
    console.log("hi") 
}

if (2 === '2'){ //both are not same (strict)
    console.log("hi") //no exec
} else {
    console.log("bye")
}

//Global context of browser is 'window' in chrome browser not in node execution

// var myName = "hitesh";
// if( myName === window.myName) {
//     console.log("This is again a true statement");
// }

// this gives error in node execution in cmd as node's global context is not window 
