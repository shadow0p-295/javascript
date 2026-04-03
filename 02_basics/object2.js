//singleton
//const b = new object()
const a={}
a.name="Ayush"
a.age=19
a.email="AYUUUYUYUYU"
const regularuser ={
    fullname:{
        userfullname:{
            firstname:"Ayush",
            lastname:"Biji"
        }
    }

}
// console.log(a)
// console.log(regularuser.fullname.userfullname.firstname)
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e"}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)

console.log(Object.keys(a))
console.log(Object.values(a))
console.log(Object.entries(a))
console.log(a.hasOwnProperty('age'))