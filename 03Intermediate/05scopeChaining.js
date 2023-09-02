// Execution Context Features:
//     Variable Object 
//     Scope Chain
//     this

// Scope chain is like concentric circles containing parent and child areas
//  child can inherit from parent heirarchically    
// but parent cannot do that from child
// theses circles are compared to context

var fname = "Jeevan";
 let sub = "subject"
console.log("Line Number 13", fname);

function sayName() {
    var fname = "Mr. J";
    
    console.log("line number 17", fname);  
    
    sayNameTwo(); //it considers its Mr. J as fname because it is in its scope
     
    function sayNameTwo() {
       // var fname = "S K N ";
        console.log("line no 23", fname);
    }
}
sayName();

// //Side note : {} - this is a scope 
//     eg: function {        }
// but whenever they are sed in if, for, while loop
// They are not considered as a scope 