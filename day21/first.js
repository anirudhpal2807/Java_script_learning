// function attach(content){
// const element=document.createElement('li');
// element.innerHTML=content;

// const parent=document.getElementById("root");
// parent.appendChild(element);
// }
// attach("TS");
// attach("React")
// attach("Node")
// const element2=document.createTextNode("hello coder army");
// const parent=document.getElementById("root");
// parent.appendChild(element2);
// //////
// const element3=document.createAttribute("id");



// element3.value="first";
// const curr_list=document.querySelector('li');
// // curr_list.setAttributeNode(element3);
// ///
// //access of second list
// parent.children[1].setAttributeNode(element3);

// // access atribute
// console.log(parent.getAttribute("id"));
// console.log(parent.getAttribute("class"));
// parent.setAttribute("custom","20");
// parent.removeAttribute("custom");


// //********************************Add node to the DOM********
// const parent=document.getElementById("root");
// const element=document.createElement('li');
// element.innerHTML="TS";
// // parent.prepend(element);
// const child2=parent.children[1];
// // parent.insertBefore(element,child2);
// parent.replaceChild(element,child2);



//**************** */
// const parent=document.getElementById("root");
// // parent.innerHTML +="TS";
// parent.innerHTML +="<LI>TS</LI>";
//*******
const parent=document.getElementById("root");
const element=document.createElement('div');
element.innerHTML="hello coder army";
parent.insertAdjacentElement("beforebegin",element);
parent.insertAdjacentElement("afterend",element);

//delete
document.querySelector('li').remove();