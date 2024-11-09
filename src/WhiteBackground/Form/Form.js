import React, {useState} from 'react';
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('/create_payment_intent', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({amount: 150})
            })

            if(response.status === 200){
                const clientSecret = await response.text();
                /* 
                
                const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, { 
                    payment_method: { 
                        card: elements.getElement(CardElement) 
                    } }); 
                    
                    if (error) { setError(error.message); } 
                    
                    else { 
                        setPaymentIntentId(paymentIntent.id); //payment has been processed
                    
                    }
                
                */
            }
            
        }
        catch(error){
            if(error.type === 'StripeCardError')
                console.log(error.message);
            else if(error.type === 'StripeRateLimitError')
                console.log(error.message);
            else if(error.type === 'StripeInvalidRequestError')
                console.log(error.message);
            else if(error.type === 'StripeAPIError')
                console.log(error.message);
            else if(error.type === 'StripeConnectionError')
                console.log(error.message);
            else if(error.type === 'StripeAuthenticationError')
                console.log(error.message);
            else
                console.log(error.message);
        }
        setSubmitted(true);
    }

    return submitted ? <FormSubmitted setSubmitted={setSubmitted}/> :
            <form className={styles.container} onSubmit={handleSubmit}>
                <CardElement/>
                <InputName/>
                <InputCardNumber/>
                <AdditionalCardDetails/>
                <input type='submit' value='Confirm' className={styles.confirm} disabled={!stripe}/>
            </form>         
}

export default Form;