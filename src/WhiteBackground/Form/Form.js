import React, {useState} from 'react';
import styles from './styles.module.css';
import InputName from './InputName'
import InputCardNumber from './InputCardNumber';
import AdditionalCardDetails from './AdditionalCardDetails';
import FormSubmitted from './FormSubmitted';

function Form() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return submitted ? <FormSubmitted setSubmitted={setSubmitted}/> :
            <form className={styles.container} onSubmit={handleSubmit}>
                <InputName/>
                <InputCardNumber/>
                <AdditionalCardDetails/>
                <input type='submit' value='Confirm' className={styles.confirm}/>
            </form>         
}

export default Form;