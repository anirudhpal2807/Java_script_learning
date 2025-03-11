// const d= new Date();
// console.log(d);
// // console.log(d.toDateString());
// // console.log(d.toString());
// // console.log(d.toISOString());
// console.log(typeof d);
// const d1=new Date(2000);
// console.log(d1);
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getMonth());
// //always give in number 0 based
// console.log(d.getSeconds());
// const now=Date.now();
// console.log(now);
// const d= new Date("2025-2-12");
// // console.log(d);
// // console.log(d.toDateString());

// d.setFullYear(2025);
// d.setMonth(1);
// d.setDate(12);
// console.log(d);
// console.log(d.toString());

//date calculation
// const date1= new Date();
// const date2=new Date("2025-4-12");
// console.log(date2-date1);
//difference bt date millisecond me ayega

//coundown
// cowndown timer for olymapic
//days hour minutes second
// const date=new Date();
// const date3=new Date("2028-7-14T00:00:00");
// const date4=date3-date;
// const days=Math.floor(date4/(1000*60*60*24));
// console.log(days);
// console.log(date4);
const date = new Date();
const date3 = new Date("2028-07-14T00:00:00"); // Use 'Z' for UTC or ensure consistent timezone
const date4 = date3-date; // Convert both to milliseconds before subtraction
const days = Math.floor(date4 / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
const hour =Math.floor(date4/(1000*60*60)%24);
const min =Math.floor(date4/(1000*60)%60);
const sec =Math.floor(date4/(1000)%60);

console.log(days);
console.log(hour);
console.log(min);
console.log(sec);
console.log(`Olympics coundown time: days:${days} hour:${hour} minutes:${min} second:${sec} `);