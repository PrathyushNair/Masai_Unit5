// console.log("hello from expres")
const express=require("express")
const app=express()
app.get("/",(req,resp)=>{
    resp.send("<h3 >Hello i am a heading</h3>")
})
app.listen(8080,()=>{
    console.log("started server")
})