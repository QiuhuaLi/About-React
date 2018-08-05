import React,{ Component }from "react";
import PropTypes from "prop-types";

class TodoItem extends Component{

	constructor(props){
		super(props);
		this.handleDelete=this.handleDelete.bind(this);
	}
	render(){
		const {content}=this.props;
		return <div onClick={this.handleDelete}>{content}</div>
	}
	///TodoItem.propTypes={
	// 	content:PropTypes.string,
	// 	index:PropTypes.number,
	// 	deleteItem:PropTypes.func
	// }
	shouldComponentUpdate(nextProps,nextState){
		if(nextProps.content !==this.props.content){
			return true;
		}else{
			return false;
		}
	}
	///点击事件处理函数，通过调用父组件的方法向父组件传递方法
	handleDelete(){
		const {index,deleteItem}=this.props;
		deleteItem(index);
	}
}

export default TodoItem;
