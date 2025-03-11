// const red=document.getElementById('Red');
// const body=document.body;
// red.addEventListener('click',()=>{
//     body.style.backgroundColor='red';
// })
// const red = document.getElementById('red');
// const green = document.getElementById('green');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const purple = document.getElementById('purple');
// const body = document.body;
// red.addEventListener('click', () => {
//     body.style.backgroundColor = 'red';  // Use 'backgroundColor' instead of 'backgroundcolor'
// });
// green.addEventListener('click', () => {
//     body.style.backgroundColor = 'green';  // Use 'backgroundColor' instead of 'backgroundcolor'
// });
// blue.addEventListener('click', () => {
//     body.style.backgroundColor = 'blue';  // Use 'backgroundColor' instead of 'backgroundcolor'
// });
// orange.addEventListener('click', () => {
//     body.style.backgroundColor = 'orange';  // Use 'backgroundColor' instead of 'backgroundcolor'
// });
// purple.addEventListener('click', () => {
//     body.style.backgroundColor = 'purple';  // Use 'backgroundColor' instead of 'backgroundcolor'
// });

// 1st optimize
// const button=document.querySelectorAll('button');
// const body=document.body;
// button.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         body.style.backgroundColor=button.id;
//     })
// })

//second optimize
const root=document.getElementById('root');
root.addEventListener('click',()=>{
    console.log(event.target);
    console.log(event.target.tagName);
    if(event.target.tagName=='BUTTON'){
    document.body.style.backgroundColor=event.target.id;}
    else
    return
    setTimeout(()=>{
    root.remove();

    },5000);

})