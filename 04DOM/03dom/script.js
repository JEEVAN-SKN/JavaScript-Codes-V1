var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

    // can also be done using getElementById and innerHTML

// advantage of query selector is that instead of giving a huge array
// like getElementsByTagName it just gives the entir line html code

// normally queryselector or getelementbyid is used to grab elements from html

console.log(counter); // prints <h1 class="counter">1004</h1>
console.log(counter.innerHTML);
        // prints 1000

// counter.innerHTML = 1004;
//         // changes 1000 in screen into 1004

// in order make th follwers count to start and end down tp 1000
// we use 2 time events form js 
// they are :
    //setTimeOut(function,milliseconds)
    //setInterval(function,milliseconds)
let count = -1;

//this is called an evant and it is handled by browser
setInterval(() =>{  //increases count vaue form 0 - 1000
    if(count<=1000){
   counter.innerText = count; //or innerHTML
   count++;
    }
},1) //after one incrementation it waits for 1 ms and then proceeds 
    // to next iteration

setTimeout(()=>{
    followers.innerText = "Followers on Instagram" //or innerHTML
}, 4500
) // after a 4500 milliseconds the value of followers is changed  
