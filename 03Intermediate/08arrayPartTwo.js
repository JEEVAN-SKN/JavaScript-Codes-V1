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

console.log('Callback function section');
var result = [2,4,6,8].every(isEven); 
    //here it is not isEven(), it is just isEven -- referencing the function (not executing the function)
console.log(result); //as all are even - combinedresult - true 
var result = [3,4,6,8].every(isEven);
console.log(result);// as one of is odd - combind=ed result - false 



