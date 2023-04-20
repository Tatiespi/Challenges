import { createStore } from 'redux';
import { authReducer } from './reducer';

// Create store
const store = createStore(authReducer);

export default store;