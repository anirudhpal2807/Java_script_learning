//  cart=["pizza","coke","burger"];



// function placeoder( cart,callback){
//     console.log("talking to dominos")
//     setTimeout(() => {
//         console.log("order placed successfuly");
//         const order={orderid:21, food:cart,restrarent:"dominos",location:"Dwarika" }
//         callback( order);
//     }, 2000);
// }

// function prepareOrder( order,callback){
//     console.log("pizza preparation started..");
//     setTimeout(() => {
//         console.log("pizza prepared");
//         const foodDetail={ tokenNo:41,restrorent:order.restrarent,location:order.location}
//         callback(foodDetail);
//     }, 5000);
// }
 
// // placeoder();
// // prepareOrder();
// function picupOrder(foodDetail,callback){
//     console.log("picup the order");
//     setTimeout(() => {
//         console.log("order picked up by delivery boy");
//         const Droplocation=foodDetail.location;
//         callback(Droplocation);
//     }, 3000);
// }
// // picupOrder();

// function deliverOrder(){
//     console.log("delivery boy on the way");
//     setTimeout(() => {
//         console.log("order deliver succesfully");
        
//     }, 6000);
// };

// // deliverOrder();
// // placeoder(prepareOrder);
// // placeoder(cart,(order)=>{
// //     prepareOrder(order,(foodDetail)=>{
// //         picupOrder(foodDetail,(Droplocation)=>{
// //             deliverOrder(Droplocation);
// //         });
// //     });
// // });



// // 2.....
// cart=["pizza","coke","burger"];



// function placeoder( cart){
//     console.log("talking to dominos");
// const pr=new promise(function(resolve,reject){
//     setTimeout(() => {
//         const food_available=true;
//         if(food_available){
//         console.log("order placed successfuly");
//         const order={orderid:21, food:cart,restrarent:"dominos",location:"Dwarika" }
//         resolve( order);}
//         else{
//             reject("food not available")
//         }
//     }, 2000);

// })
//     return pr;
// }

// function prepareOrder( order,callback){
//     console.log("pizza preparation started..");
//     setTimeout(() => {
//         console.log("pizza prepared");
//         const foodDetail={ tokenNo:41,restrorent:order.restrarent,location:order.location}
//         callback(foodDetail);
//     }, 5000);
// }
 
// // placeoder();
// // prepareOrder();
// function picupOrder(foodDetail,callback){
//     console.log("picup the order");
//     setTimeout(() => {
//         console.log("order picked up by delivery boy");
//         const Droplocation=foodDetail.location;
//         callback(Droplocation);
//     }, 3000);
// }
// // picupOrder();

// function deliverOrder(){
//     console.log("delivery boy on the way");
//     setTimeout(() => {
//         console.log("order deliver succesfully");
        
//     }, 6000);
// };

// //using promisses thing is going easy
// placeoder(cart)
// .then((order)=>prepareOrder(order))
// .then((foodDetail)=>picupOrder(foodDetail))
// .then((Droplocation)=>deliverOrder(Droplocation))
// .catch(error=>console.log(error));

//
// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hellow every one");
//     },5000)
// })
// async function greet(){
//     const data1=await p1;
//     console.log(data1);
//     const data2=await p1;
//     console.log(data2);
// }
// greet();

//promise ressolve hone ke baad time nhi leta ak sath hi data aata h



// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello everyone");
//     }, 5000);
// }); // ✅ Closing bracket added here

// const p2 = new Promise((resolve, _reject) => {
//     setTimeout(() => {
//         resolve("Hello everyone");
//     }, 5000);
// }); // ✅ Properly closed p2 as well

// async function greet() {
//     const data1 = await p1;
//     console.log(data1);
    
//     const data2 = await p2;
//     console.log(data2);
// }

// greet();

 function test1(){
    const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello everyone");
    }, 5000);
}); // ✅ Closing bracket added here
return p1;
 };
function test2(){
const p2 = new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve("Hello everyone");
    }, 5000);
}); // ✅ Properly closed p2 as well
return p2;
};

async function greet() {
    const data1 = await test1();
    console.log(data1);
    
    const data2 = await test2();
    console.log(data2);
}

greet();