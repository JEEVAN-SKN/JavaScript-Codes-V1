function isEven(element) {
    if(element % 2 === 0 ){
        return true;
    }
    return false;
}
console.log(isEven(22));

//Code Optimization 1:

function isEven(element) {
    return element % 2 === 0;
}
console.log(isEven(22));

//holding func in a variable 

 var isEven = function(element) {
    return element % 2 === 0;
 }
 console.log(isEven(22));

 //using arrow functions

 var isEven = (element) => {
    return element % 2 === 0;
    //without it shows undefined 
 }
  console.log(isEven(22));

console.log('"every" method of array ');

var result = [2,4,6,8].every(isEven); 
    //here it is not isEven(), it is just isEven -- referencing the function (not executing the function)
console.log(result); 
//as all are even - combinedresult - true 
var result = [3,4,6,8].every(isEven);
console.log(result);
// as one of is odd - combined result - false 

 //here in order to make a fucntion work over a given data
 // we had to first define that funciton and then type in data 
 //and then call that function here

 //in order ot shorten the process we can use callback function( anonymous)
//and also using it through arrow functions

console.log('Callback Function');


var result = [2,4,6,8].every((e) => {
  return e % 2 ===0;
}); 
console.log(result);

//but if we remove return it behaves odd , 
//it gives false and sometimes it may give undefined 
//if u use {} curly braces - then should use retunn in callback func
// but if it is one line code and u dont want to use return 
//then take out curly braces and use parenthesis there

var result = [2,4,6,8].every((e) => e % 2 ===0); 
  console.log(result);

//either use without () but for less confusion use ()

var result = [2,4,3,8].every((e) => (e % 2 ===0)); 
  console.log(result);