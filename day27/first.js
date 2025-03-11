//callbackhell
//async task
// weather
// const obj=fetch(`http://api.weatherapi.com/v1/current.json?key=f46dc75a11b3455eb9d52556250903&q=London&aqi=no`);
// console.log(obj);
// // setTimeout(()=>{
// //     console.log(obj);
// // },2000);
// //we dont know the time of feching
// //thats why we don`t use settimeout
// obj.then((data)=>{
//     console.log(data);
// }
// );


const promisses=fetch(`http://api.weatherapi.com/v1/current.json?key=f46dc75a11b3455eb9d52556250903&q=London&aqi=no`);
console.log(promisses);
// setTimeout(()=>{
//     console.log(obj);
// },2000);
//we dont know the time of feching
//thats why we don`t use settimeout

// 1...
// promisses.then((response)=>{
//     console.log(response);
   
//     // console.log(response.json());
//     const pro1=response.json();
//     pro1.then((data)=>{
//         console.log(data);
//     });
// }
// );

// 2...

promisses
.then((response)=> response.json())
.then((data)=>console.log(data.current.temp_c))
.catch((error)=>console.log(error));
// console.log(data.current.temp_c);

// promisses.then((response)=>{
//     console.log(response);
// }
// ).catch((error)=>{
//     console.log(error);
// })