function test1(){
    const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("first promise resolve");
    }, 5000);
}); // ✅ Closing bracket added here
return p1;
 };
function test2(){
const p2 = new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve("second promise resolve");
    }, 5000);
}); // ✅ Properly closed p2 as well
return p2;
};

async function greet() {
    console.log("hello i greet you");
    const data1 = await test1();
    console.log(data1);
    
    const data2 = await test2();
    console.log(data2);
}

greet();
console.log("hello coder army");
console.log("kaise h app sab anirudh");