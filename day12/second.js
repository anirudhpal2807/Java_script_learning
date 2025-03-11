//scope ke baare me
//global scope local scope(function scope),block scope
let a=10;
var b=20;
const c=30;
//abc are global scope
console.log(a);
console.log(b);
console.log(c);
function greet(){
    console.log(a);
console.log(b);
console.log(c);
let d=30
//fuction scope

}

greet();
// console.log(d); bahr nhi access ker sakte h


if(true){
    let d=30;
    var e=90;
    //block scope
}
console.log(e);
//isiliye hum var nhi le sakte
let amount =20;
if(true){
    let amount=30;
    console.log(amount);
}
greet();
function greet(){
    console.log("hello coder army");

}

const meet=function(){
    console.log("sab razi kushi");
}
greet();
meet();