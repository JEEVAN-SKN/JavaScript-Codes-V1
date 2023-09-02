// javascrit behaves odd in some scenarios bcs it was officialy created for frotend purpose 
// eventhough it is updated to work in other areas there are some instances where the odd behaviour comes up
// It is important to know them and how to handle them

// while creating a constant object in js we shouldnt be able to change the objects contents 
//but stil js behaves quite odd at this scenario 

const student = {
    age : 44,
    name : {
        firstName: "Jeevan",
        lastName: "S K N"
    }
}

student.age = 19; // here eventhough the above object is constant , we are able to change it 
console.log(student);

// to avoid this odd behaviour of js we can use the below method
Object.freeze(student);
student.age=55;   // it is not changed due to above method
console.log(student);

// but in the below scenario even Object.freeze doesnt solve the problem
 student.name.firstName = "Jeev";
 console.log(student); // it changed even though we used Object.freeze
 
 