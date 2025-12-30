const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const bgMusic = document.getElementById("bgMusic");

/* Interface navigation */
document.getElementById("helloFamily").onclick = () => {
  screen1.classList.remove("active");
  screen2.classList.add("active");
};

document.getElementById("submitPassword").onclick = () => {
  const pass = document.getElementById("passwordInput").value;
  if (pass === "c5d9") {
    screen2.classList.remove("active");
    screen3.classList.add("active");

    bgMusic.volume = 0.25;
    bgMusic.play();

    startTyping();
    startParticles();
  } else {
    alert("Wrong Password");
  }
};

/* Auto year logic */
function getNewYear() {
  const now = new Date();
  let year = now.getFullYear() + 1;

  const dec31 = new Date(now.getFullYear(), 11, 31, 23, 58);
  if (now >= dec31) year = now.getFullYear() + 1;
  if (year > 2040) year = 2040;

  return year;
}

/* EXACT TEXT – NO CHANGE */
const fullText = `HAPPY NEW YEAR MY FAMILY ${getNewYear()} 💌
I hope we will have more joy & happiness in this year 🫶🏻


                                                YOUR DEEKSHITH WITH LOVE 🫶🏻`;

let index = 0;

/* Typing + horizontal scroll */
function startTyping() {
  const target = document.getElementById("animatedText");
  const card = target.parentElement;

  const interval = setInterval(() => {
    target.textContent += fullText.charAt(index);
    index++;

    card.scrollLeft = card.scrollWidth; // horizontal auto scroll

    if (index >= fullText.length) clearInterval(interval);
  }, 40);
}

/* Floating emoji particles */
const emojis = ["🤗", "🥳", "💐", "🎂"];

function startParticles() {
  setInterval(() => {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = 4 + Math.random() * 3 + "s";

    document.getElementById("particles").appendChild(particle);

    setTimeout(() => particle.remove(), 7000);
  }, 400);
}
