function play() {
    var audio = new Audio('funisinfinite.mp3')
    audio.play()
    audio.loop = true;
    var newBody = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="funsheet.css">
    <meta charset="UTF-8">
    <title>o(≧▽≦)o</title>
</head>
<body>
<div class="fun-container">
        <div class="fun-text">楽しみは無限大です</div>
</body>
    `
    document.body.innerHTML = newBody
}