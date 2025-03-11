// for of loop
//for of loop is use for value itiration
// const arr=[1,3,4,5,4,4,2];
// for(let value of arr){
//     console.log(value);
// }
// let string="hello dosto kaise ho app log";
// for(let value of string){
//     console.log(value);
// }
// const obj={
//     name:"anirudh",
//     age:21,
//     gender: "male",
//     city:"khaga"
// }
// // for(let value of obj){
// //     console.log(value);
// // }
// //dusre method se nikalenge
// for(let value of Object.values(obj)){
//     console.log(value);
// }
// for(let value of Object.keys(obj)){
//     console.log(value);
// }
//call back function
// function name(){
//     console.log("hello my name is anirudh pal");
// }
// function greet(){
//     console.log("i am call back function");
// }
// function name1(fun){
//     console.log("hello my name is anirudh pal");
//     fun();
// }
// function greet(){
//     console.log("i am call back function");
// }
// name1(greet);
// function fetchData(){
//     console.log("i am feching data");

// }
// setInterval(fetchData,500);
///for each function
// let arr=[10,20,30,40,50];
// arr.forEach(function(num){
// console.log(num)});
// arr.forEach(num=>console.log(num));


//filter
// let arr=[10,20,30,40,50,21,23,43];
// const result=arr.filter((num)=>{
//     return num%2==0;
// })
// console.log(result);
//real world filter example
// const student=[
    
//        { name:"rohan",age:21,marks:70},
//        { name:"ram",age:31,marks:80} ,
//        { name:"aditya",age:27,marks:60},
//        { name:"satendra",age:29,marks:40},
//        { name:"raj",age:41,marks:56},

    
// ];
// const result=student.filter((value)=>{
//    return value.marks>=50;
// })
// //using disructure
// const result1=student.filter(({marks})=>{
//     return marks>=50;
//  })
// console.log(result);
// console.log(result1);

/// map
const arr=[1,2,3,4,5,6,7];
const result=arr.map(num=>{
    return num*num;
})
const result1=arr.map((num,index,a)=>{
    return num*num*index;
})

console.log(result);
console.log(result1);

//using map and filter simultaneously
const r=[1,2,3,4,5,6,7,8];
const result3=r.filter((value)=>value%2==0).map((value)=>value*value).map((value)=>value/2);
console.log(result3);