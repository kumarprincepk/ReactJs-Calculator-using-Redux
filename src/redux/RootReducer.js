import {calculatorReducer, CALCULATOR_KEY} from './calculatorRedux/Reducer'
import { combineReducers } from 'redux'

let RootReducer = combineReducers({
    [CALCULATOR_KEY]:calculatorReducer
})

export {RootReducer}