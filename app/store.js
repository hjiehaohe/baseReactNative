import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//import the reducers
import reducers from '../app/reducers/index';

// connect our store to the reducers
export default createStore(reducers, applyMiddleware(thunk))