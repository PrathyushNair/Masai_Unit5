const add=(a,b)=>{
    return (Number(a)+Number(b))
}
const mul=(a,b)=>{
    return (Number(a)*Number(b))
}
const sub=(a,b)=>{
    return(Number(a)-Number(b))
}
const div=(a,b)=>{
    return(Number(a)/Number(b))
}
const sin=(a)=>{
    return(Math.sin(Number(a)))
}
const cos=(a)=>{
    return(Math.cos(Number(a)))
}
const tan=(a)=>{
    return(Math.tan(Number(a)))
}
module.exports={add,mul,sub,div,sin,cos,tan}