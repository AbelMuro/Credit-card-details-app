import React from 'react';
import styles from './styles.module.css';

function PurpleBackground() {
    return(
        <div className={styles.container}>
            <div className={styles.oval}></div>
            <div className={styles.oval}></div>
            <div className={styles.oval}></div>
        </div>
    )
}

export default PurpleBackground;