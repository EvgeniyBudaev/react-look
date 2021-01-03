import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {routerMiddleware} from 'connected-react-router'
import generateId from './middleware/generateId'

import rootReducer from './reducers/rootReducer'
import history from '../../history'

const enhancer = applyMiddleware(
    thunk,
    routerMiddleware(history),
    generateId,
)

export default createStore(rootReducer, composeWithDevTools(enhancer))