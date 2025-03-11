
// console.log(20);
// // console.log(window==this);
// "use strict"
// let a=10;
// const b=20;
// var c=30;
// console.log(this.a);
// d=50;
// console.log(d);
// "use strict"
// let obj={
//     name:10
// }
// Object.freeze(obj);
// obj.name=30;
// console.log(obj);
// Global scope
function meet(){
    console.log("global");
}

meet(); // Direct call
global.meet(); // Call via globalThis
const obj1={
    name:"Anirudh",
    age:21,
    kaam:"chori",
    great: function(){
        console.log(this);
    }
}
obj1.great();