// //call_back function
// function fetchuser(callback){
//     console.log("fetching the data of user.......");
//     setTimeout(() => {
//         console.log("data fetch successfully.....");
//         const name="rohit";
//         //data get from backend

//         // meet(name);
//         // greet(name);
//         callback(name);
        
//     }, 2000);
// }
// function meet(name){
//     console.log(`hello ${name},i will meet you`);
// }
// function greet(name){
//     console.log(`hello ${name},how are you`);
// }
// function edit(name) {
//     console.log(`edit ${name} user name`)
    
// }
// // fetchuser(meet);
// // fetchuser(greet);
// fetchuser(meet);
// fetchuser(edit);


//call_back function
// function fetchuser(callback){
//     console.log("fetching the data of user.......");
//     setTimeout(() => {
//         console.log("data fetch successfully.....");
//         const obj={
//             name:"Anirudh",
//             age:21,
//             gender:"male",
//             salary: 200000
//         }
//         //data get from backend

//         // meet(name);
//         // greet(name);
//         callback(obj);
        
//     }, 2000);
// }
// function meet(obj){
//     console.log(`hello ${obj.name},i will meet you`);
// }
// function greet(obj){
//     console.log(`hello ${obj.name},how are you`);
// }
// function edit(obj) {
//     console.log(`edit ${obj.name} user name`)
    
// }
// function editage(obj){
//     console.log(`edit ${obj.age} user age `);
// }
// // fetchuser(meet);
// // fetchuser(greet);
// fetchuser(meet);
// fetchuser(edit);
// fetchuser(editage);


// function fetchuser(callback){
//     console.log("fetching info of user");
//     setTimeout(() => {
//         console.log(" user data fetch successfully.....");
//         const obj={
//             name:"Anirudh",
//             age:21,
//             gender:"male",
//             salary: 200000
//         }
        
//         callback(obj);
        
//     }, 2000);
// }

// fetchuser(edit);


//order dominos 
function placeoder(callback){
    console.log("talking to dominos")
    setTimeout(() => {
        console.log("order placed successfuly")
        callback();
    }, 2000);
}

function prepareOrder(callback){
    console.log("pizza preparation started..");
    setTimeout(() => {
        console.log("pizza prepared");
        callback()
    }, 5000);
}
 
// placeoder();
// prepareOrder();
function picupOrder(callback){
    console.log("picup the order");
    setTimeout(() => {
        console.log("order picked up by delivery boy");
        callback();
    }, 3000);
}
// picupOrder();

function deliverOrder(){
    console.log("delivery boy on the way");
    setTimeout(() => {
        console.log("order deliver succesfully");
        
    }, 6000);
}

// deliverOrder();
// placeoder(prepareOrder);
placeoder(()=>{
    prepareOrder(()=>{
        picupOrder(()=>{
            deliverOrder();
        });
    });
});

//ahi h callback hell ak uder ak call ho rha h function
