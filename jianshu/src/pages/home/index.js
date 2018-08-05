import React,{PureComponent} from 'react';
import { connect } from 'react-redux'; 
import Writer from './components/Writer.js';
import List from './components/List.js';
import Recommend from './components/Recommend.js';
import Topic from './components/Topic.js';
import { actionCreater } from './store';


import {
	HomeWarpper,
	HomeLeft,
	HomeRight,
	ScrollToTop
} from './style.js'

class Home extends PureComponent{
	handleToTop(){
		window.scrollTo(0,0);
	}
	render(){
		return(
			<HomeWarpper>
				<HomeLeft>
					<img className="img" alt="pic" src="//upload.jianshu.io/admin_banners/web_images/4368/c19f9350ef08c469f8fd461d25db7e8d8780f334.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{this.props.topIsShow? <ScrollToTop onClick={this.handleToTop.bind(this)}>回到顶部</ScrollToTop>:null}
			</HomeWarpper>
		)
	}
	componentDidMount(){
		this.props.getHomeData();
		this.bindEvents();
	}
	componentWillUnmount(){
		window.removeEventListener("scroll",this.props.changeTopShow);
	}
	bindEvents(){
		window.addEventListener("scroll",this.props.changeTopShow);
	}
}
const mapDispatch=(dispatch)=>{
	return {
		getHomeData(){
			dispatch(actionCreater.getHomeIfo());
		},
		changeTopShow(e){
			if(document.body.scrollTop>100){
				dispatch(actionCreater.changeTopShow(true));
			}else{
				dispatch(actionCreater.changeTopShow(false));
			}		
		}
	}
}
const mapState=(state)=>{
	return{
		topIsShow:state.getIn(["home","topIsShow"])
	}
}
export default connect(mapState,mapDispatch)(Home);