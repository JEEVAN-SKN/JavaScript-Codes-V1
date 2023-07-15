function init(){
    var firstName = "jeevan";
    function sayFirstName() {
        console.log(firstName);
    }
    sayFirstName();
}

init();
console.log(firstName);
        //throws error 

//explanation 
//as told before global context exists and if any function starts executing 
//execution context stacks over the previous context and ends when func gets executed 

//the same way when init(); is called a execution context of innit() is stacked over globa context
//all the variables(not availabel) and functions(available) are scanned 

// as sayFirstName() is executed its context stacks over previous innit() context 
//its context end by printing firsName(Jeevan)
// and after that global context persists 
// hence engine doesnt know about previous var or func and hence throws error
// but this isnt the case in closure whic we will se in  next topic.
