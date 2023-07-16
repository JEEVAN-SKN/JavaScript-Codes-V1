function init(){
    var firstName = "jeevan";
    console.log("hiehelo");
    function sayFirstName() {
        console.log(firstName);
    }
    //sayFirstName(); 
    //instead of invoking, what if i referenced it 
    //does it still all go away as soon as its executing context goes away?
    return sayFirstName; //returning an reference 
}

// nothing comes up in terminal when js file executed 
    // as ther is no funciton invokung only reference 


var full = init();  // the function is assigned to "full" variable and 
// the return value which is func refrence is assigned to "full" other console.log() command is executed 

//here wehen we assign init() to "full" the context arrives and then goes 
//according to rule variables should not be available and functions are 
// but here as we have referenced sayFirstName() which needs firstName , hence the variabel is not completely removed from memory 

//and hence when we execute the below code we get the valeu of the firstName

full(); // full contains the func reference and as full() is excuted as function
// thereby return reference sayFirstName is executed as a function 


//another example

function doAddition(x){
    return function (y) {
        return x + y;
    }
}

var add5 = doAddition(4); // here doaddition is assigned x=4 and with that it leave a 
            // reference of the fucntion(y) to add5
console.log(add5(5));  // now the refrenced function is executed with parameter 5 : 4+5 gives output 9

// but here comes the concept of closure 

console.log(doAddition(5)(6)); // gives output 11 ( curring concept )

//closure : child fuc has access to scope of parent func even after parent func is executed 
// here due to closure property function(y) is able to access x value form doAddition 
// and output the result 

// also note that here after the first execution doAddition() never goes off as one reference is still not executed (js memory property)








