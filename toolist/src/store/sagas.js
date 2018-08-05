import { put, takeEvery } from 'redux-saga/effects';
import { GET_INITIAL_LIST }from './Actiontypes.js';
import { getInitialAction }from './actionCreator.js'
import axios from "axios";

function* getInitialList(){
	// 防止ajax接收不到数据这时执行res.data 就会报错，所以放在try catch中
	try{
		const res=yield axios.get("http://www.mocky.io/v2/5b5d757e32000069001cfa0e");
		const action=getInitialAction(res.data);
		yield put(action);
	}catch(e){
		console.log("您的网络连接有问题")
	}
	const res=yield axios.get("http://www.mocky.io/v2/5b5d757e32000069001cfa0e");
	const action=getInitialAction(res.data);
	yield put(action);
}

//ganerator函数，takeEvery截取action.type为第一个参数的action，执行第二个参数代表的函数
function* mySaga() {
  yield takeEvery(GET_INITIAL_LIST, getInitialList);
}

export default mySaga;