//header部分的主文件，Header是UI组件，connect返回容器组件

import React,{PureComponent} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import { Link } from 'react-router-dom';
import  {actionCreater as loginActionCreater} from '../../pages/login/store';

import {
	HeaderWarpper,
	Logo,
	Nav,NavItem,NavSearch,SearchWarpper,
	SearchIfo,SearchIfoTitle,SearchIfoSwitch,SearchIfoList,SearchIfoItem,
	Addition,Button
}from './style.js'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
class Header extends PureComponent{
	render(){
		const {focused,handleInputFocus,handleInputBlur,list,login}=this.props;
		return(
			<HeaderWarpper>
				<Link to="/">
					<Logo />
				</Link>
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					{
						login?
						<NavItem onClick={this.props.handleClickLogin} className="right">退出</NavItem>:
						<Link to="/login"><NavItem className="right">登录</NavItem></Link>
					}
					<NavItem className="right">
						<i className="iconfont">&#xe683;</i>
					</NavItem>
					<SearchWarpper>
						<CSSTransition
							in={focused}
							timeout={400}
							classNames="slider">
								<NavSearch 
									className={focused?"active":""}
									onFocus={()=>handleInputFocus(list)}
									onBlur={handleInputBlur}
								></NavSearch>
							</CSSTransition>
							<i className={focused?"active iconfont zoom":"iconfont zoom"}>&#xe60a;</i>
							{this.getListArea()}
					</SearchWarpper>
				</Nav>
				<Addition>
					<Link to="/write">
						<Button className="writting">
							<i className="iconfont">&#xe603;</i>
							写文章
						</Button>
					</Link>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWarpper>
		)
	}
	getListArea(){
		const {focused,mouseIn,list,page,totalPage,handleMouseEnter,handleMouseLeave,handleClickChangeList}=this.props;
		const pageList=[];
		const newList=list.toJS();
		if(newList.length){
			for(let i=(page-1)*10;i<page*10;i++){
				pageList.push(
					<SearchIfoItem key={i}>{newList[i]}</SearchIfoItem>
				)
			}
		}
		if(focused || mouseIn){
			return(
				<SearchIfo 
					onMouseEnter={handleMouseEnter}
				  onMouseLeave={handleMouseLeave}
				>
					<SearchIfoTitle>热门搜索</SearchIfoTitle>
					<SearchIfoSwitch onClick={()=>handleClickChangeList(page,totalPage,this.spinIcon)}>
						<i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe851;</i>
						换一批</SearchIfoSwitch>
					<SearchIfoList>
						{pageList}
					</SearchIfoList>
				</SearchIfo>
			)
		}
	}
}
const mapStateToProps=(state)=>{
	return{
		///reducer多了一层数据结构，所以要加上header这一层
		focused:state.getIn(['header','focused']),
		list:state.getIn(['header','list']),
		mouseIn:state.getIn(['header','mouseIn']),
		page:state.getIn(['header','page']),
		totalPage:state.getIn(['header','totalPage']),
		login:state.getIn(['login','login'])
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		handleInputFocus(list){
			(list.size===0)&&dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},
		handleClickChangeList(page,totalPage,spin){
			console.log(spin.style.transform);
			let originAngel=spin.style.transform.replace(/[^0-9]/ig,"");
			if(originAngel){
				originAngel=parseInt(originAngel,10);
			}else{
				originAngel=0;
			}
			// console.log(`rotate(${originAngel+360}deg)`);
			spin.style.transform=`rotate(${originAngel+360}deg)`;
			console.log(originAngel)
			if(page<totalPage){
				dispatch(actionCreators.changeList(page+1));
			}else{
				dispatch(actionCreators.changeList(1));
			}
		},
		handleClickLogin(){
			dispatch(loginActionCreater.logOut());
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);