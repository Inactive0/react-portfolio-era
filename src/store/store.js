import { createStore } from 'redux';
import rootReducer from './reducers'; // Предполагается, что у вас есть корневой редуктор

const store = createStore(rootReducer);

export default store;
