// --- 1. Mood Changer Logic ---
function changeMood(color) {
    document.body.style.backgroundColor = color;
}

// --- 2. Compliment Generator ---
const compliments = [
    "Your smile is the first thing I look for in a room.",
    "You are the most patient person I have ever known.",
    "I love how your mind works—you see beauty in everything.",
    "The way you care for people is so inspiring.",
    "I miss the way you laugh at the smallest things.",
    "You are the strongest person I know."
];

function showCompliment() {
    const textElement = document.getElementById("compliment-text");
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.innerHTML = random;
        textElement.style.opacity = 1;
    }, 200);
}

// --- 3. Heart Trail Effect ---
document.addEventListener('mousemove', function(e) {
    let heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.fontSize = '12px';
    heart.style.zIndex = '9999';
    heart.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = 'translateY(-20px) scale(1.5)';
        heart.style.opacity = '0';
        setTimeout(() => heart.remove(), 500);
    }, 50);
});


// --- 1. Together Counter Logic ---
function updateCounter() {
    const startDate = new Date("January 1, 2023"); // CHANGE THIS to your actual start date
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    
    const counterElement = document.getElementById("together-counter");
    if (counterElement) {
        counterElement.innerHTML = `${days} Days and ${hours} Hours`;
    }
}

// Update every hour
setInterval(updateCounter, 3600000);
window.addEventListener('load', updateCounter);

// --- 2. Tab Visibility Change ---
// This changes the browser tab title when she leaves the page!
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = "Please come back... ❤️";
    } else {
        document.title = "A Private Space | For You";
    }
});

function setGreeting() {
    const hour = new Date().getHours();
    let greeting = "";
    if (hour < 12) greeting = "Good Morning, My Sunshine ☀️";
    else if (hour < 18) greeting = "Good Afternoon, Beautiful ✨";
    else greeting = "Good Evening, My Love 🌙";
    
    document.getElementById('greeting').innerHTML = greeting;
}
window.addEventListener('load', setGreeting);

// This makes the browser tab "blink" with a heart
let heartToggle = true;
setInterval(() => {
    if (heartToggle) {
        document.title = "❤️ Aksh loves you";
    } else {
        document.title = "💖 Always & Forever";
    }
    heartToggle = !heartToggle;
}, 2000);



const audio = document.querySelector('audio');
const lyricsDisplay = document.getElementById('lyrics-display');

// REPLACE these with the actual lyrics and timestamps of your song
const songLyrics = [
    { time: 0, text: "🎶 (Intro playing...)" },
    { time: 5, text: "The first line of our favorite song..." },
    { time: 10, text: "I remember when we used to sing along..." },
    { time: 15, text: "2023 felt like it would never end..." },
    { time: 20, text: "And I'm still here, my love, my friend." }
];

if (audio && lyricsDisplay) {
    audio.ontimeupdate = () => {
        const currentTime = audio.currentTime;
        const currentLyric = songLyrics.findLast(l => currentTime >= l.time);
        
        if (currentLyric && lyricsDisplay.innerHTML !== currentLyric.text) {
            lyricsDisplay.style.opacity = 0; // Fade out
            setTimeout(() => {
                lyricsDisplay.innerHTML = currentLyric.text;
                lyricsDisplay.style.opacity = 1; // Fade in
            }, 500);
        }
    };
}



// This triggers the song the moment she clicks anywhere on the site
document.addEventListener('click', playFromPart, { once: true });

function revealMessage(element, title, text) {
    const overlay = document.getElementById('message-overlay');
    const msgTitle = document.getElementById('msg-title');
    const msgContent = document.getElementById('msg-content');

    // Set the content
    msgTitle.innerText = title;
    msgContent.innerText = text;

    // Show the overlay
    overlay.classList.remove('hidden');

    // Optional: Add a "Sparkle" effect on click
    createBurst(element);
}

function closeMessage() {
    document.getElementById('message-overlay').classList.add('hidden');
}

// Simple Particle Burst Effect
function createBurst(el) {
    for (let i = 0; i < 10; i++) {
        const petal = document.createElement('div');
        petal.innerHTML = '🌸';
        petal.style.position = 'absolute';
        petal.style.left = '50%';
        petal.style.top = '50%';
        petal.style.transition = 'all 1s ease-out';
        el.appendChild(petal);

        setTimeout(() => {
            petal.style.transform = `translate(${(Math.random()-0.5)*200}px, ${(Math.random()-0.5)*200}px) rotate(360deg)`;
            petal.style.opacity = '0';
        }, 50);
        
        setTimeout(() => petal.remove(), 1000);
    }
}


const extraReasons = [
    "The way you handle my moods is magic.",
    "Your voice is my favorite notification.",
    "You are the best decision I ever made in 2023.",
    "I'm still obsessed with the way you say my name."
];

function getRandomReason() {
    const reason = extraReasons[Math.floor(Math.random() * extraReasons.length)];
    alert(reason); // Or show it in a beautiful pop-up!
}

function revealMessage(title, text) {
    const overlay = document.getElementById('message-overlay');
    const msgTitle = document.getElementById('msg-title');
    const msgContent = document.getElementById('msg-content');

    msgTitle.innerText = title;
    msgContent.innerText = text;

    overlay.style.display = 'flex'; // This "unhides" it
}

function closeMessage() {
    const overlay = document.getElementById('message-overlay');
    overlay.style.display = 'none'; // This "hides" it again
}

let pulseTimer;

function startHeartbeat() {
    const heart = document.querySelector('.inner-heart');
    const message = document.getElementById('heart-message');
    
    heart.classList.add('beating-fast');
    
    // After 2 seconds of holding, reveal the hidden message
    pulseTimer = setTimeout(() => {
        message.classList.add('show-message');
    }, 1500);
}

function stopHeartbeat() {
    const heart = document.querySelector('.inner-heart');
    const message = document.getElementById('heart-message');
    
    heart.classList.remove('beating-fast');
    message.classList.remove('show-message');
    
    clearTimeout(pulseTimer);
}