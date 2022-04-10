const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtm = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

const showLoadingSpinner = () => {
   loader.hidden = false
   quoteContainer.hidden = true
}

const removeLoadingSpinner = () => {
   quoteContainer.hidden = false
   loader.hidden = true
}

// Show New Quote
const newQuote = () => {
   showLoadingSpinner()

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

   // Set Quote, Hide Loader
   quoteText.textContent = quote.text
   removeLoadingSpinner()
}

// Get Quotes from API
async function getQuotes() {
   showLoadingSpinner()
   const apiUrl = 'https://api.npoint.io/0cd43e45a29f6caa9cba'

   try {
      const res = await fetch(apiUrl)
      apiQuotes = await res.json()
      newQuote()
   } catch (e) {
      console.log(e)
   }
}

// Tweet Quote
const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
   window.open(twitterUrl, '_blank')
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtm.addEventListener('click', tweetQuote)

// On Load
getQuotes()