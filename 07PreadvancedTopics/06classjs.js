 // class is an blueprint for creating objects

 class User{
    // name = ""; // can be predefined here before use in constructor but not needed

    constructor(name,email){ // constructor is method executed as sonn as objects is created 
                            // you can define it or an emptu constructor will be created by itself
        this.name = name; 
        this.email = email;
    }
    getInfo() {  // no need for keyword function
        return {name: this.name, email: this.email};
    }
    courseList = [] // no need for var keyword 
    enrollCourse(course){
        this.courseList.push(course);
    }
    getCourse() {
        return this.courseList;
    }
 }

 // to create object from class
 let jeevan = new User("Jeevan","saisaranamjeevan@gmail.com");

 // to use this class in another js file 
 // can use export in first kine of code mentioning class 

// also thru this way 
module.exports = User; //here we export whole class, can also export specific arry or method 
