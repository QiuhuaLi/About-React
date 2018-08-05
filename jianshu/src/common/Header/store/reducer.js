// header部分的reducer：存储数据和更新数据后返回给store
import *as constants from './constants.js';
import {fromJS} from 'immutable';

const defaultState=fromJS({
	focused:false,
	mouseIn:false,
	list:[],
	page:1,
	totalPage:1
})

export default (state=defaultState,action)=>{
	switch(action.type){
		case constants.SEARCH_FOCUS:
			//immutable对象的set方法会结合之前的immutable对象的值和现在设置的值，返回一个全新的对象
			return state.set('focused',true);
		case constants.SEARCH_BLUR:
			return state.set('focused',false);
		case constants.GETLIST_DATA:
			return state.merge({
				list:action.data,
				totalPage:action.totalPage
			})
		case constants.MOUSE_ENTER:
			return state.set('mouseIn',true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn',false);
		case constants.CHANGE_LIST:
			return state.set('page',action.page);
		default:
			return state;
	}
}