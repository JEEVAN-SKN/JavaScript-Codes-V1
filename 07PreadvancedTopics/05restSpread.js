// ...args //(... var_name ) can be either rest operator in some case 
                // and can be spread operator in some other cases both are kindo of opposite

// Math.max function 

var returnValue = Math.max(2,1,8,8,9,3,4); // can input as much as numbers
console.log(returnValue);// gives the max vakue out of all given numbers 

var myObject = {};

Object.assign(myObject, {a:1, b:2, c:3}, {ab: 12, bc: 23}); // method to add values to an object 
console.log(myObject); // but we inputted two diff objects , but this methods combines all of them


// Spread operator 
// spreads data from a bunch structure of data (eg . array)

function sumOne(a,b) {
    return a + b;
}

var myA = [5,4]; // i need to input the contents of this array as arguments to the abive func

console.log(sumOne(myA)); // it gives random which means it tries to do something bt atlasyt ignored it
console.log(sumOne(5,4,3)); // it gives 9  thereby ignoring 3rd argument 

// inorder to input array to this func we can use spread operator 

console.log(sumOne(...myA)); // it spreads the valus of the array as per ned of function 


//Rest operator - combines individual data into a bunch eg.array

//what if we want o creat an add function but the no of arg should be variable 
// in such case we use rest operator

function sumTwo(...args) { //rest operator
    console.log(args); //creates an array with given argument 
    let sum =0;
    for(const arg of args){ // need to loop as ars is an array now
        sum += arg;
    }
    return sum;
}

console.log(sumTwo(2,3,5,6,7,12,45,66,76));

// executing separate working for part of input in rest operator

function addMul (a,b,...args) { //1st two arguments and rest of them can be variable 
        let multi = a*b;
        let sum =0;
        for ( const arg of args){
            sum += arg;
        }
        return [sum,multi]; // return more than one values thru array (can be ways like string,object etc..)
}

console.log(addMul(2,3,3,4,5,6,7,8,9,99,88,77,55,44,33,12));