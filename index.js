const quoteText = document.getElementById('quote-text');
const changeQuoteBtn = document.getElementById('dot-btn');
const adviceId = document.getElementById('advice-id');

let clicked = 1;

function randomQuote() {
  // fetching random quotes/data from the API and parsing it into javascript object
  fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
  console.log(result)
  
  let id = clicked;


  quoteText.innerText = result.content;
  adviceId.innerText = id;

  clicked++;
  });
}

changeQuoteBtn.addEventListener('click', randomQuote);
