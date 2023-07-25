import {configureStore} from '@reduxjs/toolkit';
import RootReducer from './Reducers';

const store = configureStore({                     
    reducer: RootReducer
})

export default store;