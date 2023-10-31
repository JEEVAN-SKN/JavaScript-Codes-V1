
const readline = require("readline")
const read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
        //set a question in terminal

        const chatBot =async ()=>{
            read.question('Enter role :',(user)=>{

                switch(user){
                    case "admin":
                        console.log("U get full access");
                       break; //if no break the subadmin is also into it
                    // case "admin":
                    // return console.log("U get full access");
                        
                    case "subadmin":
                        console.log("acess to create/del courses");
                        break;
                
                    case "testprep":
                        console.log("access to create/del tests");
                        break;
                
                    case "user ":
                        console.log("access to content");
                        break; 
                
                    default :
                        console.log("Trial User");
                    
                }
                //nesting questions
                read.question('What is your name :',(ans)=>{
                    console.log(`Your name is ${ans}`);

                    read.question('What is your age :',(ans)=>{
                        console.log(`Your age is ${ans}`);
                        
                        read.close() 
                     })
                    
                    
                 })
                 
                
            })
            
            
        }
        
        chatBot()