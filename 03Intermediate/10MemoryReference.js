let array = [1,2,3,4,5]
let assignarray = array
assignarray[1] = "hello"
console.log(array,assignarray); //output: [ 1, 'hello', 3, 4, 5 ] [ 1, 'hello', 3, 4, 5 ]
    //when we changed the assignarray , it also changed the original array
        //because when we assign an array into another array , the new array just points to the memory location of the contetns of the original array
        //thats y  when we changed the new array it also affect the original array bcs both of them point at the same location

// to avoid this we can use slice operation  or spread operation to copying array

//slice method 
let newarray = [1,2,4,5]
let slicearray = newarray.slice()
slicearray[2] = "hello"
console.log(newarray,slicearray); // output: [ 1, 2, 4, 5 ] [ 1, 2, 'hello', 5 ]
let spreadarray = [...newarray]  // spread operator
spreadarray[2] = "helio"
console.log(newarray,slicearray,spreadarray); //[ 1, 2, 4, 5 ] [ 1, 2, 'hello', 5 ] [ 1, 2, 'helio', 5 ]
// so we can use either spread operator or slice method to copy array 

// LIMITATIONS with spread and slice 
    // they only work upto one dimension or level
        //if we use them on two dimensional arrays they dont work the same way

let spreaddemo = [[1,2],[2,3],[3,4]]
let spreadtest = spreaddemo
spreadtest[2][2] = "hello"
console.log(spreaddemo,spreadtest);
