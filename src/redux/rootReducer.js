import {bgReducer,BG_KEY} from '../redux/bgRedux/bgReducer'
import {combineReducers} from 'redux'

let rootReducer = combineReducers({
    bgstore: bgReducer
})
export {rootReducer}