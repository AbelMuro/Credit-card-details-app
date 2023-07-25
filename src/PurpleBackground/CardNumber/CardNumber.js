import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css'

function CardNumber() {
    const ccNumber = useSelector(state => state.ccNumber);

    return(
        <p className={styles.cardNumber}>
            {ccNumber ? ccNumber : '0000 0000 0000 0000'}
        </p>
    )
}

export default CardNumber;