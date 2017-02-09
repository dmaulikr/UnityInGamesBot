console.log("-Quote: Loading Quotes");
const QuoteList = require("../configure/quotes.json");

module.exports = { quote };

function quote(message, msgl) {
    if (msgl === "knights" || msgl === "knight") {
        let RNumb = Math.floor((Math.random() * QuoteList.QuoteKnights.length));
        message.channel.sendMessage(QuoteList.QuoteKnights[RNumb]);
        return;
    }
    if (msgl === "samurai") {
        let RNumb = Math.floor((Math.random() * QuoteList.QuoteSamurai.length));
        message.channel.sendMessage(QuoteList.QuoteSamurai[RNumb]);
        console.log(RNumb);
        return;
    }
    if (msgl === "viking" || msgl === "vikings") {
        let RNumb = Math.floor((Math.random() * QuoteList.QuoteVikings.length));
        message.channel.sendMessage(QuoteList.QuoteVikings[RNumb]);
        return;
    }
    if (msgl === "blackstone" || msgl === "blackstonelegion") {
        let RNumb = Math.floor((Math.random() * QuoteList.QuoteBlackstone.length));
        message.channel.sendMessage(QuoteList.QuoteBlackstone[RNumb]);
        return;
    }
    if (msgl === "") {
        let RNumb = Math.floor((Math.random() * QuoteList.Quote.length));
        message.channel.sendMessage(QuoteList.Quote[RNumb]);
        return;
    }
}