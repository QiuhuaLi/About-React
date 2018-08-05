import axios from 'axios';
import * as constants from './constants.js';
import {fromJS} from 'immutable';

const addDetailData=(data)=>({
	type:constants.ADD_DETAIL_DATA,
	header:fromJS(data.header),
	author:fromJS(data.author),
	content:fromJS(data.content)
})

export const getDetailData=(id)=>{
	return (dispatch)=>{
		axios.get('/api/detail.json?id='+id).then((res)=>{
			const action=addDetailData(res.data.data)
			dispatch(action);
		}).catch(()=>{
			console.log("数据加载不全")
		})
	}
}
