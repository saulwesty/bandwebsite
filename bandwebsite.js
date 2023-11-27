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
/*
///float in yt

let y=0
var floatinone=document.getElementById("floatinone")

function opacingone() {
    
    floatinthree.style.opacity = x;
    if (y >= 1) {
        clearInterval(intervalIdthree); 
    }
    y += 0.001;
}

document.addEventListener('scroll', checkVisibilityone);

function checkVisibilityone(){
  var rect = floatinone.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0){
    var intervalIdone = setInterval(opacingone, 50); 
  } 
}

///float in yt

let x=0
var floatintwo=document.getElementById("floatintwo")

function opacingtwo() {
    
    floatintwo.style.opacity = x;
    if (x >= 1) {
        clearInterval(intervalIdtwo); 
    }
    x += 0.001;
}

document.addEventListener('scroll', checkVisibilitytwo);

function checkVisibilitytwo(){
  var rect = floatintwo.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0){
    var intervalIdtwo = setInterval(opacingtwo, 50); 
  } 
}


///float in yt

let w=0
var floatinthree=document.getElementById("floatinthree")

function opacingthree() {
    
    floatinthree.style.opacity = x;
    if (w >= 1) {
        clearInterval(intervalIdthree); 
    }
    w += 0.001;
}

document.addEventListener('scroll', checkVisibilitythree);

function checkVisibilitythree(){
  var rect = floatinthree.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0){
    var intervalIdthree = setInterval(opacingthree, 50); 
  } 
}


*/

