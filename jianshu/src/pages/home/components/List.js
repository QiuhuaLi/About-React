import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import { actionCreater } from '../store';
import { Link } from 'react-router-dom';
import {
	ListItem,
	ListComment,
	ListMore
} from '../style.js'

class List extends PureComponent{
	render(){
		const { list,getMoreIfo }=this.props;
		return(
			<div>
				{
					list.map((item,index)=>{
						if(item.get("listUrl")){
							return(
								<Link key={index} to={"/detail/"+item.get("id")} style={{"textDecoration":"none"}}>
									<ListItem>
										<img className="listImg" alt="" src={item.get("listUrl")}/>
										<h3 className="title">{item.get("title")}</h3>
										<p className="article">{item.get("article")}</p>
										<ListComment>
											<span className="commet">文心剑胆</span>
											<i className="iconfont">&#xe663;</i>
											<span className="commet">47</span>
											<i className="iconfont">&#xe60b;</i>
											<span className="commet">56</span>
										</ListComment>
									</ListItem>
								</Link>
							)
							
						}else{
							return(
								<Link key={index} to={"/detail/"+item.get("id")} style={{"textDecoration":"none"}}>
									<ListItem>								
										<h3 className="title">{item.get("title")}</h3>
										<p className="article">{item.get("article")}</p>
										<ListComment>
											<span className="commet">文心剑胆</span>
											<i className="iconfont">&#xe663;</i>
											<span className="commet">47</span>
											<i className="iconfont">&#xe60b;</i>
											<span className="commet">56</span>
										</ListComment>
									</ListItem>
								</Link>
							)
						}
					})
				}
				<ListMore onClick={getMoreIfo}>
				阅读更多
				</ListMore>
			</div>
		)
	}
};
const mapState=(state)=>{
	return{
		list:state.getIn(["home","articleList"])
	}
};
const mapDispatch=(dispatch)=>{
	return{
		getMoreIfo(){
			const action=actionCreater.getMoreIfo();
			dispatch(action);
		}
	}
};
export default connect(mapState,mapDispatch)(List);