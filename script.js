const landing = document.getElementById("landing");
const home = document.getElementById("home");
const button = document.getElementById("openButton");

const params = new URLSearchParams(window.location.search);


/* Open Dashboard */

function openDashboard() {

    landing.style.display = "none";

    home.classList.remove("hidden");

    home.style.display = "flex";

}


/* Open dashboard directly when coming back from another page */

if (params.get("dashboard") === "true") {

    openDashboard();

}


/* Open dashboard from landing page */

button.addEventListener("click", () => {

    openDashboard();

});


/* Greeting */

const greeting = document.getElementById("greeting");
const quote = document.getElementById("quote");

const hour = new Date().getHours();


if (hour < 12) {

    greeting.innerHTML = "Good Morning Abhisha ☀️";

    quote.innerHTML =
        "Hope today brings you something to smile about.";

}

else if (hour < 17) {

    greeting.innerHTML = "Good Afternoon Abhisha 🌤️";

    quote.innerHTML =
        "Don't forget to take a little break today.";

}

else {

    greeting.innerHTML = "Good Evening Abhisha 🌙";

    quote.innerHTML =
        "Take a deep breath, you made it through another day.";

}