var quotes = [
    {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        text: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll"
    },
    {
        text: "An unexamined life is not worth living.",
        author: "Socrates"
    },
    {
        text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
        author: "William Butler Yeats"
    },
    {
        text: "Whether you think you can or think you can't, you're right.",
        author: "Henry Ford"
    }
];

function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteDisplay = document.getElementById("quoteDisplay");
    var authorDisplay = document.getElementById("authorDisplay");

    quoteDisplay.textContent = `"${quotes[randomIndex].text}"`;
    authorDisplay.textContent = `-- ${quotes[randomIndex].author}`;
}
