function celebrate(){
    document.querySelector(".invis").style.display = "block";
    document.querySelector("button").style.display = "none";
    var audio = new Audio('anthem.mp3');
    audio.play();
}
