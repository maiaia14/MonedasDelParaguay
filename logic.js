let isplaying = false;
let audio = new Audio();
audio.src="/monedantigua/Amenábar.mp3.mp3";

function playOrPause() {
    if(isplaying) {
        audio.pause();
        isplaying = false;
    } else {
        audio.play();
        isplaying = true;
    }
}