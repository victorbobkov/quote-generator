let apiQuotes = []

// Get Quotes from API
async function getQuotes() {
   const apiUrl = 'https://api.npoint.io/0cd43e45a29f6caa9cba'

   try {
      const res = await fetch(apiUrl)
      apiQuotes = await res.json()
      console.log(apiQuotes)
   } catch (e) {
      // Catch Error Here
   }
}

// On Load
getQuotes()