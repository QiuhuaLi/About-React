import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {
	TopicWarpper,
	TopicItem
} from '../style.js';

class Topic extends PureComponent{
	render(){
		const { list }=this.props;
		return(
			<TopicWarpper>
				{
					list.map((item)=>{
						return(
							<TopicItem key={item.get("id")}>
								<img alt="" className="topicPic"src={item.get("picUrl")}/>
								{item.get("picName")}
							</TopicItem>
						)
					})
				}
			</TopicWarpper>
		)
	}
}
const mapState=(state)=>{
	return{
		list:state.getIn(["home","topicList"])
	}
}
export default connect(mapState,null)(Topic);