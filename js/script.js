// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// automatically loads a new quote every 30 seconds
setInterval(printQuote, 30000);

/**
 * Inserts a random quote into the HTML of the page
 */
function printQuote() {
    let quoteBox = document.getElementById("quote-box"); // quote box container
    let quote = getRandomQuote(); // gets a random quote from the array
    let citation = ""; // placeholder for the citation if one exists

    // if true, a citation exists so we'll add it to the citation variable
    if (quote.citation !== "") citation = '<span class="citation">' + quote.citation + '</span><span class="year">' + quote.year + '</span>';

    // sets the innerHTML of the quote box container
    quoteBox.innerHTML = '<p class="quote">' + quote.quote + '</p>' +
        '<p class="source">' + quote.source + citation + '</p>' +
        '<p class="tags">' + quote.tags + '</p>';

    // changes the background color of the page
    document.getElementsByTagName("body")[0].style.background = colors[getRandomInt(colors.length)];
}

/**
 * Selects a random quote from the array of quotes
 * @returns {{quote, source, citation, year}|*}
 */
function getRandomQuote() {
    let random = getRandomInt(quotes.length);
    return quotes[random];
}

/**
 * Generates a random number from 0...max
 * @param max the highest possible number
 * @returns {number}
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var quotes = [
    {
        quote: "If our Founding Fathers wanted us to care about the rest of the world, they wouldn’t have declared their independence from it.",
        source: "Stephen Colbert",
        citation: "Somewhere on TV",
        year: "2012",
        tags: "humor"
    },
    {
        quote: "Some people just have a way with words, and other people … oh … not have way.",
        source: "Steve Martin",
        citation: "The internet",
        year: "1990",
        tags: "humor"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else",
        source: "Margaret Mead",
        citation: "A great book",
        year: "1892",
        tags: "humor"
    },
    {
        quote: "The difference between stupidity and genius is that genius has its limits.",
        source: "Albert Einstein",
        citation: "Things smart folks say",
        year: "1942",
        tags: "humor"
    },
    {
        quote: "Tact is the ability to describe others as they see themselves.",
        source: "Abraham Lincoln",
        citation: "Conversations between ancient dudes",
        year: "1490",
        tags: "humor"
    },
    {
        quote: "From there to here, and here to there, funny things are everywhere.",
        source: "Dr. Seuss",
        citation: "Go dog Go",
        year: "1853",
        tags: "humor"
    },
    {
        quote: "A day without sunshine is like, you know, night.",
        source: "Steve Martin",
        citation: "",
        year: "",
        tags: "humor"
    }
];

let colors = [
    "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3"
];