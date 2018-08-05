import axios from 'axios';
import * as constants from './constants.js';
import {fromJS} from 'immutable';

const getHomeDataAction=(data)=>{
	return{
		type:constants.GET_HOME_DATA,
		topicList:data.topicList,
		articleList:data.articleList,
		racList:data.racList,
		writerList:data.writerList
	}
}
const getMoreList=(data)=>{
	return{
		type:constants.GET_MORE_LIST,
		moreList:data		
	}
}
export const getHomeIfo=()=>{
	return (dispatch)=>{
	axios.get("/api/home.json").then((res)=>{
			let data=res.data.data;
			const action=getHomeDataAction(data);
			dispatch(action);
		})	
	}
};
export const getMoreIfo=()=>{
	return (dispatch)=>{
	axios.get("/api/listMore.json").then((res)=>{
			let data=fromJS(res.data.data);
			const action=getMoreList(data);
			dispatch(action);
		})	
	}
};
export const changeTopShow=(value)=>({
	type:constants.CHANGE_TO_SHOW,
	topIsShow:value
})