const screens = ["i1", "i2", "i3", "i4"].map(id =>
  document.getElementById(id)
);

function show(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* elements */
const helloLove = document.getElementById("helloLove");
const pwd = document.getElementById("pwd");
const pwdBtn = document.getElementById("pwdBtn");

const typeText = document.getElementById("typeText");
const reloadTxt = document.getElementById("reloadTxt");
const nextPage = document.getElementById("nextPage");

const backBtn = document.getElementById("backBtn");
const playBtn = document.getElementById("playBtn");
const video = document.getElementById("video");
const pauseBtn = document.getElementById("pauseBtn");
const replayBtn = document.getElementById("replayBtn");
const vControls = document.querySelector(".v-controls");

const music = document.getElementById("music");

const PASSWORD = "c5d9";

/* EXACT TEXT (unchanged) */
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

/* interface 1 → 2 */
helloLove.onclick = () => show("i2");

/* interface 2 → 3 */
pwdBtn.onclick = () => {
  if (pwd.value === PASSWORD) {
    show("i3");
    music.play();
    startTyping();
  } else {
    alert("Wrong Password");
  }
};

/* typing animation */
let idx = 0;
function startTyping() {
  typeText.textContent = "";
  idx = 0;
  type();
}

function type() {
  if (idx < text.length) {
    typeText.textContent += text.charAt(idx++);
    setTimeout(type, 30);
  }
}

reloadTxt.onclick = startTyping;

/* interface 3 → 4 */
nextPage.onclick = () => {
  music.pause();
  show("i4");
};

/* back one step */
backBtn.onclick = () => {
  video.pause();
  video.currentTime = 0;
  video.style.display = "none";
  vControls.style.display = "none";
  playBtn.style.display = "block";
  show("i3");
};

/* video play */
playBtn.onclick = () => {
  playBtn.style.display = "none";
  video.style.display = "block";
  vControls.style.display = "flex";
  video.play();
};

/* pause / resume */
pauseBtn.onclick = () => {
  if (video.paused) {
    video.play();
    pauseBtn.textContent = "⏸ Pause";
  } else {
    video.pause();
    pauseBtn.textContent = "▶ Resume";
  }
};

/* replay video */
replayBtn.onclick = () => {
  video.currentTime = 0;
  video.play();
};
