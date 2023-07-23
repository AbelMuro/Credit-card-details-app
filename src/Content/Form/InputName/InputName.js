import React, {useRef, useState, useEffect} from 'react';
import styles from './styles.module.css';

function InputName() {
    const [name, setName] = useState('');
    const errorMessageRef = useRef();
    const inputRef = useRef();

    const handleName = (e) => {
        e.target.setCustomValidity('');
        setName(e.target.value);
    }

    const handleBlur = (e) => {
        const isValid = e.target.checkValidity();

        if(!isValid){
            errorMessageRef.current.style.display = 'block';
            inputRef.current.style.border = '1px solid #FF5050';
        }
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        errorMessageRef.current.style.display = 'block';
        inputRef.current.style.border = '1px solid #FF5050';
    }

    useEffect(() => {
        errorMessageRef.current.style.display = '';
        inputRef.current.style.border = '';
    }, [name])

    return(
        <fieldset className={styles.container}>
            <label className={styles.label}>
                cardholder name
            </label>
            <input type='text' 
                className={styles.input} 
                placeholder='e.g. Jane Appleseed'
                value={name}
                onChange={handleName}
                onInvalid={handleInvalid}
                onBlur={handleBlur}
                ref={inputRef}
                required
                />
            <p className={styles.errorMessage} ref={errorMessageRef}>
                Can't be blank
            </p>
        </fieldset>
    )
}

export default InputName;