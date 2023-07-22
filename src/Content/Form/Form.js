import React from 'react';
import styles from './styles.module.css';
import InputName from './InputName'
import InputCardNumber from './InputCardNumber';
import AdditionalCardDetails from './AdditionalCardDetails';


//now i need to work on the validation of the inputs
function Form() {
    return(
        <form className={styles.container}>
            <InputName/>
            <InputCardNumber/>
            <AdditionalCardDetails/>
            <input type='submit' value='Confirm' className={styles.confirm}/>
        </form>
    )
}

export default Form;