// creating an object
var user = {
    firstName : "Jeevan",
    lastName : "S K N",
    role : "user",
    loginCount : 32,
    facebookSignedIn : true
};

//accessing an object 

console.log(user.firstName);
// or
console.log(user["lastName"]);

//editing values 
user.loginCount = 44;
console.log(user.loginCount);
console.log(user);
console.table(user);//shows in table form


// Assignment

var smartPhone = {
    modelName : "Samsung M32",
    ram : "6gb",
    rom : "128gb",
    rearCamera : "72mp",
    frontCamera : "27mp",
    batteryCapacity : "6000Mah"
}

console.table(smartPhone);

/*
┌──────────────────┬──────────┐
│     (index)      │  Values  │
├──────────────────┼──────────┤
│    firstName     │ 'Jeevan' │
│     lastName     │ 'S K N'  │
│       role       │  'user'  │
│    loginCount    │    44    │
│ facebookSignedIn │   true   │
└──────────────────┴──────────┘
┌─────────────────┬───────────────┐
│     (index)     │    Values     │
├─────────────────┼───────────────┤
│    modelName    │ 'Samsung M32' │
│       ram       │     '6gb'     │
│       rom       │    '128gb'    │
│   rearCamera    │    '72mp'     │
│   frontCamera   │    '27mp'     │
│ batteryCapacity │   '6000Mah'   │
└─────────────────┴───────────────┘
*/ 