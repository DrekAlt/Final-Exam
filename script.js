function submitForm() {
    alert("Message submitted!");
    return false;
}

function chooseService(service) {
    let message = "";

    if (service === "Startup Design") {
        message = "Great choice! Our Startup Design is perfect for beginners.";
    } 
    else if (service === "Business Website") {
        message = "Excellent! A Business Website will help grow your brand.";
    } 
    else if (service === "Website Maintenance") {
        message = "Smart move! We'll keep your site secure and updated.";
    }

    alert(message);
}

// Settings pane functionality
const settingsBtn = document.getElementById('settings-btn');
const settingsPane = document.getElementById('settings-pane');
const closeSettings = document.getElementById('closeSettings');
const darkModeToggle = document.getElementById('darkModeToggle');

settingsBtn.addEventListener('click', () => {
    settingsPane.classList.toggle('active');
});

closeSettings.addEventListener('click', () => {
    settingsPane.classList.remove('active');
});

// Dark mode toggles
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
