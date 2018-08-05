//专门存储：创造action对象的函数
import *as constants from './constants.js'
import axios from 'axios';
import {fromJS} from 'immutable';

//因为在reducer.js中state是immutable类型，那么state中的list数组也为immutable类型，要将data变为list，那么data也要为immutable类型，保持数据类型统一
const getListData=(data)=>({
	type:constants.GETLIST_DATA,
	data:fromJS(data),
	totalPage:Math.ceil(data.length/10)
})

export const searchFocus=()=>({
	type:constants.SEARCH_FOCUS
})
export const searchBlur=()=>({
	type:constants.SEARCH_BLUR
})
export const mouseEnter=()=>({
	type:constants.MOUSE_ENTER
})
export const mouseLeave=()=>({
	type:constants.MOUSE_LEAVE
})
export const getList=()=>{
	return (dispatch)=>{
		axios.get('/api/headerList.json').then((res)=>{
			const data=res.data;
			dispatch(getListData(data.data))
		}).catch(()=>{
			console.log("error")
		});
	}
}
export const changeList=(page)=>({
	type:constants.CHANGE_LIST,
	page
})
