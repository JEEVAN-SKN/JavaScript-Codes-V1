// types of programmng:
// object-oriented, procedural and functional programming 

let score = 456;

function addBonus(){
    score = score + 45;
    return score;
}

//Functional prog style 
        function addBonus(score){
            return score+45;      // less time debugging
        }                         // no global variable stuff 
// as shown above in fucn prog->  first rule :  keep data and function separate

// second rule: dont frequently change state 

jeevan = "hi";
jeevan = "hello";
jeevan = "how r u ";

// in func prog style
    jeevan = "hi";
    jeevan2 = "hello";
    jeevan3 = "how r u ";
        // even if new var declared avoid chamnging state of an already declared var 

// 3rd rule: treat functions as first class citizens 

const h = 5;
const name = "Jeevan"
        // here we can assign whatever value to a variable 
        // pass them in func , return them in func

        //the same way function should also be able to be declared anywhere 
        // it can be stored in a variale
        // it can be passed as a parameter in another func 
        // can be used inside another functions

        