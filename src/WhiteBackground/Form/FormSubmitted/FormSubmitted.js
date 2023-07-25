import React from 'react';
import iconComplete from './images/icon-complete.svg';
import styles from './styles.module.css';

function FormSubmitted() {
    return(
        <div className={styles.container}>
            <img className={styles.icon} src={iconComplete}/>
            <h1 className={styles.title}>
                Thank You!
            </h1>
            <p className={styles.desc}>
                We've added your card details
            </p>
            <button className={styles.continue}>
                Continue
            </button>
        </div>
    )
}

export default FormSubmitted;