const audio = new Audio('/audio/audio.mp3');

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(()=>{
        audio.play();
    },500);
});