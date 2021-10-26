// let listReverse=document.querySelector(".list-reverse");
// let classList=document.getElementsByClassName("list");
// console.log(listReverse)
// console.log(classList[0].children);
// let d={
//     a:[]
// }
// for (let index = 0; index < classList[0].children.length; index++) {
//     const element = classList[0].children[index];
//     d.a[index]=element;
// }
// console.log(d.a[1]);
// console.log(classList[0].children[1]);
// console.log(window.innerWidth);
// if(window.innerWidth<="1000"){
//     console.log("i'm here");
//     let tempLength=window.innerWidth;
//     let result=1000-tempLength;
//     let result2=result/143;
//     console.log(result2);
//     for(let index=classList[0].children.length-2,j=Math.round(result2+1);index>0,j>1;index--,j--){
//         listReverse.innerHTML+=classList[0].children[index].outerHTML;
//         classList[0].children[index].remove();
//     }
// }
// console.log(listReverse);
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if (header.style.opacity == "1")
        header.style.opacity = "0.8";
    else
        header.style.opacity = "1";

}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header.style.opacity = "0.8";

}