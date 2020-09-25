var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Clears stored highscores upon click
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Displays list of stored highscores
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}

// Returns to homepage of quiz upon click
goBack.addEventListener("click", function () {
    window.location.replace("../code-quiz/index.html");
});