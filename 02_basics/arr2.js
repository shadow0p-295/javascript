const marvelheroes=["Thor","Ironman","Spidermn"]
const dcheroes=["superman","flash","batman"]

// marvelheroes.push(dcheroes)
// console.log(marvelheroes[3])



//const newarr=marvelheroes.concat(dcheroes)
//console.log(newarr[4])


// const newarr=[...marvelheroes,...dcheroes]
// console.log(newarr)
const a="Hitesh"
console.log(Array.isArray(a))
console.log(Array.from(a))
console.log(Array.from({name:"Ayush"}))    //interestin

let score1=100
let score2=200
let score=300
console.log(Array.of(score1,score2,score))