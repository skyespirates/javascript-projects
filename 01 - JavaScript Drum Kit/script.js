function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //  ambil semua audio elemen yang memiliki data atribut
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //  ambil semua elemen yang memiliki kelas key dan data atribut
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
