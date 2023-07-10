//small intro to this keyword

console.log(this); 
//gives empty string {} in node exec
// gives global context 'window' in browser console

 var game = "basketball";

 function sayName(){
    var fname = "Jeevan";
    console.log(this);
 }

 sayName();
    //gives object [global] etc..
    //not need to understand now
    // but gives global context window in browser
