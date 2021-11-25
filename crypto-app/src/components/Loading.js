import React from 'react';

import styles from "./Loading.module.css"

const Loading = () => {
    return (
        <div>
            <h2 className={styles.title}>Loading...</h2>
            <div className={styles.loader}></div>
        </div>
    );
};

export default Loading;