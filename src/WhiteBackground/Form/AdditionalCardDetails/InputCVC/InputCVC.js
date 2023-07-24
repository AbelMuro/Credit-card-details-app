import React from 'react';
import styles from './styles.module.css';

function InputCVC () {
    return(
        <fieldset className={styles.container}>
            <label className={styles.label}>
                CVC
            </label>
            <input className={styles.input} placeholder='e.g. 123'/>
        </fieldset>
    )
}

export default InputCVC;