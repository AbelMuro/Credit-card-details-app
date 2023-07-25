import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

function CardName() {
    const ccName = useSelector(state => state.ccName);

    return(
        <p className={styles.cardOwner}>
            {ccName ? ccName : 'JANE APPLESEED'}
        </p>
    )
}

export default CardName;