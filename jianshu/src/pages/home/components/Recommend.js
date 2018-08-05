import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import {
	RecommendItem,
	RecommendWrapper,
	DownLoad
} from '../style.js'


class Recommend extends PureComponent{
	render(){
		const { list }=this.props;
		return(
			<RecommendWrapper>
				{
					list.map((item)=>{
						return(
							<RecommendItem key={item}>
								<img className="recImg" alt="" src={item} />
							</RecommendItem>
						)
					})
				}
				<DownLoad>
					<img className="code" alt="二维码" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
					<h6 className="downApp">
						下载简书手机App
						<i className="iconfont">&#xe644;</i>
					</h6>
					<p className="piace">随时随地发现和创作内容</p>
				</DownLoad>
			</RecommendWrapper>
		)
	}
}
const mapState=(state)=>{
	return{
		list:state.get("home").get("racList")
	}
}
export default connect(mapState,null)(Recommend);