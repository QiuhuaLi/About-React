import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/Header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as detailReducer} from '../pages/detail/store';
import {reducer as loginReducer} from '../pages/login/store';



//将各部分的reducer整合在一块儿导出
export default combineReducers({
	header:headerReducer,
	home:homeReducer,
	detail:detailReducer,
	login:loginReducer
});