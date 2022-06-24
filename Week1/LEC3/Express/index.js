//method +route
const express=require("express")
const fs=require("fs")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.text())

//GET request
app.get("/",(req,resp)=>{
    resp.send("<h3 >Hello i am a heading</h3>")
})
/////////////////////////////////////


//POST request
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
/////////////////////////////////////

//GET from a json server
app.get("/messages",(req,res)=>{
    fs.readFile("./data.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send("something went wrong")
        }
        const parseddt=JSON.parse(data)
        const msg=parseddt.messages
        res.send(JSON.stringify(msg))
    })
})


//DELETE

app.delete("/messages/:id",(req,res)=>{
    const {id}=req.params
    
    fs.readFile("./data.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send("something went wrong")
        }
        const parseddata=JSON.parse(data)
        const finaldata=parseddata.messages
        console.log(finaldata)
        const newdata=finaldata.filter((el)=>el.id!=id
        )
        console.log(newdata)
        parseddata.messages=newdata
        fs.writeFile("./data.json",JSON.stringify(parseddata),"utf-8",()=>{
            res.send("data will be deleted")
        })
        
    })
})
















app.listen(8080,()=>{
    console.log("started server")
})