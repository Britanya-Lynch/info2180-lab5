document.addEventListener('DOMContentLoaded', function () {
   
    const lookupButton = document.querySelector('#lookup');
    const countryInput = document.querySelector('#country');
    const resultDiv = document.querySelector('#result');

  
    lookupButton.onclick = function () {
        const countryValue = countryInput.value.trim(); 
        const xhr = new XMLHttpRequest(); 

       
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    resultDiv.innerHTML = xhr.responseText; 
                } else {
                    resultDiv.innerHTML = `<p>Error: Unable to fetch data. Status: ${xhr.status}</p>`;
                }
            }
        };

        const url = `world.php?country=${encodeURIComponent(countryValue)}`;
        xhr.open('GET', url, true);
        xhr.send();
    };
});


