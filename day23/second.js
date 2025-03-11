const grandparent=document.getElementById('grandparent');
const parent=document.getElementById('parent');
const child=document.getElementById('child');

//event bubbling and event capturing
child.addEventListener('click',(event)=>{
    console.log("child_clicked");
    console.log(event.target);
    event.stopPropagation();
},false)
parent.addEventListener('click',(event)=>{
    console.log("parent_clicked");
    console.log(event.target);
},false)
grandparent.addEventListener('click',(event)=>{
    console.log("grandparent_clicked");
    console.log(event.target);
},false)


//for capture
// child.addEventListener('first_event',call_back,capture);
// child.addEventListener('click',()=>{
//     console.log("child_clicked");
// },true)
// parent.addEventListener('click',()=>{
//     console.log("parent_clicked");
// },true)
// grandparent.addEventListener('click',()=>{
//     console.log("grandparent_clicked");
// },true)