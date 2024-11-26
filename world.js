document.addEventListener('DOMContentLoaded', function () {
    // References to elements
    const lookupButton = document.querySelector('#lookup');
    const countryInput = document.querySelector('#country');
    const resultDiv = document.querySelector('#result');

    // Event listener for button click
    lookupButton.onclick = function () {
        const countryValue = countryInput.value.trim(); // Get input value and trim whitespace
        const xhr = new XMLHttpRequest(); // Create an XMLHttpRequest object

        // Define what happens when the request state changes
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    resultDiv.innerHTML = xhr.responseText; // Populate results div with response
                } else {
                    resultDiv.innerHTML = `<p>Error: Unable to fetch data. Status: ${xhr.status}</p>`;
                }
            }
        };

        // Open and send the GET request to world.php with the country parameter
        const url = `world.php?country=${encodeURIComponent(countryValue)}`;
        xhr.open('GET', url, true);
        xhr.send();
    };
});


