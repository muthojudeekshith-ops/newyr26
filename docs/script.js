const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const helloText = document.getElementById("helloText");
const submitBtn = document.getElementById("submitBtn");
const passwordInput = document.getElementById("passwordInput");
const animatedText = document.getElementById("animatedText");
const replayBtn = document.getElementById("replayBtn");
const music = document.getElementById("bgMusic");

const PASSWORD = "c5d9";

const text = `Cheers to another year of loving you 💖 Happy New Year BABEE😉😘 !
	   We are stepping into the new year 2026 👩🏻‍❤️‍👨🏻👣
	   I just wanted you to know how deeply i have fallen for you till the last sec of the year ,			
	   and still i'm falling for you even at this movement ..
	   I hope this year brings us more love, more fun, deeper emotions, and countless beautiful memories together 🤍🎥 .
	   I believe this year will be warmer, stronger, and more magical for us 🫂
	   and I promise you 🫳🏻 that I'LL HOLD YOUR HAND MORE TGHTER 👫🏻 IN ANY SITUATION & IN ANY CHALLENGEAS . 
	   
		
	   And HANUU.. Thanks for being my yestarday, today & tomorrow 🥹🙃🫶🏻
	   you are not js a part of my life . You are my love, my world , my comfort & mine forever 💞
	   I LOVE YOU HANSINI 💕💌 `;

/* Screen Navigation */
helloText.onclick = () => {
  screen1.classList.remove("active");
  screen2.classList.add("active");
};

submitBtn.onclick = () => {
  if (passwordInput.value === PASSWORD) {
    screen2.classList.remove("active");
    screen3.classList.add("active");
    music.play();
    startTyping();
    startHearts();
  } else {
    alert("Wrong Password");
  }
};

/* Typing Animation */
let index = 0;
function startTyping() {
  animatedText.textContent = "";
  index = 0;
  type();
}

function type() {
  if (index < text.length) {
    animatedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 30);
  }
}

/* Replay */
replayBtn.onclick = () => {
  startTyping();
};

/* Hearts Generator (only Interface 3) */
const heartsContainer = document.getElementById("hearts");
const emojis = ["💗","💖","💘","🤍"];

function startHearts() {
  setInterval(() => {
    if (!screen3.classList.contains("active")) return;

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 14 + Math.random()*20 + "px";
    heart.style.animationDuration = 6 + Math.random()*4 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
  }, 400);
}
