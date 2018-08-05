import {INPUT_CHANGE_VALUE,ADD_LIST_ELEMENT,DELETE_ELEMENT,INITIAL_ELEMENT}from "./Actiontypes.js"
const defaultState={
	inputValue:"",
	list:[]
}
 

 // reducer拿到之前的数据（state=defaultState）,深拷贝一份，修改相应的数据部分，再返回给store，store改变自己的数据
export default (state = defaultState,action)=>{
	
	if(action.type===INPUT_CHANGE_VALUE){
		const newState=JSON.parse(JSON.stringify(state));
		newState.inputValue=action.value;
		return newState;
	}
	if(action.type===INITIAL_ELEMENT){
		const newState=JSON.parse(JSON.stringify(state));
		newState.list=[...action.data];
		return newState;
	}
	if(action.type===ADD_LIST_ELEMENT){
		const newState=JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue="";
		return newState;
	}
	if(action.type===DELETE_ELEMENT){
		const newState=JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1);
		return newState;
	}
	return state;
}