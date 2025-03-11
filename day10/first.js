//nested object
// const user={
//     name:"Anirudh",
//     balance:240,
//     address:{
//         pincode:212655,
//         address1:"hardaspur"
//     }
// }
// console.log(user);
// const user2=Object.assign({},user);
// console.log(user);
// user2.name="anurag";
// user2.address.pincode=212687;
// console.log(user);

//distructure of object
// let obj={
//     name:"Anirudh",
//     age:21,
//     gender: "male",
//     balance:554545454545
// };
// const {name,balance,age}=obj;
// console.log(name,balance,age);
// const {name:full_name,balance:Amount,age:umar}=obj;
// console.log(full_name,Amount,umar);
// const arr=[1,2,3,4,5];
// // const [first,second,third]=arr;
// // console.log(first,second,third);
// const[first,second,...third]=arr;
// console.log(third);
const user={
    name:"Anirudh",
    balance:240,
    arr1:[20,30,40,50],
    
    address:{
        pincode:212655,
        address1:"hardaspur"
        
    },
    greet: function(){
        console.log("hello coder army");
    },
    meet:function(){
        return "hello kaise ho aap log";
    }
 
   
}
const {name,address:add,address:{pincode},arr1:[first]}=user;
console.log(name,add);
console.log(pincode);
console.log(first);
user.greet();
console.log(user.meet());
