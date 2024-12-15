let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let backwardIcon = document.getElementById("backwardIcon");
let forwardIcon = document.getElementById("forwardIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration ;
    progress.value = song.currentTime ;
}

function playPause(){
    if (song.paused || song.ended) { // Check if audio is paused or ended
        song.play();
        ctrlIcon.src = "Assets/pause icon.png"; // Update to pause icon
    } else {
        song.pause();
        ctrlIcon.src = "Assets/play button.png"; // Update to play icon
    }


    setInterval(() => {
        if (!song.paused && !song.ended) {
            progress.value = song.currentTime;
        }
    }, 500);

    progress.onchange = function (){
        song.play();
        song.currentTime = progress.value ;
        ctrlIcon.src = "Assets/pause icon.png";
    }
}
function forward(){
    song.currentTime += 5
}
function backward(){
    song.currentTime -= 5
}