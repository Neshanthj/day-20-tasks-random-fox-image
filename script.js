// Function to fetch a random fox image from "https://randomfox.ca/floof/"
function getRandomFox() {
    // Returns a Promise that resolves to the fetched fox image URL or rejects with an error
    return new Promise((resolve, reject) => {
        // Fetches data from the API
        fetch("https://randomfox.ca/floof/")
            .then((response) => {
                // Checks if the network response is not okay, throws an error if not
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                // Converts the response to JSON format
                return response.json();
            })
            // Resolves the Promise with the fox image URL
            .then((data) => resolve(data.image))
            // Catches any errors that might occur during the process
            .catch((error) => reject(error));
    });
}

// Function to display a random fox image on the webpage
function displayRandomFox() {
    // Calls getRandomFox function
    getRandomFox()
        .then((imageUrl) => {
            // Creates an image element
            const img = document.createElement("img");
            // Sets the image source to the fetched fox image URL
            img.src = imageUrl;
            // Adds a CSS class to the image element
            img.classList.add("fox-image");
            // Appends the image to an element with class "fox-images"
            document.querySelector(".fox-images").appendChild(img);
        })
        // Catches any errors that might occur during the process and logs them to the console
        .catch((error) => console.log(error));
}

// Event listener that triggers the displayRandomFox function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", displayRandomFox);

// Event listener for a button with the ID "reload" that removes existing fox images and displays a new one
document.getElementById("reload").addEventListener("click", function () {
    // Selects all existing fox images
    const foxImages = document.querySelectorAll(".fox-image");
    // Removes each existing fox image from the webpage
    foxImages.forEach((image) => image.remove());
    // Calls the displayRandomFox function to display a new random fox image
    displayRandomFox();
});
