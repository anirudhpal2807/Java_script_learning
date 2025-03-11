// console.log("hello coder army");
// console.log("kaise ho app");
// console.log("mai badiya hu");
// //function

// function greet(){
//     console.log("hello coder army");
//     console.log("kaise ho app");
//     console.log("mai badiya hu");
// }
// greet();
// greet();

// add function
// function add(number1,number2){
//     console.log(number1+number2);
// }
// add(10,19);
// //multiplication
// function mul(number1,number2){
//     console.log(number1*number2);
// }
// mul(10,10);
// const fun=function(){
//     console.log("hello coder army");
//     return "money";
// }
// fun();
// console.log(fun());

//Arroy function
const sum=(number1,number2)=>{
    return number1+number2;
}
console.log(sum(3,4));
//2 method
const sum1=(number1,number2)=> number1+number2;

console.log(sum1(10,4));
const cube=(number1)=> number1*number1*number1;

console.log(cube(10));

const sum2=function(...number){
    console.log(number);

}
//...rest operator
sum2(1,2,4,54);
sum2(1,43,32);

const obj={
    name:"anirudh",
    age:21,
    gender:"male",
    balance:2121212
};
function fun(){
console.log(obj.name,obj.age);
}
fun(obj);
function fun1({age,name}){
    //distructure

    console.log(name,age);
    }
    fun(obj);