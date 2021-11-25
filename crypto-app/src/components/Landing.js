import React, { useEffect, useState } from "react";

// API
import { getApi } from "../services/GetApiComponent";

//component 
import CoinsList from "./CoinsList";

// style
import styles from "./Landing.module.css";
import Loading from "./Loading";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await getApi();
      // console.log(data)
      setCoins(data);
    };
    fetchApi();
  }, []);

  const searchCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search))

  return (
    <div>
      {coins.length ? 
        <div>
            <input className={styles.input} type="text" value={search} onChange={searchHandler} placeholder="search your coin ..." />
            {searchCoins.map((coin) =>
          <CoinsList
            key={coin.id}
            coinSymbol={coin.symbol}
            coinName={coin.name}
            coinImage={coin.image}
            coinPrice={coin.current_price}
            changeCoinPrice={coin.market_cap_change_percentage_24h}
            marketCap={coin.market_cap}
          />)}
          
        </div>
       : (
        <Loading />
      )}
    </div>
  );
};

export default Landing;
