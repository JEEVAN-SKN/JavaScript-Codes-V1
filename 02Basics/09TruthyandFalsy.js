// FALSY VALUES :
// undefined 
// null
// 0
// ''
// NaN ( not a number )

var user; //undefined   
console.log(user);

var user = "undefined";
console.log(user);

var user = null;   
console.log(user);

if(user) {
    console.log("Condition is true"); 
}


// JS Confusions 

console.log(2+2);
console.log('2'+2);
console.log(2+'2');
console.log('2'+'2');

var user = 2;

if ( user == '2') {    //but not gonna work with strict '==='
    console.log("Hi");
}
if ( user == 2) {
    console.log("Hi");
}
if ( '2' == user) {
    console.log("Hi");
}
if ( 2 == user) {
    console.log("Hi");
}