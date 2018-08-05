import styled from 'styled-components';

export const LoginWrapper=styled.div`
	position:absolute;
	top:56px;
	left:0;
	right:0;
	bottom:0;
	width:100%;
	min-height:580px;
	background:#f1f1f1;
`
export const LoginInput=styled.div`
	width: 400px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    text-align:center;
    display: inline-block;
    box-sizing:border-box;
    input{
		width:300px;
		height:30px;
		background:#f1f1f1;
		border:1px solid #ddd;
		border-radius:3px;
		margin-bottom:20px;
		padding-left:10px;
    }
    button{
    	width:300px;
	    padding: 9px 18px;
	    font-size: 18px;
	    border: none;
	    border-radius: 25px;
	    color: #fff;
		background: #3194d0;
	    cursor: pointer;
	    outline: none;
	    display: block;
	    box-sizing:border-box;
    }
`