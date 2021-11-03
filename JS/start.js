playerCount = document.querySelector("#playerCount");
winningScore = document.querySelector("#winningScore");
button = document.querySelector("#submitButton");
timer = document.querySelector("#timer");
rulesButton = document.querySelector("#display-rules");
formsColumn = document.querySelector(".forms-column");
rulesColumn = document.querySelector(".rules-column");
let displayRules = false;

// sending score to win to the next page
winningScore.addEventListener("change", function () {
    localStorage.winningScore = parseInt(this.value);

})
// timer score to next page
timer.addEventListener("change", function () {
    localStorage.timer = parseInt(this.value);

})

// remove preexisting player fields and adding new ones
playerCount.addEventListener("change", function () {
    removePlayer();
    playerLimit = parseInt(this.value);
    addPlayer(playerLimit);
})

// adding text fields for player names to go in
const addPlayer = function (players) {
    let parent = document.querySelector("#textFields");
    for (let i = 0; i < players; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", `Spelare ${i + 1}`);
        input.setAttribute("class", "players");
        parent.appendChild(input);
    }
}

const removePlayer = function () {
    const parent = document.querySelector("#textFields");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

// send player names to the next page and script
addEventListener("submit", function (e) {
    e.preventDefault();
    const arrPlayers = [];
    const players = document.querySelectorAll(".players");
    for (var i = 0; i < players.length; i++) {
        arrPlayers.push(players[i].value);
    }
    localStorage.myPlayers = JSON.stringify(arrPlayers);
    location.href = "game.html";
})


//Function to make enter work as tab (aimed at phone usage)
let q;
addEventListener("keypress", function (event) {
    let players = document.querySelectorAll(".players");
    console.log(q)
    if (q == null) {
        q = 1;
    }
    if ((event.key === "Enter")) {
        if (q === players.length) {
            q = 0;
        }
        else {
            players[q].focus({ preventScroll: false });
            q++;
            console.log(q);
        }
    }
})

rulesButton.addEventListener("click", () => {
    if (displayRules == false) {
        rulesColumn.style.display = "block";
        formsColumn.style.display = "none";
        displayRules = true;
        return;
    }
    else
        formsColumn.style.display = "block";
    rulesColumn.style.display = "none";
    displayRules = false;
})