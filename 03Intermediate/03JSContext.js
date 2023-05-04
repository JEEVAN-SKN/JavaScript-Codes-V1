// JS - Global Context 
    // scans through code just to know the code 
sayHello(); // it works even if is called before declatration
            // bsc JS has global context

function sayHello() {
      console.log("JS has Global context");
}

if (2 === '2'){ //both are not same 
    console.log("hi") //no exec
}

//Global context of browser is 'window' in chrome browser not in node execution

// var myName = "hitesh";
// if( myName === window.myName) {
//     console.log("This is again a true statement");
// }

    // this gives error in node execution in cmd as node's 
    // global context is not window 
