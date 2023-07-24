import React from 'react';
import styles from './styles.module.css';
import brand from './images/credit-card-brand.png';

function PurpleBackground() {
    return(
        <div className={styles.container}>
            <div className={styles.oval}></div>
            <div className={styles.oval}></div>
            <div className={styles.oval}></div>
            <div className={styles.creditCardFront}>
                <img className={styles.brand} src={brand}/>
                <p className={styles.cardNumber}>
                    0000 0000 0000 0000
                </p>
                <p className={styles.cardOwner}>
                    JANE APPLESEED
                </p>
                <p className={styles.cardDate}>
                    00/00
                </p>
            </div>
            <div className={styles.creditCardBack}>
                <p className={styles.cardCVC}>
                    000
                </p>
            </div>
        </div>
    )
}

export default PurpleBackground;