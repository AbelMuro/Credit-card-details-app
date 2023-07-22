import React from 'react';
import styles from './styles.module.css';

function InputCardNumber() {
    return(
        <fieldset className={styles.container}>
            <label className={styles.label}> 
                Card Number
            </label>
            <input className={styles.input} placeholder='e.g. 1234 5678 9123 0000'/>
        </fieldset>
    )
}

export default InputCardNumber;