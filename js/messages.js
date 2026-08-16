const messages = [

    "Welcome to France! 🇫🇷 Today begins a whole new chapter, and I couldn't be prouder of you.",

    "I hope you found something beautiful today. 💙",

    "Remember to eat something delicious today. Maybe a croissant? 🥐",

    "Take lots of pictures. One day you'll look back at them and smile. 📸",

    "You're doing better than you think. Keep going. 🩵",

    "Whenever you miss home, remember that we're thinking about you. 🤍",

    "Don't forget to rest too. Adventures can be tiring. ☁️",

    "I hope you're making memories you'll talk about for years. ✨",

    "Go somewhere you've never been today. You never know what you'll find. 🗺️",

    "You've got this, Abhisha. ❤️"

];


// Abhisha leaves for France on August 20, 2026

const departureDate = new Date("2026-08-20");

const today = new Date();

departureDate.setHours(0, 0, 0, 0);
today.setHours(0, 0, 0, 0);


const difference = Math.floor(
    (today - departureDate) /
    (1000 * 60 * 60 * 24)
);


// Find the elements

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const messageBox = document.getElementById("dailyMessage");


// Make sure everything exists before adding the click

if (envelope && letter && messageBox) {

    envelope.addEventListener("click", function () {

        // Hide envelope

        envelope.style.display = "none";

        // Show letter

        letter.classList.remove("hidden");


        // Before departure

        if (difference < 0) {

            messageBox.innerHTML =
                "Your French adventure hasn't started yet, but it's getting closer. I hope you're excited for everything waiting for you. 💙🇫🇷";

        }


        // Departure day

        else if (difference === 0) {

            messageBox.innerHTML =
                "Today's the day! ✈️🇫🇷 Wishing you the most amazing adventure in France. Go make memories, try new things, and enjoy every second. I'll be cheering you on from home. 💙";

        }


        // Daily messages after departure

        else if ((difference - 1) < messages.length) {

            messageBox.innerHTML =
                messages[difference - 1];

        }


        // After all messages

        else {

            messageBox.innerHTML =
                "No matter how many days pass, you'll always have a little piece of home waiting for you. 💙";

        }

    });

}