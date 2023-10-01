let xposition = document.getElementById("x-pos");
let yposition = document.getElementById("y-pos");

window.addEventListener("mousemove",(event)=>{
    const x = event.clientX;
    const y = event.clientY;

    xposition.innerText = x;
    yposition.innerText = y;
});