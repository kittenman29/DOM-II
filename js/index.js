// Your code goes here
// const myMouseOver = document.getElementsByClassName('.nav-link');

// myMouseOver.addEventListener('mouseover', function(event) {
//     console.log(event);
// });


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
