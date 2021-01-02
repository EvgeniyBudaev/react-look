import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {routerMiddleware} from 'connected-react-router'

import rootReducer from './reducers/rootReducer'
import history from '../../history'

const enhancer = applyMiddleware(
    thunk,
    routerMiddleware(history),
)

export default createStore(rootReducer, composeWithDevTools(enhancer))