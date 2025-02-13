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

document.addEventListener('DOMContentLoaded', () => {
    const clickSquare = document.querySelector('.click-square'); // Target the element

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // When the element enters the viewport
                    clickSquare.classList.add('visible'); // Show the element
                    clickSquare.classList.remove('hidden');
                } else {
                    // When the element exits the viewport
                    clickSquare.classList.remove('visible'); // Hide the element
                    clickSquare.classList.add('hidden');
                }
            });
        },
        {
            threshold: 0.6, // Trigger when 50% of the element is visible
        }
    );

    // Observe the element
    observer.observe(clickSquare);
});

const languageToggle = document.getElementById("language-toggle");
        languageToggle.addEventListener("change", () => {
            const selectedLanguage = languageToggle.value;
            window.location.href = selectedLanguage; // Redirect to selected language page
        });