const{add,mul,sub,div}=require("./functions")
const num=require("crypto")
let random=(limit)=>{
    return(num.randomInt(0,limit))
    
}
let command=(process.argv)

switch (command[2]){
    case "add":{
        console.log(add(command[3],command[4]))
        break
    }
    case "sub":{
        console.log(sub(command[3],command[4]))
        break
    }
    case "div":{
        console.log(div(command[3],command[4]))
        break
    }
    case "mul":{
        console.log(mul(command[3],command[4]))
        break
    }
    case "random":{
            console.log(random(Number(command[3])))
    }
}
