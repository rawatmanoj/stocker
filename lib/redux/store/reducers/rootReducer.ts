import { combineReducers } from 'redux'
import companyReducer from './companyReducer'
import userReducer from './userReducer'

export default combineReducers({
    companyReducer,
    userReducer
})