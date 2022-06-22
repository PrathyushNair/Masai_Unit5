function read(see,filename){
   return  (see.readFile(filename,{encoding:"utf-8"},(err,data)=>{
        console.log(data) 
    }))
}

function append(see,content,filename){
  
    return  (see.appendFile(filename,content+" ","utf-8",(err)=>{
        if(err)
        {
            console.log(err)
            return
        }
        console.log("Data appended")
    }))
}

function dlt(see,todelete){
    let path=todelete
   
    return  (see.unlink(path,(err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(path," deleted")
        
    }))
}

function create(see,filename){
    let newfile=filename
    return(
        see.open(newfile, 'w', function (err, file) {
          if (err) throw err;
          console.log('Saved!');
        }))
}


function rename(see,oldname,newname){
    see.rename(oldname, newname, function (err) {
        if (err) throw err;
        console.log('File Renamed!');
      });
}

module.exports={rename,read,append,create,dlt}