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
