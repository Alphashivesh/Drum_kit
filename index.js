let i = 0;
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function () { 
  makeSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
});
}

document.addEventListener("keypress", function (event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "a":
      var  crash = new Audio("sounds/crash.wav");
     crash .play();
      break;
    case "s":
      var kickbass = new Audio("sounds/kick-bass.wav");
     kickbass .play();
      break;
    case "d":
      var  snare = new Audio("sounds/snare.mp3");
     snare .play();
      break;
    case "f":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var  tom2 = new Audio("sounds/tom-2.wav");
     tom2 .play();
      break;
    case "k":
      var  tom3 = new Audio("sounds/tom-3.wav");
      tom3.play();
      break;
    case "l":
      var tom4  = new Audio("sounds/tom-4.wav");
      tom4.play();
      break;
    default:
      console.log(this.innerHTML);
  };}

  function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
  }