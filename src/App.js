import { useState } from 'react';
import './App.css';
import CoinCard from './CoinCard'
import CoinData from './MOCK_DATA.json';

function App() {
  const [displayedCoins, setDisplayedCoins] = useState(() => CoinData) // the objects to be shown
  const [timeFilteredCoins, setTimeFilteredCoins] = useState(() => CoinData) // the objects passed "time filter"
  const [priceFilteredCoins, setPriceFilterCoins] = useState(() => CoinData) // the objects passed "price filter"
  const [minFilter, setMinFilter] = useState('') // set "price filter" range: min
  const [maxFilter, setMaxfilter] = useState('') // set "price filter" range: max
  // get the intersection of objects that passed "time filter" and object that passed "price filter"
  // take the intersected objects and make them objects to be shown 
  const setFinalDisplay = () => {
    setDisplayedCoins((priceFilteredCoins.filter(value => timeFilteredCoins.includes(value))));
  }

  const sortByTime = () => {
    let x = displayedCoins;
    x.sort(
      // sort the list x from earlier created_time to recent created_time
      function (a, b) {return(a.created_time.localeCompare(b.created_time))}
    )
    // pass it back to refresh the objects
    setDisplayedCoins([...displayedCoins, x]);
  }

  const sortByPrice = () => {
    let x = displayedCoins;
    x.sort(
      // sort the list x from low price to high price
      function (a, b) {return(a.token_price - b.token_price)}
    )
    // pass it back to refresh the objects
    setDisplayedCoins([...displayedCoins, x]);
  }

  // take 2 user input to set the price range, and pass those who passed the filter to finalDisplay
  const PriceFilterResult = (minFilter, maxFilter) => {
    // get the qualified objects
    const result = CoinData.filter((curData)=>{
      return (curData.token_price <= maxFilter && curData.token_price >= minFilter);
    }
    );
    setPriceFilterCoins(result);
    // make sure the objects to be shown pass the "time filter" and "price filter" 
    setFinalDisplay();
  }

  // this funciton do sort by time
  const filterResult = (filterKey) => {
    const result = CoinData.filter((curData)=>{
      return curData.created_time >= filterKey;
    }
    );
    setTimeFilteredCoins(result);
    setFinalDisplay();
  }

  return (
    <div className="App flexBox">
      <div className='leftPanel'>
        <h2>...search youir NFT...</h2>  
        <div className='priceFilter Box'>
          <h3>filter by price</h3>
          <div>
                  <input
                      placeholder="min"
                      value={minFilter}
                      onChange={(e) => setMinFilter(e.target.value)}
                  /> <br />
                  <input
                      placeholder="MAX"
                      value={maxFilter}
                      onChange={(e) => setMaxfilter(e.target.value)}
                  /> <br />
                  <button
                      alt="search"
                      onClick={()=>PriceFilterResult(minFilter, maxFilter)}
                  >double click to filter price</button>
          </div>
        </div>

        <div className='timeFilter Box'>
          
          <h3>double click to filter by time</h3>
          <button onClick={()=>filterResult('2022-04-01')}>this month</button>
          <button onClick={()=>filterResult('2022-01-01')}>past 3 months</button>
          <button onClick={()=>filterResult('2021-10-01')}>past 6 months</button> <br />
          <button onClick={()=>filterResult('2021-04-01')}>past 1 year</button>
          <button onClick={()=>filterResult('2019-04-01')}>past 3 years</button>
        </div>

        <div className='sortOption Box'>
          <h3>double click to select sorting method</h3>
          <button onClick={sortByTime}>sort by time</button>
          <button onClick={sortByPrice}>sort by price</button>
        </div>
      </div>

      <div className='cards-container'>
        {
          displayedCoins.map( (coin, i) => (
            <CoinCard coin = { coin } key={ i }/>
        ))}
      </div>
    </div>
  );
}

export default App;
