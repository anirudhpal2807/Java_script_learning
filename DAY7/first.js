const arr=[2,4,3,5,2,"Anirudh","pal"];
console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr.at(0));
// console.log(arr.at(-1));
// const newarr=arr;
// console.log(newarr);
// console.log(typeof newarr);
// console.log(newarr==arr);
// const newarr1=structuredClone(arr);
// console.log(newarr1==arr);
//push
// arr.push(90);
// console.log(arr);
// arr.pop();
// console.log(arr);
// //add element in star unshift
// arr.unshift(20);
// console.log(arr);
// //delete element from start
// arr.shift();
// console.log(arr);
// //delete element
// delete arr[0];
// console.log(arr);
// console.log(arr.indexOf(5));
//

//slice
// console.log(arr.slice(2,4));
//splice
// console.log(arr.splice(2,6));
// console.log(arr);
//splice(starting_ index,total_element_delete,add_value)
// arr.splice(2,3,"money",90);
// console.log(arr);
// arr.splice(2,0,"ram");
// console.log(arr);

//convert to string
// console.log(typeof arr.toString());
// console.log(arr.join(" "));
// let arr2=[3,54,2,234];
// let arr3=[7, 43, 434, 44,3,2];
// let arr5=[44,54,43,224,33]
// let arr4=arr2.concat(arr3,arr5);
// console.log(arr4);
// arr2.push(arr4);
// console.log(arr2);

//2d array
let arr2d=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2d);
console.log(arr2d[1][0]);
let arr3d=[[1,2,[3,4]],[5,6,[7,8]],[9,10,[11,12]]];
console.log(arr3d);
console.log(arr3d[0][2][0]);
let arrnew=arr3d.flat();
console.log(arrnew.flat());
let ac= new Array(1,2,3,3,3,"rohit");
console.log(ac);
let ac1=new Array(10);
console.log(ac1);