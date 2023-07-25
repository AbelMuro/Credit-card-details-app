import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

function CardNumber() {
    const ccCVC = useSelector(state => state.ccCVC);

    return(
        <p className={styles.cardCVC}>
            {ccCVC ? ccCVC : '000'}
        </p>
    )
}

export default CardNumber;