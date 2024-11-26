document.addEventListener('DOMContentLoaded', function () {
    const lookupCountryButton = document.querySelector('#lookupcountry');
    const lookupCityButton = document.querySelector('#lookupcity');
    const countryInput = document.querySelector('#country');
    const resultDiv = document.querySelector('#result');

    function performLookup(lookupType) {
        const countryValue = countryInput.value.trim();
        if (!countryValue) {
            resultDiv.innerHTML = '<p>Please enter a country name.</p>';
            return;
        }

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log('Response received:', xhr.responseText); 
                    resultDiv.innerHTML = xhr.responseText;
                } else {
                    console.error('Error:', xhr.status);
                    resultDiv.innerHTML = `<p>Error: Unable to fetch data. Status: ${xhr.status}</p>`;
                }
            }
        };

        const url = `world.php?country=${encodeURIComponent(countryValue)}&lookup=${encodeURIComponent(lookupType)}`;
        console.log('Request URL:', url); 
        xhr.open('GET', url, true);
        xhr.send();
    }


    lookupCountryButton.addEventListener('click', () => performLookup('country'));
    lookupCityButton.addEventListener('click', () => performLookup('cities'));
});