import {fromJS} from 'immutable';
import * as constants from './constants.js';

const defaultState=fromJS({
	topicList:[],
	articleList:[],
	racList:[],
	writerList:[],
	moreList:[],
	topIsShow:false
})
//把函数封装起来
const getHomeData=(state,action)=>{
	return state.merge({
				topicList:fromJS(action.topicList),
				articleList:fromJS(action.articleList),
				racList:fromJS(action.racList),
				writerList:fromJS(action.writerList)
			});
}
export default (state=defaultState,action)=>{
	switch(action.type){
		case constants.GET_HOME_DATA:
			return getHomeData(state,action)
		case constants.GET_MORE_LIST:
			return state.set("articleList",state.get("articleList").concat(action.moreList));
		case constants.CHANGE_TO_SHOW:
			return state.set("topIsShow",action.topIsShow);
		default:
			return state;
	}
}

   
      
      

      
      
