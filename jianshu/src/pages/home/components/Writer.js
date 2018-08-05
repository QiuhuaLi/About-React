import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {
	WritterWarpper,
	WritterTitle,
	Writter,WritterSwitch,
	WritterContain,ContainItem,WritterCheck
}from '../style.js'

class Writer extends PureComponent{
	constructor(props){
		super(props);
		this.handleClick=this.handleClick.bind(this);
	}
	
	render(){
		const { list }=this.props;
		return(
			<WritterWarpper>
				<WritterTitle>
					<Writter>推荐作者</Writter>
					<WritterSwitch onClick={()=>this.handleClick(this.switchIcon)}>
						换一换
						<i ref={(icon)=>{this.switchIcon=icon}} className="iconfont switch">&#xe851;</i>
					</WritterSwitch>
				</WritterTitle>
				<WritterContain>
					{
						list.map((item)=>{
							return(
								<ContainItem key={item.get("id")}>
									<img className="writerImg" alt="" src={item.get("wUrl")}/>
									<h6 className="writerName">{item.get("wName")}</h6>
									<p className="writerDo">{item.get("wDoing")}</p>
									<span className="focus">+关注</span>
								</ContainItem>
							)
						})
					}
					<WritterCheck>
						查看全部
						<i className="iconfont">&#xe644;</i>
					</WritterCheck>
			 	</WritterContain>
			</WritterWarpper>
		)
	}
	handleClick(spin){
		let originAngel=spin.style.transform.replace(/[^0-9]/ig,"");
		if(originAngel){
			originAngel=parseInt(originAngel,10);
		}else{
			originAngel=0;
		}
		console.log(originAngel)
		spin.style.transform=`rotate(${originAngel+360}deg)`;
	}
}

const mapState=(state)=>{
	return{
		list:state.getIn(["home","writerList"])
	}
}
      
export default connect(mapState,null)(Writer);