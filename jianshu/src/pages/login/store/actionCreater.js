import axios from 'axios';
import * as constants from './constants.js';

const login=()=>({
	type:constants.LOGIN,
	value:true
});
export const logOut=()=>({
	type:constants.LOGOUT,
	value:false
})
export const changeLogin=(account,password)=>{
	return (dispatch)=>{
		axios.get("/api/login.json?account="+account+"&password="+password).then((res)=>{
			console.log(res.data.data);
			dispatch(login(res.data.data));
		}).catch(()=>{
			alert("账户或密码错误")
		})
	}
}