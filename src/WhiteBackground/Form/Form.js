import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';
import InputName from './InputName'
import InputCardNumber from './InputCardNumber';
import AdditionalCardDetails from './AdditionalCardDetails';
import FormSubmitted from './FormSubmitted';
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js'

function Form() {
    const [submitted, setSubmitted] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const [numberElement, setNumberElement] = useState();
    const [cvcElement, setCvcElement] = useState();
    const [cardExp, setCardExp] = useState();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        //const cardElement = elements.create('card');
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
        })
        if(error) 
            throw new Error(error);
        
        const response = await fetch('http://localhost:4000/create_payment_intent', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({paymentMethodId: paymentMethod.id})
        })
        if(response.status === 200){   
            const result = await response.text();
            console.log(result);
        }
        else{
            const message = await response.text();
            console.log(message);
        }
        setSubmitted(true);
    }


    return submitted ? <FormSubmitted setSubmitted={setSubmitted}/> :
            <form className={styles.container} onSubmit={handleSubmit} id='card'>
                <InputName/>
                <InputCardNumber/>
                <AdditionalCardDetails/>
                <input type='submit' value='Confirm' className={styles.confirm}/>
            </form>         
}

export default Form;