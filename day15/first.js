//reduce
const arr=[1,3,4,2,5];
//const result=arr.reduce((callback function,initilizer))
const result=arr.reduce((acc,curr)=>{
    console.log(acc,curr);
    acc=acc+curr;
    return acc;
},0)
//accumulater ke under jo hum inisilize karenge jaise aha pr 0 h
console.log(result);
//write in single line
const result1=arr.reduce((acc,curr)=>acc+curr,0);
console.log(result1);
//real world problem
let arr1=["orange","banana","Apple","grapes","orange","banana","Apple","grapes"];
//count how many number of fruit
const result2=arr1.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
    acc[curr]=1;
return acc;

},{Apple:2});
console.log(result2);
