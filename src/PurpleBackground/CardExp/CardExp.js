import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

function CardExp() {
    const ccMonth = useSelector(state => state.ccMonth);
    const ccYear = useSelector(state => state.ccYear);

    return(
        <p className={styles.cardExp}>
            {ccMonth ? ccMonth : '00'}/{ccYear ? ccYear : '00'}
        </p>
    )
}

export default CardExp;