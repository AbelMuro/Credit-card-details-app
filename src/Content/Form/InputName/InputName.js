import React from 'react';
import styles from './styles.module.css';

function InputName() {
    return(
        <fieldset className={styles.container}>
            <label className={styles.label}>
                cardholder name
            </label>
            <input type='text' className={styles.input} placeholder='e.g. Jane Appleseed'/>
        </fieldset>
    )
}

export default InputName;