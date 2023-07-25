import React from 'react';
import store from './Store';
import { Provider } from 'react-redux';
import PurpleBackground from './PurpleBackground';
import WhiteBackground from './WhiteBackground';
import './styles.css';

function App() {
    return(
        <Provider store={store}>
            <main className={'container'}>
                <PurpleBackground/>
                <WhiteBackground/>
            </main>            
        </Provider>
    )
}


export default App;