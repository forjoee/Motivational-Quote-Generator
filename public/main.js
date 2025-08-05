const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const container = document.getElementById('container');

async function getQuote() {
    try {
        // Include the 'tags=motivational' query param
        const response = await fetch('https://quote-generator-server-4x74.onrender.com/api');

        if (!response.ok) {
            quoteText.textContent = 'Could Not Get A Quote! Maybe Try Later...';
            quoteAuthor.textContent = '';
            return;
        }

        const data = await response.json();
        quoteText.textContent = `"${data.content}"`;
        quoteAuthor.textContent = `${data.author}`;
    }
    catch (error) {
        console.error(error);
        quoteText.textContent = 'Something Went Wrong.';
        quoteAuthor.textContent = '';
    }
}

container.addEventListener('click', getQuote);