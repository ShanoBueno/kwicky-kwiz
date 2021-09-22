function Scores() {
  var highscores = JSON.parse(window.localStorage.getItem("highscores"));



  highscores.forEach(function(highscore) {
    var liTag = document.createElement("li");
    liTag.textContent = highscore.initials + " - " + score.score;

    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}



Scores();