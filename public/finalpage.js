var myAudio= new Audio("https://www.mp3saavan.com/wp-content/uploads/2022/05/Ruth-B-Dandelions.mp3");
var isPlaying = false;

function togglePlay() {
    isPlaying ? myAudio.pause() : myAudio.play();
    isPlaying ? document.querySelector("#image1").src="../images/image9.jpeg":document.querySelector("#image1").src="../images/image12.jpeg";
    isPlaying? document.querySelector("#obs").innerHTML="Click on image to play or pause the music":document.querySelector("#obs").innerHTML="Yeah my obsession not dying about this song";
};

document.querySelector("#image1").addEventListener("click",togglePlay);


myAudio.onplaying = function() {
    isPlaying = true;
  };
  myAudio.onpause = function() {
    isPlaying = false;
  };


var myAudio1= new Audio("../audios/onedance.mp3");
var isPlaying1 = false;
function togglePlay1() {
    isPlaying1 ? myAudio1.pause() : myAudio1.play();
    isPlaying1 ? document.querySelector("#image2").src="../images/image10.jpeg":document.querySelector("#image2").src="../images/image13.png";
    isPlaying1 ? document.querySelector("#obs1").innerHTML="Click on image to play or pause the music":document.querySelector("#obs1").innerHTML="Someone said something about this song once, now only that comes to my mind everytime listeining to this song.😳";
};

document.querySelector("#image2").addEventListener("click",togglePlay1);


myAudio1.onplaying = function() {
    isPlaying1 = true;
  };
  myAudio1.onpause = function() {
    isPlaying1 = false;
  };

document.querySelector("#image3").addEventListener("click",function(){
    document.querySelector("#image3").src= "../images/image14.jpeg"
})