// in promises we can chain on to a series of actions if it is fulfillef by using "then" method

// try catch codes
        // try{

        // }catch (error) {

        // }

//fetch is js predefined method for fetching api data
// fetch('api url')    
//      .then()     -- the return of this is passed to next then and so on 
//      .catch()     //for error handling


fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single" // this particular api needs to add headers asit retunrn a html 
    )    
    .then((response) => response.json())
    .then((data) => {
        var joke = data.joke;
        console.log('JOKE:',joke);
    })
    .catch()  // error handling 
            

    // sometimes may not workout in terminal node execution
     // then try it out in browser console and you will get a random joke as result 