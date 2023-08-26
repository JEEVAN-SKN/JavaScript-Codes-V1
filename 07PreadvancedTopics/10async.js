// in js there is a concept of event loop 
// in simple term it is looping for event occurence 

//in js as code gets scanned all task are queued up and 
// and all are executed accordingly 

//but what if one specific task takes too nuch time to load ,
// we coud load all other simpel tasks while the current tas takes it time
// this is the concept of asynchronous execution 

const one = ()=> {
    console.log("I am One");
}

const two = ()=> {
    setTimeout(()=>{console.log("I'm finished loading ")},3000)
    console.log("I am Two");
}

const three = ()=> {
    console.log("I am Three");
}

one();  //  js prints this up 
two();// setTimeout takes time to execute  , so no event loop check whethet any other simple code task to complete and runs it
        // thereby printing two and then if setTimeout is still loading ,it looks up to the queue and finds out three() execution pending 
three(); //so it executes three() and meanwhile settimeout finishes its execution 

// Here the setTimeout func can be considered as web api loads or any other loading component
// so instead of waiting js executes asynchrounously 
// so that fronend websites loads up not to upset user 

// but as soon as js was integrated in backend 
// there may bes some sucessive componenets whose contents are dependent on the previous loading task
// hence if these successive  components exeute before dependent task load it leads to wrong data 
// hence js needs to be synchronous at some instances relate dto backend
// we'll discuss those things ar next chapter 

