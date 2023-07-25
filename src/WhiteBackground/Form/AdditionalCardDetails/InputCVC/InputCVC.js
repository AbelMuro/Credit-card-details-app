import React, {useRef, useEffect} from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';

function InputCVC () {
    const ccCVC = useSelector(state => state.ccCVC);
    const dispatch = useDispatch();
    const errorMessageRef = useRef();
    const inputRef = useRef();

    const handleCvc = (e) => {
        const newCvc = e.target.value;
        if(newCvc.length > 3) return;
        e.target.setCustomValidity('');
        dispatch({type: 'update cc cvc', ccCVC: newCvc});
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
    }, [ccCVC])

    return(
        <fieldset className={styles.container}>
            <label className={styles.label}>
                CVC
            </label>
            <input type='number' 
                name='cvc'
                className={styles.input} 
                placeholder='e.g. 123'
                value={ccCVC}
                onChange={handleCvc}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                ref={inputRef}
                required/>
            <div className={styles.errorMessage} ref={errorMessageRef}>
                Can't be blank
            </div>  
        </fieldset>
    )
}

export default InputCVC;