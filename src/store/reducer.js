import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../common/header/store';
import  homeReducer  from '../pages/home/store/reducer';

const reducer =  combineReducers({
    header: headerReducer,
    home: homeReducer
})
export default reducer