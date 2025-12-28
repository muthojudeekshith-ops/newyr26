const screens = {
  s1: document.getElementById("screen1"),
  s2: document.getElementById("screen2"),
  s3: document.getElementById("screen3"),
  s4: document.getElementById("screen4")
};

const helloText = document.getElementById("helloText");
const submitBtn = document.getElementById("submitBtn");
const passwordInput = document.getElementById("passwordInput");
const animatedText = document.getElementById("animatedText");
const replayBtn = document.getElementById("replayBtn");
const nextBtn = document.getElementById("nextBtn");
const playVideoBtn = document.getElementById("playVideoBtn");

const music = document.getElementById("bgMusic");
const video = document.getElementById("loveVideo");

const heartsContainer = document.getElementById("hearts");
const confettiContainer = document.getElementById("confetti");

const PASSWORD = "c5d9";

/* EXACT TEXT */
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

/* Navigation helpers */
function show(screen) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

/* Interface 1 → 2 */
helloText.onclick = () => show(screens.s2);

/* Interface 2 → 3 */
submitBtn.onclick = () => {
  if (passwordInput.value === PASSWORD) {
    show(screens.s3);
    music.play();
    startTyping();
    startHearts();
  } else {
    alert("Wrong Password");
  }
};

/* Typing */
let index = 0;
function startTyping() {
  animatedText.textContent = "";
  index = 0;
  type();
}

function type() {
  if (index < text.length) {
    animatedText.textContent += text.charAt(index++);
    setTimeout(type, 30);
  } else {
    startConfetti();
  }
}

/* Reload */
replayBtn.onclick = startTyping;

/* Interface 3 → 4 */
nextBtn.onclick = () => {
  show(screens.s4);
  music.pause();
};

/* Video play */
playVideoBtn.onclick = () => {
  playVideoBtn.style.display = "none";
  video.style.display = "block";
  video.play();
};

/* Hearts */
const heartEmojis = ["💗","💖","💘","🤍"];
setInterval(() => {
  if (!screens.s3.classList.contains("active")) return;
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = heartEmojis[Math.floor(Math.random()*heartEmojis.length)];
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = 14 + Math.random()*20 + "px";
  h.style.animationDuration = 6 + Math.random()*4 + "s";
  heartsContainer.appendChild(h);
  setTimeout(() => h.remove(), 10000);
}, 500);

/* Confetti mix */
const confettiEmojis = ["🎉","🎊","💖","💗","🤍","🌸"];
function startConfetti() {
  for (let i = 0; i < 120; i++) {
    const c = document.createElement("div");
    c.className = "confetti-piece";
    c.textContent = confettiEmojis[Math.floor(Math.random()*confettiEmojis.length)];
    c.style.left = Math.random()*100 + "vw";
    c.style.fontSize = 14 + Math.random()*18 + "px";
    c.style.animationDuration = 3 + Math.random()*3 + "s";
    confettiContainer.appendChild(c);
    setTimeout(() => c.remove(), 7000);
  }
}
