const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("../AUDIOS/a.wav");
//https://download-directory.github.io/
//https://github.com/felipeAguiarCode/js-music-keyboard-virtual/tree/main/src/tunes

const playTune = (key) => {
    audio.src = `../AUDIOS/${key}.wav`;
    audio.play();
};

pianoKeys.forEach((key) => {
    //dataset
    console.log(key.dataset.key);
    key.addEventListener("click",() => playTune(key.dataset.key));
})

document.addEventListener("keydown",(e) =>{
    playTune(e.key);
})