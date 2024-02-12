async function shortenUrl() {
    const urlInput = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');

    // Replace YOUR_ACCESS_TOKEN with your Bitly access token
    const accessToken = 'YOUR_ACCESS_TOKEN';

    // Bitly API endpoint
    const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ long_url: urlInput }),
      });

      if (response.ok) {
        const data = await response.json();
        resultDiv.innerHTML = `<p>Shortened URL: <a href="${data.id}" target="_blank">${data.id}</a></p>`;
      } else {
        resultDiv.innerHTML = `<p>Error: Unable to shorten URL</p>`;
      }
    } catch (error) {
      console.error('Error:', error);
      resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  }