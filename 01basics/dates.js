let myDate = new Date();
// console.log(myDate.toISOString());
// console.log(myDate.toDateString())
// console.log(myDate.toString());
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString());

// let createdDate=new Date(2023,4,8)
// console.log(createdDate.toLocaleString());
// 
// let createdDate1=new Date("2023-01-08")
// console.log(createdDate1.toLocaleString());

// let timestamp=Date.now();
// 
// console.log(Math.floor(Date.now()/1000))

let newdate=new Date();
// console.log(newdate.toDateString())
// console.log(newdate.getDate());
// console.log(newdate.getDay())
// console.log(newdate.getMonth()+1)

console.log(newdate.toLocaleString('en-IN',{
  weekday:"long",
  hour:"numeric"
}))
