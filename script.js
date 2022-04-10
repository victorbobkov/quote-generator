let apiQuotes = []

// Show New Quote
const newQuote = () => {
   // Pick a random quote from apiQuotes array
   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
   console.log(quote)
}

// Get Quotes from API
async function getQuotes() {
   const apiUrl = 'https://api.npoint.io/0cd43e45a29f6caa9cba'

   try {
      const res = await fetch(apiUrl)
      apiQuotes = await res.json()
      newQuote()
   } catch (e) {
      // Catch Error Here
   }
}

// On Load
getQuotes()