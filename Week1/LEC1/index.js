// from local system
const {sum}=require("./test")
const {diff}=require("./test")
console.log(sum(3,2))
console.log(diff(3,1))

//from npm
const iseven=require("is-even")
console.log(iseven(7))

//from coremodules

const text=require("fs")
console.log(text.readFileSync("./hello.txt",{encoding:"utf-8"}))

const write=require("fs")
console.log(write.writeFileSync("write.txt","write",{encoding:"utf-8"}))


