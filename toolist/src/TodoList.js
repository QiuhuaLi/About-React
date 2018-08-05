import React,{Component,Fragment} from 'react';
import TodoItem from "./TodoItem.js";
import axios from "axios"
import tool from "./tool.css"

//定义一个react组件
class TodoList extends Component {

  //定义类的构造函数
  constructor(props){
    super(props);//不懂是啥。
    //定义这个类相关的数据
    this.state={
      list:[],
      inputValue:""
    }
    //在构造函数中统一修改函数内this的指向
    this.handleChange=this.handleChange.bind(this);
    this.handleBtnClick=this.handleBtnClick.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
  }
  
  render() {
    return (
      <Fragment>
        <div>
        <label htmlFor="input">请输入数据</label>
          <input 
            id="input" 
            value={this.state.inputValue}  
            onChange={this.handleChange}
            />
          <button  onClick={this.handleBtnClick} style={{"background-color":"red"}}>add</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }
  componentDidMount(){
    axios.get("./api/todolist")
         .then((re)=>{
          this.setState(()=>({
            list:[...re.data]
          }))
         })
         .catch(()=>{alert("false")})
  }
  //注意，这个事件处理函数中的this->button。因此要绑定onclick中的this->当前组价（类）
  handleBtnClick(){
    //当点击事件发生时，动态修改页面上的数据，也就是会触发重绘
    this.setState((prevState)=>({
        list:[...prevState.list,prevState.inputValue],
        inputValue:''
      }))
  }
  //将input中输入的值，加入到inputValue中，以便在点击add时加入到列表中
  handleChange(e){
    const value=e.target.value;
    this.setState((prevState)=>({
      inputValue:value
    }))
  }
  //删除操作
  handleDelete(index){
    this.setState((prevState)=>{
      const list=[...prevState.list];
      list.splice(index,1);
      return {
        list
      }
    });
  }
  //简化render函数
  getTodoItem(){
    return(
       this.state.list.map((item,index)=>{
              return(
                <TodoItem 
                  key={index}
                  content={item}
                  index={index}
                  deleteItem={this.handleDelete}
                />
                )
            })
    )
  }
}

export default TodoList;
