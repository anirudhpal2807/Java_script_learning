//HOW creat object
// const obj={
//     name:"Anirudhpal",
//     account_number:113123312,
//     gender:"Male",
//     age:30,
//     0:100,
//     1:200,
//     undefined: 90,
//     null:"MOHAN"


// }
// console.log(obj);
// console.log(obj.gender);
// console.log(obj["gender"]);
// console.log(obj["age"]);
// console.log(obj["0"]);
// console.log(obj[1]);
// const arr=[100,200,300];
// console.log(arr[0],obj[0]);
// console.log(obj["undefined"]);
// console.log(obj["null"]);


// //create object 2 method
// const person=new Object();
// //propery add
// person.name="Anirudh";
// person.age=30;
// person.gender="male";
// person.account_number=12333;
// console.log(person);
// //property delete
// delete person.age;
// console.log(person);
// //modify
// person.name="Anurag";
// console.log(person);

//create object 3rd method
// class people{
//     constructor(na,ag,gen
//     ){
//         this.name=na;
//         this.age=ag;
//         this.gender=gen;

//     }
// }
// let per1=new people("Anirudh",20,"male");
// console.log(per1);

let obj={
    name:"Anirudh",
    age:21,
    gender:"male",
    account_number:1133

};
//keys
const arr=Object.keys(obj);
console.log(arr);
//value
const arr1=Object.values(obj);
console.log(arr1);
//keys ans values
const arr3=Object.entries(obj);
console.log(arr3);
//assign
const obj1={a:10,b:20};
const obj2={c:220,d:45};
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);

// let obj6=obj2;
//shallow copy
// obj2.a=10;
// console.log(obj6,obg2)
//deep copy