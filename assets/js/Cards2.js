document.addEventListener("DOMContentLoaded", function(){

const btn = document.getElementById("btn");
const text = document.getElementById("text");
const sound = document.getElementById("clickSound");

btn.addEventListener("click", function(e){

    sound.play();

    const circle = document.createElement("span");
    circle.classList.add("ripple");
    const rect = btn.getBoundingClientRect();
    circle.style.left = (e.clientX - rect.left) + "px";
    circle.style.top = (e.clientY - rect.top) + "px";
    btn.appendChild(circle);

    setTimeout(()=>circle.remove(),600);

    text.innerHTML = '<span class="spinner"></span>';

    setTimeout(()=>{
        btn.classList.add("success");
        text.innerHTML = '<span class="tick">✔ Done</span>';
    },2000);

    setTimeout(()=>{
        btn.classList.remove("success");
        text.innerHTML = 'Submit';
    },4000);
});

});