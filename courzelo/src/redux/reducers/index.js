import {combineReducers} from 'redux'
import auth from './authReducer'
import token from './tokenReducer'
import users from './usersReducer'
import courses from './courseReducer'
import categories from './categorieReducer'
import paniers from './panierReducer'
export default combineReducers({
    auth,
    token,
    users,
    courses,
    categories,
    paniers
})