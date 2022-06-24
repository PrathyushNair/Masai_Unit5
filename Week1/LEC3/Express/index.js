//method +route
const express=require("express")
const fs=require("fs")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.text())
app.get("/",(req,resp)=>{
    resp.send("<h3 >Hello i am a heading</h3>")
})

app.post("/send",(req,resp)=>{
    console.log(req.body)
    const datafromclient=req.body
    fs.readFile("./data.json",{encoding:"utf-8"},(err,data)=>{
        if(err){
            console.log("error")
        }
        const parsedata=JSON.parse(data)
        parsedata.messages=[...parsedata.messages,datafromclient]
        fs.writeFile("./data.json",JSON.stringify(parsedata),"utf-8",(err,data)=>{
            if(err){
                console.log("error")
            }
            console.log(datafromclient)
        })
    })
   
    resp.send("something was send")
})
app.listen(8080,()=>{
    console.log("started server")
})