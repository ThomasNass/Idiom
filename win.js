const winner = localStorage.winner;
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const replayButton = document.querySelector("#replay");

h1.textContent = `${winner} vann!!`;
resetButton.addEventListener('click', function () {
    localStorage.clear();
    location.href = "index.html";
})
replayButton.addEventListener('click', function () {
    location.href = "game.html";
})


