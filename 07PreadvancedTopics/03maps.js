// we declare malike consrtructor based instance creation of an object 
// ut note that maps are not regular objects
// they too have several methods to be used

var myMap = new Map();

myMap.set(1, "Uno"); // many other methods like get,clear,delete etc..
     //  key, value pair as in objects 
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap); // the output representation is totally different 
                // indicating they are not regular objects as it seems though

for(let key of myMap.keys()) {  // printing out keys of map 
    console.log(`Key is ${key}`);
}

for(let value of myMap.values()) { // values of map 
    console.log(`Key is ${value}`);
}

// printing of both vakues and keys 

for ( let [a,b] of myMap){
    console.log(`Key is ${a} and Values is ${b}`);
}

// but ot that forEach always gives you the value for one argument  from the maps
myMap.forEach((h) => {console.log(h)});

//and for both it alwasy gives first value and then only  key in second argument 
myMap.forEach((h,b) => {console.log(`${h} is value and ${b} is key`);
    
});


