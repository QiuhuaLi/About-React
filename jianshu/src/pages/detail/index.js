import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { actionCreater } from './store';
import { withRouter } from 'react-router-dom';
import {
	DetailWrapper,Header,Content,
	Auther
} from './style.js';

class Detail extends PureComponent{
	render(){
		const { header , author , content }=this.props;
		return(
			<DetailWrapper>
				<Header>{header}</Header>
				<Auther dangerouslySetInnerHTML={{__html:author}} />
				<Content dangerouslySetInnerHTML={{__html:content}}/>
			</DetailWrapper>
		)
	}
	componentDidMount(){
		this.props.getDetailData(this.props.match.params.id);
	}
}
const mapState=(state)=>{
	return {
		header:state.getIn(["detail","header"]),
		author:state.getIn(["detail","author"]),
		content:state.getIn(["detail","content"])
	}
}
const mapDispatch=(dispatch)=>{
	return{
		getDetailData(id){
			console.log(id);
			dispatch(actionCreater.getDetailData(id));
		}
	}
}
export default connect(mapState,mapDispatch)(withRouter(Detail));