import React from 'react';
import styles from './styles.module.css';
import Form from './Form'
import { loadStripe } from '@stripe/stripe-js'; 
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.secretKey);

const options = {
    fonts: [{family: 'SpaceGrotesk', src: 'url(https://db.onlinewebfonts.com/t/7f510d38d1c785c851d73882c0ca58c0.ttf)', style: 'normal', weight: "500", size: '18px'}]
}

function WhiteBackground() {
    return(
        <Elements stripe={stripePromise} options={options}>
            <div className={styles.container}>
                <Form/>
            </div>            
        </Elements>

    )
}

export default WhiteBackground;