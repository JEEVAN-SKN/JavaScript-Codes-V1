// two types of context :
//         1) Global context       
//         2) Executing Context 


//Global context - gathers info
//Execution context - comes when execution and goes away

//exec context stacks on global context
// and js always takes top of stack cntxt cannot backtrack

var num = 2; //globalcontext
 
function sayMe() {  //global
    console.log("Say me"); //exec kicks in and goes away
}

sayMe(); // exec context stacks till execution ends


// Execution Context Features:
//     Variable Object 
//     Scope Chain
//     this
//  rules before exec cntxt:
//     1)Func decl are scanned and made available
//     2)Var decl are scanned and made undefined


// Variable Object - collects info about code
    //   has global and exec cntxt scoping

function tipper(a){
    var bill = a;
    console.log(bill+5);
}

tipper(5); //gives result 10
tipper("5"); // gives result as 55
// in order to change string to int

function tipperb(a){
    var bill =parseInt(a);
    console.log(bill+5);
}
tipperb("5"); //gives result as 10 by coverting str into int 

//Code Hoisting 
bigTipper(200); //works even when called before decl due to global context 

function bigTipper(a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}

// but we define func in a var then ...

// bugTipper(110); //gets error 

// //because 2nd rule says var decl with undefined before exec cntxt
// // so when fucn define in a var only call after decl 

// var bugTipper = function (a) {
//     var bill = parseInt(a);
//     console.log(bill+12);
// }

//  printing var before decl
console.log(fname);  // gives undefined 
                // bcs global context gets to know from
                // below decl but 2nd rule it is undefined 
                // unless printing is done after decl
var fname = "Jeevan";
 
// multple exec cntxt stacking over and 
    //prioritizing top of stack

console.log(fsname); // gives 'undefined' due 2nd rue of exex cntxt 
var fsname = "Jeevan";

function sayName(){
    var fsname = "S K N"; 
    console.log(fsname);
}
sayName();// new exec context kicks in and result is S K N
          // after execution cntxt goes off

console.log(fsname);// new cntx but here call only after decl
            //so result is Jeevan

            