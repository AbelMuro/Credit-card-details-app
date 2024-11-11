import React from 'react';
import styles from './styles.module.css';
import Form from './Form'
import { loadStripe } from '@stripe/stripe-js'; 
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.secretKey);


function WhiteBackground() {
    return(
        <Elements stripe={stripePromise}>
            <div className={styles.container}>
                <Form/>
            </div>            
        </Elements>

    )
}

export default WhiteBackground;