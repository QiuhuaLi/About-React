import React,{Component,Fragment} from "react";
import store from "./store"
import {getChangeValueAction,getAddListAction,getDeleteEAction,getInitialAction,useSagaGetInitial}from "./store/actionCreator.js"
import UIcomponent from "./UIcomponent.js";
import axios from "axios";
import "antd/dist/antd.css";


class Useantd extends Component{
	constructor(props){
		super(props);
		this.state=store.getState();
		this.handleChange=this.handleChange.bind(this);
		this.handleStoreChange=this.handleStoreChange.bind(this);
		this.handleClick=this.handleClick.bind(this);
		this.handleDelete=this.handleDelete.bind(this);
		store.subscribe(this.handleStoreChange);
	}
	render(){
		return(
			<UIcomponent 
				inputValue={this.state.inputValue}
				list={this.state.list}
				handleChange={this.handleChange}
				handleClick={this.handleClick}
				handleDelete={this.handleDelete}
			/>
		)
	}

	componentDidMount(){
		const action=useSagaGetInitial();
		store.dispatch(action);
	}
	handleChange(e){
		const action=getChangeValueAction(e.target.value);
		store.dispatch(action);
	}
	handleClick(){
		const action=getAddListAction();
		store.dispatch(action);
	}
	handleDelete(index){
		const action=getDeleteEAction(index);
		store.dispatch(action);
	}
	handleStoreChange(){
		// console.log(store.getState());
		this.setState(store.getState())
	}
}
export default Useantd;