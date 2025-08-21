let endData = null

async function getRandomPricedBooks() {
  endData = await fetch(`https://dummyjson.com/products?limit=100&skip=10`)
    .then(res => res.json())
    .then(data => data.products.filter(cat => cat.category !== 'beauty'))
    .then(data => {
      console.log(data)
      endData = data
      return endData
    })    
    .catch(err => {
      console.error("fetch failed", err);
      return null;
    })

    return endData
}


export { getRandomPricedBooks }