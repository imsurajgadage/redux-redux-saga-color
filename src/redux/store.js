import {rootReducer} from './rootReducer'
import {createStore, applyMiddleware} from 'redux'


//Redux & redux-Saga
import createSagaMiddleware from 'redux-saga'

import {rootSaga} from '../sagas/saga'

const sagaMiddleware = createSagaMiddleware()


let store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export {store}