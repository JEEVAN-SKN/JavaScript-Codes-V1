var num1 = 7;
var num2 = 6;

console.log(num1 * num2); //out:42

var answer = num1 > num2;

console.log(answer); //out:true


var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice)/ listingPrice) * 100;
console.log("The Discounted Percentage is: ", discountPercent); //out:The Discounted Percentage is:  75.09386733416771
console.log("The Discounted Percentage is: ", Math.round(discountPercent)); //out:The Discounted Percentage is:  75 


var result = listingPrice > sellingPrice;

console.log(typeof(result)); //out:booleaan

