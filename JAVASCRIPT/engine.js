const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];

let audio = new Audio("../AUDIOS/a.wav");
//https://download-directory.github.io/
//https://github.com/felipeAguiarCode/js-music-keyboard-virtual/tree/main/src/tunes

const playTune = (key) => {
    audio.src = `../AUDIOS/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    //dataset
    console.log(key.dataset.key);
    key.addEventListener("click",() => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
})

document.addEventListener("keydown",(e) =>{
    
    if(mapedKeys.includes(e.key)){
    playTune(e.key);
    }
})

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

volumeSlider.addEventListener("input", handleVolume )

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keysCheck.addEventListener("click",showHideKeys);