const{rename,read,append,create,dlt}=require("./function")
const see=require("fs")


const readline =require("readline")

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.on("line",(input)=>{
    let inp=input.split(" ")
    switch(inp[0]){
        case "read":
        {   
            read(see,inp[1])
            break
        }
        case "create":{
            create(see,inp[1])
            break
        }
        case "rename":{
            rename(see,inp[1],inp[2])
            break
        }
        case "append":{
            append(see,inp[1],inp[2])
            break
        }
        case "delete":{
            dlt(see,inp[1])
            break
        }
    }
    rl.close();
})





