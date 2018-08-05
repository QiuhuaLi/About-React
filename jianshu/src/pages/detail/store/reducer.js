import {fromJS} from 'immutable';
import * as constants from './constants.js';

const defaultState=fromJS({
	header:"",
	author:"",
	content:""
})
export default (state=defaultState,action)=>{
	switch(action.type){
		case constants.ADD_DETAIL_DATA:
			return state.merge({
				header:action.header,
				author:action.author,
				content:action.content
			})
		default:
			return state;
	}
}

