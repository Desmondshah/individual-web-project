function toggleInterest(interest) {
    // List of all interests
    const interests = ['art', 'tech', 'science'];

    // Loop through interests
    for (let i = 0; i < interests.length; i++) {
        // If the current interest matches the one clicked, toggle its visibility
        if (interests[i] === interest) {
            const element = document.getElementById(interests[i]);
            if (element.style.display === "none") {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        } else {
            // Hide other interests
            document.getElementById(interests[i]).style.display = "none";
        }
    }
}