// [1] replaceAll

// earlier method "replace"
    const str = "Google is a big company, Google Search is one of it's famous products";
    const newStr = str.replace("Google","Microsoft"); //replaces first google word with microsoft 
    console.log(newStr);

// new method replaceAll
    const newStr1 = str.replaceAll("Google","Microsoft"); //replace all instances of google word with microsoft 
    console.log(newStr1);

// [2] promises any,race

const rejectMe = new Promise ((_,reject) => reject("path issues"))
const resolveMe = new Promise (resolve => resolve())

Promise.race([rejectMe,resolveMe,rejectMe]) // gives output handle resolved 
        // race checks all promises and only resolve if all are resolved
.then(() => console.log("handle resolved")) 
.catch(e => console.log("rejected"))

Promise.any([rejectMe,resolveMe,rejectMe]) // gives output rejected 
        // any resolves if atleast any of them is solved
.then(() => console.log("handle resolved"))
.catch(e => console.log("rejected"))

// logical assignment operators 
// we have += *= likewise for logical operators
// we have $$= ||= 
// and also ??=(if not exists)

function cartTotal(value){
    value ??= 0;
    console.log("total is:", value);
}

cartTotal();  //as there value is not assigned wiht use of ??= 0 is assigned 
cartTotal(30); // as a value is assigned ??= assignment is ignored 

//Numeric separators 

num = 100_000; //doesnt affect output just for more clear visibility
console.log(num); // just prints 100000


// for latest updates go to github tc39 repo and there u can find out all new proposals, accepted ones, inactive ones etc..






