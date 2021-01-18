const p1 = {
  score: 0,
  display: document.getElementById("display-1"),
  button: document.getElementById("button-1"),
};
const p2 = {
  score: 0,
  display: document.getElementById("display-2"),
  button: document.getElementById("button-2"),
};

const resetButton = document.getElementById("reset-button");
let gameOf = document.getElementById("gameOf");

let gameEnd = 2;
let isGameOver = false;

function updateScore(main, opponent) {
  if (!isGameOver) {
    main.score += 1;
    if (main.score === gameEnd) {
      main.display.classList.add("winner");
      opponent.display.classList.add("loser");
      main.button.disabled = true;
      opponent.button.disabled = true;
      isGameOver = true;
    }
    main.display.textContent = main.score;
  }
}

gameOf.addEventListener("change", function () {
  gameEnd = parseInt(this.value);
  reset();
});

p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});
p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});
resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;

  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = p.score;
    p.display.classList.remove("winner", "loser");
    p.button.disabled = false;
  }
}
