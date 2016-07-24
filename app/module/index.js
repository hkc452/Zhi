/**
 * Created by hkc on 2016/7/23.
 */
import {combineReducers} from 'redux';
import Home from './Home/reducer'
export default combineReducers({
    ...Home
})