//set
//set give unique value
const set1 = new Set([10,20,30,40,50,10,20,30]);
console.log(set1);
console.log(typeof set1);
//second way to declare set
const set2=new Set();
set2.add(2);
set2.add(4);
set2.add("rohan");
set2.add("raja");
set2.add(2);
console.log(set2);
console.log(set2.size);
//delete
set2.delete(2);
// set2.clear(2);
//pura hi clear ho jayega
console.log(set2);
const user_id=new Set(["anirudh@9","rohit27","Anurag43","ravann29"]);
const new_user="anirudh@9";
console.log(user_id.has(new_user));

//union
const arr=[10,2,3,12,4,35,3];
let set4=new Set(arr);
console.log(set4);
arr2=[...set4];
console.log(arr2);



//union
let set3=new Set([10,20,30,40,50,60,70,80,64,243,2344,45]);
let set5=new Set([10,20,30,40,50,60,34,44,5,6,2242,532]);
let set6=new Set([...set3,...set4]);
console.log(set6);
//intersection
const result=[...set3].filter((num)=>set5.has(num));
console.log(result);
const result2 = new Set(result);
console.log(result2);
//ittrate
for(let value of set3){
    console.log(value);
}
set3.forEach((value)=>console.log(value));