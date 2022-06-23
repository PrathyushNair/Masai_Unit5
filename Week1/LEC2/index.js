const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
   if(req.url==="/quiz")
   {
    res.end("quiz page")
   }
   if(req.url==="/file")
   {
     fs.readFile("./text.txt",{encoding:"utf-8"},(err,data)=>{
         return res.end(data)
        // console.log(data)
     })
   }
    // res.write("hey1")
    // res.write("hey3")
    // res.end("hello world")
})
server.listen(8080,()=>{
    console.log("listening on 8080")
})