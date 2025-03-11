const A=["The only way to do great work is to love what you do.",
"In the middle of every difficulty lies opportunity.",
"You miss 100% of the shots you don’t take.",
"Success is not final, failure is not fatal: It is the courage to continue that counts.",
"The journey of a thousand miles begins with one step.",
"What lies behind us and what lies before us are tiny matters compared to what lies within us.",
"Be yourself; everyone else is already taken.",
"It does not matter how slowly you go as long as you do not stop.",
"Don’t wait. The time will never be just right.",
"Happiness is not something ready-made. It comes from your own actions.",
"The only limit to our realization of tomorrow is our doubts of today.",
"Success is not how high you have climbed, but how you make a positive difference to the world.",
"Don’t count the days, make the days count.",
"The best way to predict the future is to create it.",
"Your time is limited, so don’t waste it living someone else’s life.",
"Believe you can and you're halfway there.",
"The secret of getting ahead is getting started.",
"It’s not whether you get knocked down, it’s whether you get up.",
"I am not a product of my circumstances. I am a product of my decisions.",
"Doubt kills more dreams than failure ever will.",
"You can never cross the ocean until you have the courage to lose sight of the shore.",
"Act as if what you do makes a difference. It does.",
"There are no shortcuts to any place worth going.",
"Everything you’ve ever wanted is on the other side of fear.",
"The future belongs to those who believe in the beauty of their dreams.",
"It always seems impossible until it’s done.",
"The only thing standing between you and your goal is the story you keep telling yourself.",
"Our lives begin to end the day we become silent about things that matter.",
"You are never too old to set another goal or to dream a new dream.",
"When you have a dream, you’ve got to grab it and never let go.",
"If you can dream it, you can do it.",
"The best revenge is massive success.",
"Life is what happens when you're busy making other plans.",
"Your life does not get better by chance, it gets better by change.",
"The harder you work for something, the greater you’ll feel when you achieve it.",
"Don’t be afraid to give up the good to go for the great.",
"Do what you can, with what you have, where you are.",
"Success is not the key to happiness. Happiness is the key to success.",
"Keep your face always toward the sunshine—and shadows will fall behind you.",
"What we think, we become.",
"Opportunities don't happen, you create them.",
"Do not go where the path may lead, go instead where there is no path and leave a trail.",
"If you don’t build your dream, someone will hire you to help build theirs.",
"If you're not making mistakes, then you're not doing anything.",
"The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
"It is never too late to be what you might have been.",
"Nothing is impossible, the word itself says ‘I’m possible!’",
"Life isn’t about finding yourself. Life is about creating yourself.",
"You can't go back and change the beginning, but you can start where you are and change the ending.",
"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."];

// function genrateQuote(){
// const element=document.getElementById("quote");
// const index=Math.floor(Math.random()*A.length);
// element.innerHTML=A[index];}
// setInterval(genrateQuote,5000);



function getRandomColor() {
    const letters = '0123456789ABCDEF';
    const color=document.getElementById("b");
    let color1 = '#';
    for (let i = 0; i < 6; i++) {
      color1 += letters[Math.floor(Math.random() * 16)];
    }
   color.style.backgroundColor=color1;
  }
  
  // Change the background color every 5 seconds
  setInterval(function() {
   color  = getRandomColor();
  }, 5000); 


  function getRandomColo() {
    const letters = '0123456789ABCDEF';
    const colo=document.getElementById("c");
    let colo1 = '#';
    for (let i = 0; i < 6; i++) {
      colo1 += letters[Math.floor(Math.random() * 16)];
    }
   colo.style.backgroundColor=colo1;
  }
  
  // Change the background color every 5 seconds
  setInterval(function() {
   colo  = getRandomColo();
  }, 6000); 

  const button=document.querySelector('button');
  button.addEventListener('click',()=>{
    const element=document.getElementById("quote");
const index=Math.floor(Math.random()*A.length);
element.innerHTML=A[index];

  })
  
  