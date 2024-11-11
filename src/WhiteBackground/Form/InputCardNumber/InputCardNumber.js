import React, {useRef, useEffect} from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';

function InputCardNumber() {
    const ccNumber = useSelector(state => state.ccNumber);
    const dispatch = useDispatch();
    const emptyMessageRef = useRef();
    const wrongFormatMessageRef = useRef();
    const inputRef = useRef();

    const formatCardNumber = (cardNumber) =>  {
        let formatCard = cardNumber.replaceAll(' ', '');
        let temp = '';

        for(let i = 0; i < formatCard.length; i++){
            if(i % 4 === 0)
                temp += ` ${formatCard[i]}`;
            else
                temp += formatCard[i];
        }
        return temp.replace(' ', '');
    }
      

    const handleCardNumber = (e) => {
        e.target.setCustomValidity('');
        const formattedCardNumber = formatCardNumber(e.target.value);
        dispatch({type: 'update cc number', ccNumber: formattedCardNumber});
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        const isPatternMismatch = e.target.validity.patternMismatch;

        if(isEmpty){
            emptyMessageRef.current.style.display = 'block';
            inputRef.current.style.border = '1px solid #FF5050';
        }     
        else if(isPatternMismatch){
            wrongFormatMessageRef.current.style.display = 'block';
            inputRef.current.style.border = '1px solid #FF5050';
        }   
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ')
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            emptyMessageRef.current.style.display = 'block';
        else
            wrongFormatMessageRef.current.style.display = 'block';
        inputRef.current.style.border = '1px solid #FF5050';
    }


    useEffect(() => {
        emptyMessageRef.current.style.display = '';
        wrongFormatMessageRef.current.style.display = '';
       inputRef.current.style.border = '';
    }, [ccNumber])


    return(
        <fieldset className={styles.container}>
            <label className={styles.label}> 
                Card Number
            </label>
            <input
                type='tel' 
                name='ccNumber'
                className={styles.input} 
                placeholder='e.g. 1234 5678 9123 0000'
                value={ccNumber}
                onBlur={handleBlur}
                onChange={handleCardNumber}
                onInvalid={handleInvalid}
                pattern="[0-9\s]{19}"
                maxLength={19} 
                autoComplete="cc-number"
                ref={inputRef}
                required/> 
            <div className={styles.errorMessage} ref={emptyMessageRef}>
                Can't be blank
            </div>
            <div className={styles.errorMessage} ref={wrongFormatMessageRef}>
                Wrong format, numbers only
            </div>
        </fieldset>
    )
}

export default InputCardNumber;