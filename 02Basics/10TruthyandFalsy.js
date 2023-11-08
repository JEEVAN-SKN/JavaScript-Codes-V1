// FALSY VALUES : all have false condition always 
// undefined 
// null
// 0
// ''
// NaN ( not a number )

var user; //undefined   
console.log(user); //out:undefined (Data type: undefined)

var user = "undefined";
console.log(user); //out:undefined  ( Data type :String)

var user = null;   
console.log(user);  //out:null (Data type :null)

if(!user) {
    console.log("Condition is true"); 
}


// JS Confusions 

console.log(2+2);//out:4
console.log('2'+2);//out:22 string+int = string
console.log(2+'2');//out:22
console.log('2'+'2');//out:22 string+string = string

var user = 2;

if ( user == '2') {    
    console.log("Hi");  //it doesnt check datatype 
                        //it converts inputs into strings 
                        //and evaluates
} else {
    console.log("Bye");
}

if ( user == 2) {
    console.log("Hi");
} else {
    console.log("Bye");
} 

if ( user === '2') {    //but not gonna work with strict '==='
                        //because it validates data type too
    console.log("Hi");
} else {
    console.log("Bye");
}

if ( user === 2) {    
    console.log("hi");
} else {
    console.log("Bye");
}

if ( '2' == user) {
    console.log("Hi");
} else {
    console.log("Bye");
}

if ( 2 == user) {
    console.log("Hi");
} else {                    //either way it works
    console.log("Bye");
}

if ( '2' === user) {
    console.log("Hi");
} else {                
    console.log("Bye");
}

if ( 2 === user) {
    console.log("Hi");
} else {                    //either way it works
    console.log("Bye");
}