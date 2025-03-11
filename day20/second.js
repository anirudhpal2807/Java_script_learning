const id= document.querySelector('#first');
id.innerHTML="hello money";
const id2=document.querySelector('.header1');
const obj=document.querySelectorAll('header1');
Array.from(obj);
const team=document.getElementsByTagName('li');
let arr=Array.from(team);
console.log(team);
arr.forEach((val)=>{
    console.log(val);
})
console.log(id2.parentNode);
console.log(id2.parentElement);
//
const li=document.querySelector('ul');
console.log(li.childNodes);
console.log(li.children);
console.log(li.firstChild);
console.log(li.lastChild);
console.log(li.firstElementChild);
document.getElementById('first').innerHTML;
document.getElementById('first').innerText;
document.getElementById('first').textContent;