import { legacy_createStore  as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './greeting';

const rootReducer = combineReducers({
  reducer
})


const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)))


export default store
