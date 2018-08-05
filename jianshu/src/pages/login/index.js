import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreater } from './store';
import {
	LoginWrapper,LoginInput
} from './style.js';

class Login extends PureComponent{
	render(){
		const { login }=this.props;
		if(login)
		{	
			return <Redirect to="/" />
		}else{	
			return(		
				<LoginWrapper>
					<LoginInput>
						<input placeholder="请输入账号" ref={(input)=>{this.account=input}}/>
						<input placeholder="请输入密码" ref={(input)=>{this.password=input}}/>
						<button onClick={()=>this.props.handleClick(this.account,this.password)}>登录</button>
					</LoginInput>
				</LoginWrapper>
			)
		}
	}
}
const mapDispatch=(dispatch)=>{
	return{
		handleClick(account,password){
			dispatch(actionCreater.changeLogin(account.value,password.value));
		}
	}
};
const mapState=(state)=>{
	return{
		login:state.getIn(["login","login"])
	}
};
export default connect(mapState,mapDispatch)(Login);