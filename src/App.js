import React from 'react';
import PurpleBackground from './PurpleBackground';
import WhiteBackground from './WhiteBackground';
import './styles.css';

function App() {
    return(
        <main className={'container'}>
            <PurpleBackground/>
            <WhiteBackground/>
        </main>
    )
}


export default App;