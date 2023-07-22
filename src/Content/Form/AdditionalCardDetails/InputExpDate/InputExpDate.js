import React from 'react';
import styles from './styles.module.css';

function InputExpDate() {
    return (
        <fieldset className={styles.container}>
            <label className={styles.label}>
                {'Exp. Date (MM/YY)'}
            </label>
            <input className={styles.input} placeholder='MM'/>
            <input className={styles.input} placeholder='YY'/>
        </fieldset>
    )
}

export default InputExpDate;