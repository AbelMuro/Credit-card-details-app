import React from 'react';
import styles from './styles.module.css';
import Form from './Form'
import { loadStripe } from '@stripe/stripe-js'; 
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_live_51QIga7EVvi3aeXM6CRxU0gULOfE7SuAGy72ZZUczqkwM3WAtggy3L4K8JQLBFbqloAem8ZeCzcDV5kSDC3I3dGua00hT3pEUjT');

function WhiteBackground() {
    return(
        <Elements stripe={stripePromise}>
`            <div className={styles.container}>
                <Form/>
            </div>`            
        </Elements>

    )
}

export default WhiteBackground;