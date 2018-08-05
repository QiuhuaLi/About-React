import React,{Component,Fragment} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			show:true,
			list:[]
		}
		//注意这里一定要绑定this
		this.handleAddItem=this.handleAddItem.bind(this);
	}

	render(){
		return (
			<Fragment>
				<TransitionGroup>
					{
						this.state.list.map((item,index)=>{
							return(
								<CSSTransition
								timeout={1000}
								classNames="fade"
								// unmountOnExit
								appear={true}
								key={index}
							>
								<div>{item}</div>				
								</CSSTransition>
							)
						})
					}
					</TransitionGroup>
					<button onClick={this.handleAddItem}>toggle</button>
			</Fragment>
		)
	}

	handleAddItem(){
		this.setState((prevState)=>{
			return {
				list:[...prevState.list,"item"]
			}
		})
	}
}
export default App;