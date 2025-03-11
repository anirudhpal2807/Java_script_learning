//if-else
let age=21;
// if(age>=18){
//     console.log("eligible for vote");
// }
// else
// {
//     console.log("not eligible for vote");
// }
// if(age<18){
//     console.log("child");
// }
// else if(age<=37){
//     console.log("young");

// }
// else{
//     console.log("old");
// }

// switch (new Date().getDay()) {
//     case 0:
//         console.log("SUNDAY");
//         break;
//         case 1:
//             console.log("Monday");
//             break;
//             case 2:
//                 console.log("tuesday");
//                 break;
//                 case 3:
//                     console.log("wednesday");
//                     break;
//                     case 4:
//                     console.log("thurshday");
//                     break;
//                     case 5:
//                     console.log("friday");
//                     break;
//                     case 6:
//                     console.log("Suturday");
//                     break;  
                    
//                default:
//                 console.log("not a valid day");     
// }
// //loop
// for(let j=0;j<6;j++){
//     for(let i=0;i<5;i++){
//         console.log(i);
//     }
// }

//while loop
// let i=6;
// while(i<6){
//     console.log(i);
//     i++;
// }
// let i = 0; // Declare and initialize i
// while (i < 6) {
//     console.log(i);
//     i++;
// }
// const array=[1,2,3,4,4,4];
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }
 let j = 10;

do {
    console.log(j); // Runs once even though i is not < 6
    j++;
} while (j < 6);
const obj={
    name:"Anirudh",
    age:21,
    gender:"male",
    city:"prayagraaj",
    Amount:122332
}
const a=Object.values(obj);
const b=Object.keys(obj);
console.log(b);
console.log(a);
for(let i=0;i<b.length;i++){
    console.log(obj[b[i]]);
}