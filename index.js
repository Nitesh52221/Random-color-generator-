function getRandomColor() {
    var letters = "0123456789abcdef";
    var color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];

    }
    return color;
}
setInterval(() => {
    colorValue = getRandomColor();
    document.getElementById("color").innerHTML = colorValue;
    document.getElementById("color").style.backgroundColor = colorValue;
    document.getElementById("h1Color").style.color = colorValue;
    document.body.style.background = colorValue;
    document.body.style.transition = "0.5s";

}, 1000);