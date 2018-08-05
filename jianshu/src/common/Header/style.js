//header部分的样式组件

import styled from 'styled-components';
import Logopic from '../../static/logo.png';

export const HeaderWarpper=styled.div`
	width:100%;
	min-width:960px;
	height:56px;
	position:relative;
	border:1px solid #f0f0f0;
`
//为a标签添加方法attrs里面为一个元素的属性对象，href:"/"每次点击都刷新到首页
export const Logo=styled.div`
	display:block;
	width:7.435%;
	height:100%;
	position:absolute;
	top:0;
	left:0;
	background:url(${Logopic}) no-repeat;
	background-position:center;
	background-size:contain;
`
export const Nav=styled.div`
	width:71.375%;
	height:100%;
	margin:0 auto;
	padding-right:70px;
	box-sizing:border-box;
`
export const NavItem=styled.div`
	line-height:26px;
	height:56px;
	padding:15px;
	box-sizing:border-box;
	color:#333;
	cursor:pointer;
	&.left{
		float:left;
	}
	&.right{
		float:right;
	}
	&.active{
		color:#ea6f5a;
	}
`

//对自己的不同类名设置不同的样式使用&.类名{}；对包含的子元素不同的类设置不同的样式使用.类名{}
export const SearchWarpper=styled.div`
	float:left;
	position:relative;
	margin-left:20px;
	.zoom{
		position:absolute;
		right:5px;
		bottom:5px;
		width:30px;
		line-height:30px;
		border-radius:15px;
		text-align:center;
		&.active{
			background:#777;
		}
	}
`
export const NavSearch=styled.input.attrs({
	placeholder:"搜索"
})`
	width:160px;
	height:38px;
	border:none;
	outline:none;
	border-radius:19px;
	margin-top:9px;
	padding:0 30px 0 20px;
	background:#eee;
	font-size:14px;
	color:#777;
	box-sizing:boder-box;
	&.slider-enter{
		transition:width 0.4s ease-in;
	}
	&.slider-enter-active{
		width:240px;
	}
	&.slider-exit{
		transition:width 0.4s ease-in;
	}
	&.slider-exit-active{
		width:160px;
	}
	&::placeholder{
		color:#999;
	}
	&.active{
		width:240px;
	}
`
export const SearchIfo=styled.div`
	position:absolute;
	margin-top: 9px;
    width: 250px;
    left: 0;
    top: 100%;
    border-radius: 4px;
    padding:20px 20px 10px;
    overflow:hidden;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchIfoTitle=styled.span`
    float: left;
    font-size: 14px;
    color: #969696;
`
export const SearchIfoSwitch=styled.a`
    float: right;
    font-size: 13px;
    color: #969696;
    background-color: transparent;
    border-width: 0;
    padding: 0;
    cursor:pointer;
    .spin{
    	display:inline-block;
    	margin-right:2px;
    	font-size:14px;
    	transform:rotate(270deg);
    	transition:all 0.2s ease-in;
    	transform-origin:center center;
    }
`
export const SearchIfoList=styled.div`
	clear:both;
    margin-top:30px;
	overflow:hidden;
`
export const SearchIfoItem=styled.a`
	float:left;
    margin-right:10px;
    margin-bottom:6px;
    display:inline-block;
    line-height:20px;
    font-size:12px;
    padding:2px 6px;
    color:#787878;
    border:1px solid #ddd;
    border-radius:3px;
    cursor:pointer;
`


export const Addition=styled.div`
	position:absolute;
	height:56px;
	top:0;
	right:0;
`
export const Button=styled.div`
	border:1px solid rgba(236,97,73,.7);
	color:#ea6f5a;
	float:right;
	line-height:38px;
	border-radius:19px;
	margin-top:9px;
	margin-right:20px;
	padding:0 20px;
	font-size:14px;
	&.writting{
		background:#ec6149;
		color:#fff;
	}
	&.reg{
		color:#ec6194;
	}
`




