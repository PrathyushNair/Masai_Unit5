
const {add}=require("./functions")
const {mul}=require("./functions")
const{sub}=require("./functions")
const {div}=require("./functions")
const readline = require('readline');
const num=require("crypto")
let random=(limit)=>{
    return(num.randomInt(0,limit))
    
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (input) => {
    let ans=input.split(" ")
    
    if(ans[0]==="add")
    {
        console.log(add(ans[1],ans[2]));
  
    }
    else if(ans[0]==="sub"){
        console.log(sub(ans[1],ans[2]))
    }
    else if(ans[0]==="mul"){
        console.log(mul(ans[1],ans[2]))
    }
    else if(ans[0]==="div"){
        console.log(div(ans[1],ans[2]))
    }
     else if (ans[0]==="random") 
     {
        console.log(random(Number(ans[1])))
     }
    
    rl.close();
  });



// rl.question('What do you think of Node.js? ', (answer) => {
//     // TODO: Log the answer in a database
//     let ans=answer.split(" ")
    
//     if(ans[0]==="add")
//     {
//         console.log(add(ans[1],ans[2]));
  
//     }
//     else{
//         console.log("user wants to do something differernt")
//     }
    
//     rl.close();
//   });