import React from 'react';
import styles from './styles.module.css';
import brand from './images/credit-card-brand.png';
import CardNumber from './CardNumber';
import CardOwner from './CardOwner'
import CardExp from './CardExp';
import CardCVC from './CardCVC';

function PurpleBackground() {

    return(
        <div className={styles.container}>
            <div className={styles.creditCardFront}>
                <img className={styles.brand} src={brand}/>
                <CardNumber/>
                <CardOwner/>
                <CardExp/>
            </div>
            <div className={styles.creditCardBack}>
                <CardCVC/>
            </div>
        </div>
    )
}

export default PurpleBackground;