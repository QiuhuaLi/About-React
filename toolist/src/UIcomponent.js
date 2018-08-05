import React,{Component} from 'react';
import {Input,List,Button} from "antd";

const UIcomponent= ( props )=>{
	return (
			<div style={{marginTop:"10px",marginLeft:"10px"}}>
				<Input value={props.inputValue}
					   placeholder="请输入数据"
					   style={{width:"300px",marginRight:"5px"}} 
					   onChange={props.handleChange}
	      		/>
	      		<Button type="primary" onClick={props.handleClick}>Primary</Button>
	      		<List
	      		  style={{width:"300px"}}
	      		  size="small"
			      bordered
			      dataSource={props.list}
			      renderItem={(item,index)=> (<List.Item onClick={ () => {props.handleDelete(index)}}>{item}</List.Item>)}
			    />
			</div>
		)
}
export default UIcomponent;