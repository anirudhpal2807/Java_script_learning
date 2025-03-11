// let obj={};
// obj.name="Anirudh";
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// // writeable tell us to change our key value
// obj.name="rajan";
// console.log(obj);
// let obj={};
// Object.defineProperty(obj,'name',{
//     value:"ram",
//     writable:true,
//     enumerable:true,
//     configurable:true
// })
// obj.name="syam";
// console.log(obj);
// let obj={
//     name:"Anirudh",
//     age:21,
//     account_number:121232,
//     balance:121212121
// }
// //name aur account number kabhi change nhi hone chahiye
// Object.defineProperty(obj,"name",{
//     writable:false,
//     enumerable:false,
// })
// obj.name="Anurag";
// console.log(obj);
// //jis jis key ka enumerable true hoga khali ussi ko print karega
// for(let keys in obj){
//     console.log(keys);
// }


// const customer={
//     name:"Anirudh",
//     age:21,
//     gender:"male",
//     amount:12111
// }
// let customer2= Object.create(customer);
// customer2.city="haridwar";
// customer2.place="delhi";
// for(let key in customer){
//     console.log(key);
// }
// for(let key in customer2){
//     console.log(key);
// }
// console.log(Object.getOwnPropertyDescriptor(customer2,'place'));
// console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString'));
const arr=[10,2,30,40];
for(let key in arr){
    console.log(key);
}