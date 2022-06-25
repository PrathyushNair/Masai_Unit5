const express=require("express")
const fs=require("fs")
const app=express()
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))
//GET REQ////
app.get("/",(req,resp)=>{
    fs.readFile("./data.json","utf-8",(err,data)=>{
        if(err)
        {
            resp.send("error")
        }
        parseddata=JSON.parse(data)
        const message=parseddata.message
        
         resp.send(JSON.stringify(message))
    })
  
})
//POST REQ//
app.post("/",(req,resp)=>{
    
    fs.readFile("./data.json","utf-8",(err,data)=>{
        if(err)
        {
            resp.send("An error occured")
        }
        const parseddata=JSON.parse(data)
        parseddata.message=[...parseddata.message,req.body]
        fs.writeFile("./data.json",JSON.stringify(parseddata),"utf-8",()=>{
            resp.send("Data added succesfully")
        })
        
    })
    
})


//DELETE REQ//

app.delete("/:id",(req,resp)=>{
    const id=req.params.id
    fs.readFile("./data.json","utf-8",(err,data)=>{
        if(err)
        {
            resp.send("An error occured")
        }
        parseddata=JSON.parse(data)
        let newmessages=parseddata.message.filter((el)=>{
            return(el.id!=id)
        })
        fs.writeFile("./data.json",JSON.stringify(newmessages),"utf-8",()=>{
            resp.send(`Deleted item-${id}`)
        })
        
    })
})

//PUT REQ//
app.put("/:id",(req,resp)=>{
    const id=req.params.id
    let updatedata=req.body
    fs.readFile("./data.json","utf-8",(err,data)=>{
        if(err)
        {
            resp.send("An error occured in file system")
        }
        parseddata=JSON.parse(data)
        let newel
        let updatedarr
        parseddata.message.forEach((el)=>{
            if(el.id==id)
            {  console.log("in forEach")
                newel={...el,...updatedata}
               updatedarr=parseddata.message.filter((el)=>{
                    return el.id!=id
                })
                updatedarr=[...updatedarr,newel]
            
            }
        })
        
       parseddata.message=updatedarr
        fs.writeFile("./data.json",JSON.stringify(parseddata),"utf-8",()=>{
            resp.send("Data updated")
        })
        
    })
})

app.listen(8000,()=>{
    console.log("server started")
})