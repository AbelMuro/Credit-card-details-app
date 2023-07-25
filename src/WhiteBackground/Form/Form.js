import React, {useState} from 'react';
import styles from './styles.module.css';
import InputName from './InputName'
import InputCardNumber from './InputCardNumber';
import AdditionalCardDetails from './AdditionalCardDetails';
import FormSubmitted from './FormSubmitted';


//this is where i left off, i will need to use a dispatch function for every input below
function Form() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return submitted ? <FormSubmitted/> :
        <form className={styles.container} onSubmit={handleSubmit}>
            <InputName/>
            <InputCardNumber/>
            <AdditionalCardDetails/>
            <input type='submit' value='Confirm' className={styles.confirm}/>
        </form> 
}

export default Form;