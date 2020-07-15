var button=document.querySelectorAll("button");

for (var i=0;i<button.length;i++){
button[i].addEventListener("click",function () {
var char=this.textContent;
drum(char);
buttonAnimation(char);
})}

function drum(char){
  if(char==='w'){
    var tom1=new Audio('sounds/tom-1.mp3');
    return tom1.play();

  }else if(char==='a'){
    var tom2=new Audio('sounds/tom-2.mp3');
    return tom2.play();

  }else if(char==='s'){
    var tom3=new Audio('sounds/tom-3.mp3');
    return tom3.play();

  }else if(char==='d'){
    var tom4=new Audio('sounds/tom-4.mp3');
    return tom4.play();

  }else if(char==='j'){
    var snare=new Audio('sounds/snare.mp3');
     return snare.play();

  }else if(char==='k'){
    var crash=new Audio('sounds/crash.mp3');
    return crash.play();

  }else if(char==='l'){
    var kick=new Audio('sounds/kick-bass.mp3');
     return kick.play();

  }else{
    return console.log("Wrong Button!")
  }
}

document.addEventListener('keydown',function(event){
drum(event.key)
buttonAnimation(event.key);
})


function buttonAnimation(currentKey){
  var button_1=document.querySelector("."+currentKey)
  button_1.classList.add("pressed");
setTimeout(function (){
  button_1.classList.remove("pressed");
},100)
}
