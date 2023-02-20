import data from "./data.json" assert { type: "json" };

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const quoteButton = document.querySelector('.change-quote');

export function getQuotes() {  
  let random = data[Math.floor(Math.random() * data.length)];
  quote.innerText = `“${random.text}”`;
  author.innerText = `“${random.author}”`;    
}

quoteButton.addEventListener('click', getQuotes);