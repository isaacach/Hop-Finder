import { useEffect } from "react"

function Search() {

  const getBeer = async (beerName) => {
    const beer = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`)
    const beerJson = await beer.json()
    const filteredBeers = beerJson.filter((beer) => beer.name.toLowerCase.includes(beerName));
    console.log(filteredBeers);
  }



  return (
    <div className="row body">
      <div className="column body">
        <div className='search'>
          <h1>Search A Beer</h1>
          <input onChange={(e) => getBeer(e.target.value)} className='beerSearch' type="text" placeholder="Search..." />
          <h1>Or Search a Brewery</h1>
          <input className="brewerySearch" type="text" placeholder="Search..." />
        </div>
        <div className='showBeer'></div>
      </div>
    </div>
  )
}

export default Search;