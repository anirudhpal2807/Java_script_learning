const button=document.querySelector('button');
button.addEventListener('click',()=>{
    //read the data
    const input1=document.getElementById('first');
    const number1=Number(input1.value);
    const input2=document.getElementById('second');
    const number2=Number(input2.value);
    if(isNaN(number1)||isNaN(number2))
        return;

    //output the result
    const result=number1+number2;
    const re=document.getElementById('result');
    re.textContent ="Result:" +result;

})


//
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     // Read the data
//     const input1 = document.getElementById('first');
//     const number1 = Number(input1.value);
//     const input2 = document.getElementById('second');
//     const number2 = Number(input2.value);

//     // Output the result
//     const result = number1 + number2;
//     const re = document.getElementById('result');
//     re.textContent = "Result: " + result;  // Concatenate the result with the string
// });
