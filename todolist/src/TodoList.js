import React, { Component } from 'react';
import {getChangeInputAction,getAddListAction,getDeleteItemAction}from './store/actionCreate.js';

import { connect } from 'react-redux';


//当一个类中只有一个render函数时，可以使用无状态组件来代替。传入组件对象（UI组件）
const TodoList=(props)=>{
  //使用结构赋值
  const {list,inputValue,changeInputValue,addList,deleteItem}=props;
  return (
      <div>
        <div>
          <label htmlFor="name">名字：</label>
          <input id="name" value={inputValue} placeholder="请输入数据" onChange={changeInputValue}/>
          <button onClick={addList}>提交</button>
        </div>
        <ul> 
        {
          list.map((item,index)=>{
            return <li onClick={deleteItem.bind(this,index)} key={index}>{item}</li>
          })
        }    
        </ul>
      </div>
    );
}
///专门存储数据(store中的数据映射到props中)
const mapStateToProps=(state)=>{
  return{
    inputValue:state.inputValue,
    list:state.list
  }
}
//专门存储逻辑（需要改变store中的值的方法存储在这里，传入了store的dispatch方法，里面可以直接使用）
const mapDispatchToProps=(dispatch)=>{
  return{
    changeInputValue(e){
      const value=e.target.value;
      const action=getChangeInputAction(value);
      dispatch(action);

    },
    addList(){
      const action=getAddListAction();
      dispatch(action);
    },
    deleteItem(index){
      const action=getDeleteItemAction(index);
      dispatch(action)
    }
  }
}

//导出一个connect连接之后的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
