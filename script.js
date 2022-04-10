const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtm = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes = []

// Show New Quote
const newQuote = () => {
   // Pick a random quote from apiQuotes array
   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]

   if (!quote.author) {
      authorText.textContent = 'Неизвестен'
   } else {
      authorText.textContent = quote.author
   }

   if (quote.text.length > 100) {
      quoteText.classList.add('long-quote')
   } else {
      quoteText.classList.remove('long-quote')
   }

   quoteText.textContent = quote.text
}

// Get Quotes from API
async function getQuotes() {
   const apiUrl = 'https://api.npoint.io/0cd43e45a29f6caa9cba'

   try {
      const res = await fetch(apiUrl)
      apiQuotes = await res.json()
      newQuote()
   } catch (e) {
      console.log(e)
   }
}

// On Load
getQuotes()