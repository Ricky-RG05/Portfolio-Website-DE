function toggleMenu() {
    document.querySelector('.hamburger').classList.toggle('active');
}

const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');

function displayNavBar(event) {
    // Check the current state and toggle visibility
    if (navBar.style.opacity === "0" || navBar.style.opacity === "") {
        // Show the nav-bar
        navBar.style.opacity = "1";
        navBar.style.visibility = "visible"; // Make it interactable
    } else {
        // Hide the nav-bar
        navBar.style.opacity = "0";
        navBar.style.visibility = "hidden"; // Prevent interaction
    }
}

// Attach the click event listener to the hamburger button
hamburger.addEventListener('click', displayNavBar);