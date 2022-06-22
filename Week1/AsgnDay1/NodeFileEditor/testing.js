const{rename,read,append,create,dlt}=require("./function")
let command=process.argv
const see=require("fs")

switch(command[2]){
    case "read":
    {   
        read(see,command[3])
        break
    }
    case "create":{
        create(see,command[3])
        break
    }
    case "rename":{
        rename(see,command[3],command[4])
        break
    }
    case "append":{
        append(see,command[3],command[4])
        break
    }
    case "delete":{
        dlt(see,command[3])
        break
    }
}