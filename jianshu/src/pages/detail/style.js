import styled from 'styled-components';

export const DetailWrapper=styled.div`
	margin: 0 auto;
    padding-top: 20px;
    width: 620px;
    overflow:hidden;
`
export const Header=styled.div`
	word-break: break-word!important;
    word-break: break-all;
    margin-top:20px;
    margin-bottom:30px;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
`
export const Content=styled.div`
	width:100%;
	p{
		word-break: break-word!important;
		margin: 0 0 25px;
		color: #2f2f2f;
	    font-size: 16px;
	    font-weight: 400;
	    line-height: 1.7;
	    b{
	    	    font-weight: 700;
	    	    color: #2f2f2f;
	    	    font-size: 16px;
			    line-height: 1.7;
	    }
	}
	img{
		width:100%;
		border-radius:5px;
		margin-bottom:25px;
	}
`
export const Auther=styled.div`
	margin:30px 0 40px;
	width:100%;
	overflow:hidden;
	img{
		width: 48px;
	    height: 48px;
	    vertical-align: middle;
	    display: inline-block;
	    cursor: pointer;
	    border-radius:50%;
	    float:left;
	}
	h5{
		margin-left: 8px;
		float:left;
		width:564px;
		span{
			margin-right: 3px;
		    font-size: 16px;
		    vertical-align: middle;
		    color:#333;
		}
		b{
		    border-radius: 40px;
			color: #fff;
			background-color: #42c02e;
			font-weight: 400;
	    	line-height: normal;
		    padding: 1px 9px 1px 7px;
		    font-size: 12px;
		    margin-left:3px;
		}
	}
	h6{
		margin-left: 8px;
		float:left;
		width:564px;
		margin-top: 10px;
	    font-size: 12px;
	    color: #969696;
	    span{
	    	padding-right:5px;
	    }
	}
`