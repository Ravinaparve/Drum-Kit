//detecting button press (below code give the alert message for any button that is clicked ie, adding eventlistener to all button usinf for loop)
var numberOfDrumButtons = document.querySelectorAll(".drum").length;        //finding the number of buttons in side the drum class

for (var i = 0; i < numberOfDrumButtons; i++)  {                          // condition to loop through all the buttons
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){   //selects all the button having class drum and select each button in this class and add the event listener
    var buttonInnerHTML = this.innerHTML;                               //innerHTML of the button that got clicked
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);                         //calling buttonAnimation function on the button clicked
  });
}
  //detecting keyboard press
  document.addEventListener("keypress", function(event) {                  //adding eventlistener to entire document
    makeSound(event.key);                      //"key" is the property of the object "event". "key" represents which key was pressed
    buttonAnimation(event.key);                                            //calling buttonAnimation function on the button clicked
  });

  function makeSound(key){
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      default:console.log(buttonInnerHTML);

    }
  }
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." +currentKey);     //we will get class (.w - .k) assigned to activeButton
  activeButton.classList.add("pressed");                         //shadow effect to buttons

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
