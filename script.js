"use strict";

const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");
const loader = document.querySelector("#loader");

let apiQuotes = [];
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}
//Show New Quote
function newQuote() {
  loading();
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  authorText.innerText = quote.author;
  quoteText.innerText = quote.text;

  // quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quote.Text.classList.remove("long-quote");
  }
  complete();
}

async function getQuotes() {
  loading();
  const apiURL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}

//On Load

//Tweet a quote

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

getQuotes();

twitterBtn.addEventListener("click", function generatetweet() {
  tweetQuote();
});

newQuoteBtn.addEventListener("click", function generateQuote() {
  newQuote();
});
