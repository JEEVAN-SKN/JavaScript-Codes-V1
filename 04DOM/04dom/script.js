const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");


//window.getComputedStyle gives all styles of an element 
console.log(window.getComputedStyle(cyan)); //gives final computed version of style
console.log(window.getComputedStyle(cyan).background); // all styles related to background
console.log(window.getComputedStyle(cyan).backgroundColor); //guves backgroundcolor
    // here we should apply camelcasing to the css properties to use in js

const getBgColor = (color) => {
    return window.getComputedStyle(color).backgroundColor;
}

console.log(getBgColor(pink))