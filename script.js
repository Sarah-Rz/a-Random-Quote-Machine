window.onload = init;
      function init() {
        generateQuote()
      }

      function generateQuote() {
        let quoteSize = QUOTEBANK.length;
        let randomIndex = Math.floor(Math.random() * quoteSize);
        let randomQuoteData = QUOTEBANK[randomIndex];

        // Twitter
        let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="
        // Add the Quote
        let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "20%");
         twitterLink += quoteInApiFormat
        // Add the Author
        let authorInApiFormat = randomQuoteData.author.replace(/ /g, "20%");
         twitterLink += " - " + authorInApiFormat

        document.getElementById("tweet-quote").href = twitterLink;
        document.getElementById("text").innerText = randomQuoteData.quote;
        document.getElementById("author").innerText = " - " + randomQuoteData.author;
      }