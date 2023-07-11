const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const pink = document.querySelector(".pink");
const red = document.querySelector(".red");
const orange = document.querySelector(".orange");

const center = document.querySelector(".center");

// normalyy cyan.style.backgroundColor is enough to get but to get the last browser implemented color 
//window.getComputedStyle gives all styles of an element 
console.log(window.getComputedStyle(cyan)); //gives final computed version of style
console.log(window.getComputedStyle(cyan).background); // all styles related to background
console.log(window.getComputedStyle(cyan).backgroundColor); //guves backgroundcolor
    // here we should apply camelcasing to the css properties to use in js

const getBgColor = (ele) => {
    return window.getComputedStyle(ele).backgroundColor;
}

console.log(getBgColor(pink));

const magicColor = (element,color)=>{
    return element.addEventListener("mouseover",()=>{
        center.style.backgroundColor = color;
    })
}

magicColor(red,getBgColor(red));
magicColor(cyan,getBgColor(cyan));
magicColor(pink,getBgColor(pink));
magicColor(violet,getBgColor(violet));
magicColor(orange,getBgColor(orange));