import React, { useEffect, useState } from 'react';
import { getApi } from '../services/GetApiComponent';
import CoinsList from './CoinsList';

const Landing = () => {
    const [coins, setCoins] = useState([])

    useEffect(()=>{
      const fetchApi = async () => {
        const {data} = await getApi()
        // console.log(data)
        setCoins(data)
      }
      fetchApi()
    },[])

    return (
        <div>
            {console.log(coins)}
            {
                coins.map((coin) => (
                    <CoinsList
                    key={coin.id}
                    coinSymbol={coin.symbol}
                    coinName={coin.name}
                    coinImage={coin.image}
                    coinPrice={coin.current_price}
                    changeCoinPrice={coin.market_cap_change_percentage_24h}
                    marketCap={coin.market_cap}
                    />
                ))
            }
        </div>
    );
};

export default Landing;