let obj={
    name:"Anirudh",
    age:21,
    gender:"Male",
    Amount:321212,
    city:"Haridwar"
}
// for(let keys in obj){
//     console.log(keys,obj[keys]);
// }
let obj2=Object.create(obj);
obj2.id="abc";
obj2.money=430;
console.log(obj2);
console.log(Object.keys(obj2));
for(let keys in obj2){
    console.log(keys);
}