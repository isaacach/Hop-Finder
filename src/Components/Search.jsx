
function Search() {
  const [beer, setBeer] = useState([]);

  const getBeer = async (beerName) => {
    const beer = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`)
    const beerJson = await beer.json()
    const filteredBeers = beerJson.filter((beer) => beer.name.toLowerCase.includes(beerName));
    return setBeer(filteredBeers.map((b) => [...beer, b] ));
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
        <div className='showBeer'>
          <h1>Beer Name</h1>
          {beer.map((beer, i) => {
            return (
              <div className='beer' key={i}>
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <h3>{beer.description}</h3>
                <h4>{beer.abv}</h4>
                <h5>{beer.ibu}</h5>
                <h6>{beer.food_pairing}</h6>
                </div>
            )})}
        </div>
      </div>
    </div>
  )
}

export default Search;