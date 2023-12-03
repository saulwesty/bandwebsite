///bars click on

var figure=document.getElementById("bars");
figure.addEventListener("click", toggler);
var optional=document.getElementById("optional")
var bodyop=document.getElementById("body")

function toggler(e){
    var eventTarget=e.target;

    if (eventTarget.className=="fa-solid fa-bars"){
        eventTarget.className="fa-solid fa-x";
        optional.style.visibility="visible";
        bodyop.style.opacity="0.1"
        
        
    }
    else if (eventTarget.className=="fa-solid fa-x"){
        eventTarget.className="fa-solid fa-bars";
        optional.style.visibility="hidden";
        bodyop.style.opacity="1"
    }
}

const pressme = document.getElementById("pressme");
pressme.addEventListener("click",function(){
    document.documentElement.scrollTop = 0; 
});


/// float in top box
let z = 0;
const floatin=document.getElementById("textual")

function opacing() {
    floatin.style.opacity = z;
    if (z >= 1) {
        clearInterval(intervalId); 
    }
    z += 0.01;
}
var intervalIdthree = setInterval(opacing, 50); 

