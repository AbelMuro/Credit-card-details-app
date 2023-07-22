import React from 'react';
import styles from './styles.module.css';
import InputExpDate from './InputExpDate';
import InputCVC from './InputCVC';


function AdditionalCardDetails() {
    return(
        <div className={styles.container}>
            <InputExpDate/>
            <InputCVC/>
        </div>
    )
}

export default AdditionalCardDetails;