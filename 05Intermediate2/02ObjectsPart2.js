// formal way to define objects according to documentation (mdn docs)

const User = { 
    fname: "",
    getUsrName: function(){
        console.log(`name is : ${this.fname}`)
    }
}

var jeevan = Object.create(User); // formal way to creat object 
console.log(jeevan);
jeevan.fname = "SKN_Jeevan";
jeevan.getUsrName();

// till now the syntax is clear 
// but when we need to directly pass the properties directly at time of declaration 
//then code gets complicated 

var muni = Object.create(User, {  // the second parameter is to create  an obj with specified prototype 
    fname: {value: "rathinam"},
    getCourseCount: { value: 3}
})

console.log(muni.getCourseCount);
muni.getUsrName();


// this is also another way to declare objects 
//many more refer mdn docs