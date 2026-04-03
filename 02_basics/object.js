const mysym=Symbol("AAB")
//non singleton
const jsuser = {
    [mysym]:"ayusgggg",
    name:"Ayush",
    age:19,
    location : "uttarakhand",
    email : "abc232@gmail.com"

}
// console.log(jsuser["email"])
// console.log(jsuser.email)
// console.log(jsuser[mysym])
// console.log(typeof mysym)
// 
// Object.freeze(jsuser)
// jsuser.name="rahul"
// console.log(jsuser)
jsuser.greeting=function(){
    console.log(`Hello user ${this.name}`)
}
jsuser.greeting()

