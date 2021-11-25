import React from 'react';

// style
import styles from "./CoinsList.module.css"

const CoinsList = ({coinSymbol, coinName, coinImage, coinPrice, changeCoinPrice, marketCap}) => {
    return (
        <div className={styles.container}>
            <img className={styles.coinImg} src={coinImage} alt="coinImage" />
            <p className={styles.coinName}>{coinName}</p>
            <p className={styles.coinSymbol}>{coinSymbol.toUpperCase()}</p>
            <p className={styles.marketCap}>{marketCap.toLocaleString()}</p>
            <p className={changeCoinPrice>0 ?styles.negativePrice :styles.plusPrice  }>{changeCoinPrice.toFixed(2)}</p>
            <p className={styles.coinPrice}>{coinPrice}</p>
        </div>
    );
};

export default CoinsList;