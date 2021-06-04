/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote: "Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi",
    citation: "Philosophy",
    year: 1947,
    tag: "Motivation",
  },
  {
    quote: "There is only one good, knowledge, and one evil, ignorance.",
    source: "Socrates",
    citation: "Philosophy",
    tag: "Inspiration",
  },
  {
    quote: "I dream my painting and I paint my dream.",
    source: "Vincent Van Gogh",
    year: 1890,
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    source: "Mark Twain",
    citation: "Literature",
    year: 1910,
    tag: "Motivation",
  },
  {
    quote: "We are all in the gutter, but some of us are looking at the stars.",
    source: "Oscar Wilde",
    citation: "Lady Windermere's Fan",
    year: 1900,
    tag: "Inspiration",
  },
  {
    quote: "Peace begins with a smile.",
    source: "Mother Teresa",
    year: 1997,
    tag: "Inspiration",
  },
  {
    quote:
      "Everyone thinks of changing the world, but no one thinks of changing himself.",
    source: "Leo Tolstoy",
    citation: "Philosophy",
    year: 1910,
    tag: "Motivation",
  },
  {
    quote:
      "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
    source: "John Lennon",
    citation: "Music",
    year: 1980,
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    source: "Confucius",
    citation: "Philosophy",
    tag: "Motivation",
  },
  {
    quote: "It always seems impossible until it's done.",
    source: "Nelson Mandela",
    citation: "Social Science",
    year: 2013,
    tag: "Motivation",
  },
];

/***
 * `getRandomQuote` function
 ***/

//Generation a random quote
const getRandomQuote = (array) => {
  let rng = Math.floor(Math.random() * array.length);
  return array[rng];
};

/***
 * `printQuote` function
 ***/

const printQuote = () => {
  //Storing random quote in a variable
  selectedQuote = getRandomQuote(quotes);

  //Changing HTML with the randomly generated quote
  quote = document.querySelector(".quote");
  quote.innerHTML = selectedQuote.quote;
  source = document.querySelector(".source");
  source.innerHTML = `${selectedQuote.source}`;
  //Conditions for citation and year
  if (
    selectedQuote.citation !== undefined &&
    selectedQuote.year !== undefined
  ) {
    source.innerHTML = ` ${selectedQuote.source}, ${selectedQuote.citation}, ${selectedQuote.year}`;
  } else if (selectedQuote.citation !== undefined) {
    source.innerHTML = ` ${selectedQuote.source}, ${selectedQuote.citation}`;
  } else {
    source.innerHTML = ` ${selectedQuote.source}, ${selectedQuote.year}`;
  }
  quoteButton();
};

//Random background color changing function

const quoteButton = () => {
  let randomNum = () => Math.floor(Math.random() * 255);
  btn = document.querySelector("button");
  btn.style.backgroundColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
};

/***
 * click event listener for the print quote button
 ***/

// Clicking on this button triggers printQuote function
const button = document.getElementById("load-quote");
button.addEventListener("click", printQuote);

//Automatic quote changing anonymous function
(function () {
  setInterval(printQuote, 5000);
})();
