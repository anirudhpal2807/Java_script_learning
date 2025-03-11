//map
//key value pair:key should be unique
const map1=new Map();
map1.set(3,90);
map1.set("rohan",30);
map1.set("raj",40);
//key unique rahgi but value change ho jayegi
map1.set("raj",44);

console.log(map1);
 map1.delete(3);
 console.log(map1);
 console.log(map1.has("raj"));
 console.log(map1.size);
 console.log(map1.values());
 const map2= new Map([[
    "name","anirudh"
 ],
 ["Kam","sde"]
]);
console.log(map2);
//iritrate
for(let value of map2){
    console.log(value)
}
for(let [key,value] of map2){
    console.log(key,value)
}