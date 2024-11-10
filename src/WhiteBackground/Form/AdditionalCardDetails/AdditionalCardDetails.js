import React from 'react';
import styles from './styles.module.css';
import InputExpDate from './InputExpDate';
import InputCVC from './InputCVC';


function AdditionalCardDetails({setCardCvcError, setCardExpError}) {
    return(
        <div className={styles.container}>
            <InputExpDate setCardExpError={setCardExpError}/>
            <InputCVC setCardCvcError={setCardCvcError}/>
        </div>
    )
}

export default AdditionalCardDetails;