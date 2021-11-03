const winner = localStorage.winner;
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const replayButton = document.querySelector("#replay");

window.addEventListener("load", function () {
    setTimeout(function () {
        // This hides the address bar:
        window.scrollTo(0, 100);
    }, 0);
});

h1.textContent = `${winner} vann!!`;
resetButton.addEventListener('click', function () {
    localStorage.clear();
    location.href = "../index.html";
})
replayButton.addEventListener('click', function () {
    location.href = "../game.html";
})


