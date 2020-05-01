document.getElementById('new-quote').addEventListener('click', getQuotes);
window.addEventListener('load', getQuotes);

async function getQuotes(quote, author) {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  document.getElementById('text').textContent = `${data.content}`;
  document.getElementById('author').textContent = `-${data.author}`;
  twitter(data);
  function twitter(data) {
    document
      .getElementById('tweet-quote')
      .setAttribute(
        'href',
        `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${data.content}${data.author}`
      );
  }
}
