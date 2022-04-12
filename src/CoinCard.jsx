import React from 'react';

// a component file
// return a card object called "coin"
const CoinCard = ({coin}) => {
    return(
        <div className='Box card' >
          <img src={ coin.image } alt={coin.token_name} className='CoinImage' /> <br />
          <div className='Title'>{ coin.token_name }</div>
          <div className='Text'>Price : { coin.token_price } ETH</div>
          { coin.created_time } <br />
        </div>
    )
}

export default CoinCard;