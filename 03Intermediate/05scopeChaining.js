// Execution Context Features:
//     Variable Object 
//     Scope Chain
//     this

// Scope chain is like concentric circles containing parent and child areas
//  child can inherit from parent heirarchically    
// but parent cannot do that from child
// theses circles are compared to context

var fname = "Jeevan";
 
console.log("Line Number 13", fname);

function sayName() {
    var fname = "Mr. J";
    console.log("line number 17", fname);  
    
    sayNameTwo();
     
    function sayNameTwo() {
        // var fname = "S K N ";
        console.log("line no 23", fname);
    }
}
sayName();



