// Your code goes here

// mouseover
const navBarHover = document.querySelectorAll('a');

navBarHover.forEach(element => {
    element.addEventListener('mouseover', navBarHover => {
        navBarHover.stopPropagation();
        navBarHover.target.style.color = "red";
     })
     element.addEventListener('mouseleave', navBarHover => {
        navBarHover.stopPropagation();
        navBarHover.target.style.color = "#212529";
     })
});


// keydown

window.addEventListener("keydown", event => {
   alert('STOP KEYBOARD MASHING');
 });


// wheel
const containerImg = document.querySelector('.intro img');

let i = 1;
let j = 0.2;
containerImg.addEventListener('wheel', function(){
   if(i<=0 || i>1){
      j *= -1;
   }
   i += j;
   containerImg.style.opacity = i;
});


// drag/drop

const footerDrop = document.querySelector('.footer');
footerDrop.setAttribute('ondrop', 'drop(event)');
footerDrop.setAttribute('ondragover', 'allowDrop(event)');

const btnDrag = document.querySelectorAll('.btn')
btnDrag.forEach(element => {
   element.setAttribute('id', 'drag1');
   element.setAttribute('draggable', true);
   element.setAttribute('ondragstart', 'drag(event)');
   element.setAttribute('width', '336px');
   element.setAttribute('height', '69px');
});

function allowDrop(ev) {
   ev.preventDefault();
 }
 
 function drag(ev) {
   ev.dataTransfer.setData("text", ev.target.id);
 }
 
 function drop(ev) {
   ev.preventDefault();
   var data = ev.dataTransfer.getData("text");
   ev.target.appendChild(document.getElementById(data));
 }


// load
window.addEventListener("load", event => {
   alert("all resources loaded! yay!");
 });

 // double click
 const doubleClickImg = document.querySelector('.inverse-content img');
 
 doubleClickImg.addEventListener('dblclick', element => {
   element.target.style.display = 'none';
 });


// focus/blur

 const clickImg = document.querySelector('.content-destination img');
 
 clickImg.addEventListener('mousedown', element => {
   element.target.style.visibility = 'hidden';
 });


 // scroll

const pTags = document.querySelectorAll('.content-pick p')

pTags.forEach(element => {
   element.addEventListener('mouseup', event => {
      event.target.style.color = "red";
   })
});

// GSAP

const btnStuff = document.querySelectorAll(".btn");

btnStuff[0].addEventListener('mouseover', event => {
   TweenMax.to(btnStuff[0], 1, {width:"225px", height:"60px"});
})
btnStuff[0].addEventListener('mouseleave', event => {
   TweenMax.to(btnStuff[0], 1, {width:"200px", height:"45px"});
})

btnStuff[1].addEventListener('mouseover', event => {
   TweenMax.to(btnStuff[1], 1, {width:"225px", height:"60px"});
})
btnStuff[1].addEventListener('mouseleave', event => {
   TweenMax.to(btnStuff[1], 1, {width:"200px", height:"45px"});
})

btnStuff[2].addEventListener('mouseover', event => {
   TweenMax.to(btnStuff[2], 1, {width:"225px", height:"60px"});
})
btnStuff[2].addEventListener('mouseleave', event => {
   TweenMax.to(btnStuff[2], 1, {width:"200px", height:"45px"});
})