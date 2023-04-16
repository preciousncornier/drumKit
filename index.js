var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var audio = new Audio("sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", );

for (var i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        console.log(this);
    });
}
document.querySelector(".w").addEventListener("click", function() {
    audio.play("sounds/crash.mp3");
});
document.querySelector(".a").addEventListener("click", function() {
    audio.play("sounds/kick-bass.mp3");
});
document.querySelector(".s").addEventListener("click", function() {
    audio.play("sounds/snare.mp3");
});
document.querySelector(".d").addEventListener("click", function() {
    audio.play("sounds/tom-1.mp3");
});
document.querySelector(".j").addEventListener("click", function() {
    audio.play("sounds/tom-2.mp3");
});
document.querySelector(".k").addEventListener("click", function() {
    audio.play("sounds/tom-3.mp3");
});
document.querySelector(".l").addEventListener("click", function() {
    audio.play("sounds/tom-4.mp3");
});