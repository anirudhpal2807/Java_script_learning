// function timing(){
// const timer=document.getElementById("root");
// const now=new Date();
// timer.innerHTML=now;
// const IndianTime=now.toLocaleTimeString();
// timer.innerHTML=IndianTime;}

// setInterval(timing(),1000);


// const timer=document.getElementById("root");
// timer.style.fontSize="200px";
// timer.style.display="flex";
// timer.style.justifyContent="center";
// timer.style.alignItems="center";
// timer.style.backgroundColor="orange";
// timer.style.color="red";
// timer.style.height="100vh";
function timing() {
    const timer = document.getElementById("root");
    const now = new Date();
    const IndianTime = now.toLocaleTimeString();
    timer.innerHTML = IndianTime;
  }
  
  // Call the function every second
  setInterval(timing, 1000);
  
  // Style the timer element
  const timer = document.getElementById("root");
  timer.style.fontSize = "200px";
  timer.style.display = "flex";
  timer.style.justifyContent = "center";
  timer.style.alignItems = "center";
  timer.style.backgroundColor = "orange";
  timer.style.color = "red";
  timer.style.height = "100vh";
  
