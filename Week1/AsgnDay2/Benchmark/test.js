const http=require("http")
const fs=require("fs")
const server=http.createServer((req,resp)=>{
    if(req.url==="/textsync")
    {
        const data=fs.readFileSync("./text.txt",{encoding:"utf-8"})
        resp.write(data)
        resp.end()
    }
  if(req.url==="/textasync")
    {  
        // console.log(req.url)
        fs.readFile("./text.txt",{encoding:"utf-8"},(err,data)=>{
            
            resp.write(data)
            resp.end()
        })
       
       
    }
  if(req.url==="/textstream")
    {
       const readStream=fs.createReadStream("./text.txt",{encoding:"utf-8"})
       readStream.pipe(resp)
    }
    if(req.url==="/textpromise")
    {
        fs.promises.readFile("./text.txt")
        .then((res)=>{
            resp.write(res)
            resp.end()
        })
    }
  
})
server.listen(8080,()=>{
    console.log("server started")
})