// in js all html tags are elements (eg:<p> <span>),
    //   all text content are textnodes
    //   all class are classlist ( no. of classes ) 

const courses = [ // list of courses to be looped therby added in display box 
  {
    name: "Complete ReactJS course",
    price: "2.9",
  },
  {
    name: "Complete Angular course",
    price: "2.1",
  },
  {
    name: "Complete MERN course",
    price: "3.8",
  },
  {
    name: "Complete C++ course",
    price: "2.4",
  },
  {
    name: "Django Course",
    price: "7.4",
  },
];



function generateLIST() {
  const ul = document.querySelector(".list-group"); // selecting the unordered list
  ul.innerHTML = ""; // emptying the ul couse when we click sort button it should add more rows,nstead we empty and add sorted ones again by executing this fucntion 
  courses.forEach((course) => {   // looping through the array (forEach array method)
    const li = document.createElement("li"); // creating an list entry element  
    li.classList.add("list-group-item");  // adding class to list entry element 

    const name = document.createTextNode(course.name); // creating text content 
    li.appendChild(name); // adding it to list 

    const span = document.createElement("span");  // creating span element 
    span.classList.add("float-right");  // add class
    const price = document.createTextNode("$ " + course.price); // creating text content 
    span.appendChild(price);  // adding it to span 

    li.appendChild(span); // adding span to list entry 
    ul.appendChild(li); // adding list entry to unordered list 
  });
};

// generateLIST();

window.addEventListener("load", generateLIST); // whenever page loads js reexecuted ( same happens in abive code too)

const button1 = document.querySelector(".sort-btn1"); // selecting contents of sort button (ascending)

button1.addEventListener("click", () => {  // adding functionaity on touch of the sort button 
  courses.sort((a, b) => a.price - b.price);  //sorting the courses array - seecting a.price as we gonna compare prices only
  generateLIST();
});
        // normal array.sort sorts arrays based 0 index character 
              // apple comes before banana
              // in numbers -> 25 > 100 coz first number 2>1
              // hence we need to add comapre function in additon 
              // array.sort(compareFunction)
                // acending -> array.sort(function(a, b){return a-b});
                // descending -> array.sort(function(a, b){return b-a});

  const button2 = document.querySelector(".sort-btn2  "); // selecting contents of sort button (descending)

  button2.addEventListener("click", () => {  // adding functionaity on touch of the sort button 
    courses.sort((a, b) => b.price - a.price); 



  generateLIST(); // with the updates coures array the function is invoked again 
});
