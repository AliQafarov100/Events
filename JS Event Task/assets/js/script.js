
let click = document.querySelectorAll(".clicks");
let items = document.querySelector(".elements");

click.forEach(butt=>{
    butt.addEventListener("click",function(){

        let value = butt.getAttribute("data");

        let val = butt.getAttribute("elem");
        console.log(val)
        console.log(value);
    })
})