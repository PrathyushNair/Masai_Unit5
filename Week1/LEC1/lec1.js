// const os=require("os")
// console.log(os.cpus())

const text=require("fs")
console.log(text.readFileSync("./hello.txt",{encoding:"utf-8"}))

const write=require("fs")
console.log(write.writeFileSync("write.txt","write",{encoding:"utf-8"}))
console.log(write.writeFileSync("write/write.txt","write",{encoding:"utf-8"})) //this does not work.