let user={
    name:"Anirudh",
    age:21,
    gender:"male",
    balance:21000
}
let user1={
    full_name:"Anurag",
    age_:15,
    gender_:"male",
    Amount:2122000
}
const arr=[1,3,4,5];
user1.__proto__=user;
console.log(user1.name);
console.log(arr.__proto__==Array.prototype);
console.log(arr.__proto__.__proto__==Object.prototype);
console.log(arr.__proto__.__proto__.__proto__==null);