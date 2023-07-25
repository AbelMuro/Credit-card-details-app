import React, {useRef, useEffect} from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';

function InputName() {
    const ccName = useSelector(state => state.ccName);
    const dispatch = useDispatch();
    const errorMessageRef = useRef();
    const inputRef = useRef();

    const handleName = (e) => {
        e.target.setCustomValidity('');
        dispatch({type: 'update cc name', ccName: e.target.value});
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
    }, [ccName])

    return(
        <fieldset className={styles.container}>
            <label className={styles.label}>
                cardholder name
            </label>
            <input type='text' 
                name='name'
                className={styles.input} 
                placeholder='e.g. Jane Appleseed'
                value={ccName}
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