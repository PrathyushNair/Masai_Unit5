//method +route
const express=require("express")
const fs=require("fs")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.text())




//POST request
app.post("/",(req,resp)=>{
    console.log(req.body)
    const datafromclient=req.body
    fs.readFile("./data.json",{encoding:"utf-8"},(err,data)=>{
        if(err){
            console.log("error")
        }
        const parsedata=JSON.parse(data)
        parsedata.todos=[...parsedata.todos,datafromclient]
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
app.get("/",(req,res)=>{
    fs.readFile("./data.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send("something went wrong")
        }
        const parseddt=JSON.parse(data)
        const msg=parseddt.todos
        res.send(JSON.stringify(msg))
    })
})


//DELETE

app.delete("/:id",(req,res)=>{
    const {id}=req.params
    
    fs.readFile("./data.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send("something went wrong")
        }
        const parseddata=JSON.parse(data)
        const finaldata=parseddata.todos
       
        const newdata=finaldata.filter((el)=>el.id!=id
        )
        
        parseddata.todos=newdata
        fs.writeFile("./data.json",JSON.stringify(parseddata),"utf-8",()=>{
            res.send("data will be deleted")
        })
        
    })
})


app.put("/:id",(req,res)=>{
    const id=req.params.id
    fs.readFile("./data.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send("Some Error occured")
        }
        receiveddt=JSON.parse(data)
        const message_arr=receiveddt.todos
        message_arr.forEach((el)=>{
        if(el.id==id)
        {   
            el.task=req.body.task
            el.status=req.body.status
            
        }
       
       })
       fs.writeFile("./data.json",JSON.stringify(receiveddt),"utf-8",()=>{
        res.send("data will be deleted")
    })
    })
    res.send("data will be edited")
})
















app.listen(8080,()=>{
    console.log("started server")
})