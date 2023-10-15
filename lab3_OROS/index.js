function funvid(){
    const playButton = document.getElementById("buttonhide");

// Скрыть кнопку
    playButton.style.display = "none";
    let vid = document.getElementById("myVideo");
    vid.play()
    vid.loop()
}
