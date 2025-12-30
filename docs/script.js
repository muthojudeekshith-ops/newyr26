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

const backBtn = document.getElementById("backBtn");
const playVideoBtn = document.getElementById("playVideoBtn");
const pauseBtn = document.getElementById("pauseBtn");
const replayVideoBtn = document.getElementById("replayVideoBtn");

const music = document.getElementById("bgMusic");
const video = document.getElementById("loveVideo");
const videoControls = document.querySelector(".video-controls");

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
  }
}

/* Reload typing */
replayBtn.onclick = startTyping;

/* Interface 3 → 4 */
nextBtn.onclick = () => {
  music.pause();
  show(screens.s4);
};

/* BACK (one step back) */
backBtn.onclick = () => {
  video.pause();
  video.currentTime = 0;
  video.style.display = "none";
  videoControls.style.display = "none";
  playVideoBtn.style.display = "block";
  show(screens.s3);
};

/* Video play */
playVideoBtn.onclick = () => {
  playVideoBtn.style.display = "none";
  video.style.display = "block";
  videoControls.style.display = "flex";
  video.play();
};

/* Pause */
pauseBtn.onclick = () => {
  if (video.paused) {
    video.play();
    pauseBtn.textContent = "⏸ Pause";
  } else {
    video.pause();
    pauseBtn.textContent = "▶ Resume";
  }
};

/* Replay video */
replayVideoBtn.onclick = () => {
  video.currentTime = 0;
  video.play();
};
