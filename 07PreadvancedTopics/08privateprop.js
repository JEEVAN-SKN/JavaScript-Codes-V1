class User{ // just the same class we created in previous js file 
   

    constructor(name,email){                           
        this.name = name; 
        this.email = email;
    }
    getInfo() {  
        return {name: this.name, email: this.email};
    }
    courseList = [] 
    enrollCourse(course){
        this.courseList.push(course);
    }
    getCourse() {
        return this.courseList;
    }
 }

 // getters are methods that which retrieves info from objects ( mostly dont need paramters, just return command )
// eg: the getnfo() func above -> we use "get" as prefix in func name (not compulsary)

//setters are methods that which sets or changes some vlaue in the object 
// prefix- set (not compulsary) , (mostly meeds a parameter)

// private variables in class,objects 

// in abive class we have func getCourse() but it just prints out an array of the object 
// in can alsi be done the below way  
const rock = new User("rock","rock.gmail.com");
rock.enrollCourse("Angular Bootcamp");

console.log(rock.getCourse());
console.log(rock.courseList); // it gives out the same result as above line 

// but scenario changes when we object has a private variable
// it cannot be direclty accessible, but only through object's method;

class Player{ // just the same class we created in previous js file 
    #courseList = []; // private variable
    enrollCourse(course){
        this.#courseList.push(course); // need to use same # prefix notation for private var
                    // wherver used in class
    }
    getCourse() {
        return this.#courseList;
    }
 }

 const biker = new Player;

 biker.enrollCourse("Mudroad Biking");
 console.log(biker.getCourse());  // igves output 
 console.log(biker.courseList); //shows undefned as courseList is private variable 
                        // only accessible through the object method 

