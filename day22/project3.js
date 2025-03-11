document.body.addEventListener('click',()=>{
    const circle=document.createElement('div');
    circle.className='circle';
    circle.textContent="Hii";
    const tc=document.getElementsByClassName('circle');
    // tc.style.color="red";
    
    const x = event.clientX;
    const y = event.clientY;
    circle.style.left=`${x-25}px`

    circle.style.top=`${y-25}px`
    const color=["red","green","blue","yellow","grey","pink","orange"];
    circle.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
    document.body.appendChild(circle);
    setTimeout(()=>{
        circle.remove();

    },5000);
})