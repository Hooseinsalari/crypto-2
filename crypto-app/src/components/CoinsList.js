import React from 'react';

const CoinsList = ({coinSymbol, coinName, coinImage, coinPrice, changeCoinPrice, marketCap}) => {
    return (
        <div>
            <img src={coinImage} alt="coinImage" />
            <p>{coinName}</p>
            <p>{coinSymbol}</p>
            <p>{marketCap}</p>
            <p>{changeCoinPrice}</p>
            <p>{coinPrice}</p>
        </div>
    );
};

export default CoinsList;