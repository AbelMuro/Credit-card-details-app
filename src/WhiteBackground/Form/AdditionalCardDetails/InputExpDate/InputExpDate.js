import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';

function InputExpDate() {
    const [month, setMonth] = useState('') ;
    const [year, setYear] = useState('');
    const emptyMessageRef = useRef();
    const invalidMessageRef = useRef();
    const inputYearRef = useRef();
    const inputMonthRef = useRef();

    const handleMonth = (e) => {
        e.target.setCustomValidity('');
        const userInput = e.target.value;
        const currentMonth = Number(userInput);
        if(currentMonth < 0 || currentMonth > 12 || userInput.length > 2)
            return;
        setMonth(userInput);
    }

    const handleYear = (e) => {
        e.target.setCustomValidity('');
        const userInput = e.target.value;        
        const currentYear = Number(userInput);
        if(currentYear < 0 || currentYear > 99 || userInput.length > 2)
            return;
        setYear(e.target.value);
    }

    const handleMonthBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        if(isEmpty){
            emptyMessageRef.current.style.display = 'block';
            inputMonthRef.current.style.border = '1px solid #FF5050';
        }
            
        else if(month.length < 2){
            invalidMessageRef.current.style.display = 'block';
            inputMonthRef.current.style.border = '1px solid #FF5050';
            e.target.setCustomValidity(' ');
        }   
    }

    const handleYearBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        if(isEmpty){
            emptyMessageRef.current.style.display = 'block';
            inputYearRef.current.style.border = '1px solid #FF5050';
        }
        else if(year.length < 2){
            invalidMessageRef.current.style.display = 'block';
            inputYearRef.current.style.border = '1px solid #FF5050';
            e.target.setCustomValidity(' ');
        }   
    }

    const handleMonthInvalid = (e) => {
        e.target.setCustomValidity(' ');
        const isEmpty = e.target.validity.valueMissing;
        inputMonthRef.current.style.border = '1px solid #FF5050';

        if(isEmpty)
            emptyMessageRef.current.style.display = 'block'
        else 
            invalidMessageRef.current.style.display = 'block'
    }

    const handleYearInvalid = (e) => {
        e.target.setCustomValidity(' ');
        const isEmpty = e.target.validity.valueMissing;
        inputYearRef.current.style.border = '1px solid #FF5050';

        if(isEmpty)
            emptyMessageRef.current.style.display = 'block'
        else 
            invalidMessageRef.current.style.display = 'block'
    }


    useEffect(() => {
        emptyMessageRef.current.style.display = '';
        invalidMessageRef.current.style.display = '';
        inputYearRef.current.style.border = '';
        inputMonthRef.current.style.border = '';
    }, [month, year])

    return (
        <fieldset className={styles.container}>
            <label className={styles.label}>
                {'Exp. Date (MM/YY)'}
            </label>
            <input className={styles.input} 
                type='number'
                name='month'
                placeholder='MM'     
                value={month}
                onChange={handleMonth}       
                onBlur={handleMonthBlur}
                onInvalid={handleMonthInvalid}
                ref={inputMonthRef}
                required
                />
            <input className={styles.input} 
                type='number'
                name='year'
                placeholder='YY'
                value={year}
                onChange={handleYear}
                onBlur={handleYearBlur}
                onInvalid={handleYearInvalid}
                ref={inputYearRef}
                required
                />
            <p className={styles.errorMessage} ref={emptyMessageRef}>
                Can't be blank
            </p>
            <p className={styles.errorMessage} ref={invalidMessageRef}>
                Enter valid MM/YY
            </p>
        </fieldset>
    )
}

export default InputExpDate;