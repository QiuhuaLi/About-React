import styled from 'styled-components';

export const HomeWarpper=styled.div`
	width:960px;
	overflow:hidden;
	margin:0 auto;
`;
export const HomeLeft=styled.div`
	width:625px;
	float:left;
	margin-left:15px;
	padding-top:30px;
	.img{
		width:625px;
		height:270px;
		border-radius:6px;
		margin-bottom:35px;
	}
`;
export const HomeRight=styled.div`
	width:280px;
	float:left;
	margin-left:40px;
	height:300px;
`;
export const TopicWarpper=styled.div`
	width:625px;
	margin-bottom:20px;
	border-bottom: 1px solid #f0f0f0;
`;
export const TopicItem=styled.a`
	display: inline-block;
	margin: 0 18px 18px 0;
	padding: 0 11px 0 0;
	height: 32px;
	line-height:32px;
	background-color: #f7f7f7;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	vertical-align: top;
	cursor:pointer;
	font-size:14px;
	.topicPic{
	 	width:32px;
	  	height:32px;
		diaplay:block;
		float:left;
		margin-right:6px;
	  }
`;
export const ListItem=styled.div`
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    overflow:hidden;
    cursor:pointer;
    .listImg{
    	width:125px;
    	height:100px;
    	display:block;
    	float:right;
    }
    .title{
			color: #333;
			font-size: 18px;
			margin:-7px 0 4px;
			font-weight:bold;
    }
    .article{
    	margin: 0 0 8px;
    	font-size: 13px;
    	line-height: 24px;
   		color: #999;
    }
`;
export const ListComment=styled.div`
	padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    .commet{
    	margin-right: 15px;
    	color: #b4b4b4;
    }
    .iconfont{
    	font-size: 16px;
    	font-style: normal;
    	margin-right:5px;
    	color:#b4b4b4;
    }
`;
export const ListMore=styled.div`
	width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    display: block;
    box-sizing:border-box;
    cursor:pointer;
`;
export const RecommendWrapper=styled.div`
	padding-top:30px;
	width:280px;
`;
export const RecommendItem=styled.div`
	min-height: 50px;
 	margin-bottom: 8px;
  	border-radius: 4px;
  	margin-top:-4px;
  	cursor:pointer;
	.recImg{
		width:100%;
		height:50px;
	}
`
export const DownLoad=styled.div`
	margin-bottom: 30px;
	margin-top:4px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    overflow:hidden;
    box-sizing:border-box;
    cursor:pointer;
	.code{
		width:60px;
		height:60px;
		margin-right:15px;
		display:block;
		float:left;
	}
	.downApp{
		margin-top:8px;
		line-height:21px;
		font-size: 15px;
    	color: #333;
    	.iconfont{
    		font-size: 12px;
    		margin-left:5px;
    	}
	}
	.piace{
		line-height:18px;
		margin-top: 4px;
    	font-size: 13px;
    	color: #999;
	}
`
export const WritterWarpper=styled.div`
	width:280px;
`
export const WritterTitle=styled.div`
	overflow:hidden;
`
export const Writter=styled.div`
	font-size: 14px;
    color: #969696;
    float:left;
`
export const WritterSwitch=styled.div`
	float: right;
    display: inline-block;
    font-size: 14px;
    color: #969696;
    width:60px;
    cursor:pointer;
    .iconfont{
    	display:block;
    	float:left;
    	margin-right:5px;
    	font-size:13px;
    	transform:rotate(0deg);
    	transition:transform 0.4s ease-in;
    }
`
export const WritterContain=styled.div`
	width:280px;
	margin-bottom:30px;
`
export const ContainItem=styled.div`
	width:280px;
	margin-top:15px;
	position:relative;
	overflow:hidden;
	.writerImg{
		width:48px;
		height:48px;
		border-radius:50%;
		display:block;
		float:left;
	}
	.writerName{
		width:193px;
		line-height:20px;
		padding-top: 4px;
	    font-size: 14px;
	    display: block;
	    color:#333;
	    padding-left:10px;
	    float: left;
	    box-sizing:border-box;
	}
	.writerDo{
		width:193px;
		margin-top: 2px;
    	font-size: 12px;
    	color: #969696;
    	line-height: 20px;
		padding-left:10px;
		float: left;
	    box-sizing:border-box;
	}
	.focus{
		position:absolute;
		width:39px;
	    margin-top: 5px;
	    padding: 0;
	    font-size: 14px;
	    color: #42c02e;
	    cursor:pointer;
	    right:0;
	    top:0;
	}
`
export const WritterCheck=styled.div`
	    padding: 7px 7px 7px 12px;
	    width:100%;
	    line-height:19px;
	    font-size: 13px;
	    color: #787878;
	    background-color: #f7f7f7;
	    border: 1px solid #dcdcdc;
	    border-radius: 4px;
	    box-sizing:border-box;
	    text-align:center;
	    margin-top:20px;
	    cursor:pointer;
	    .iconfont{
	    	font-size:10px;
			margin-left:6px;
	    }
`;
export const ScrollToTop=styled.div`
	padding:10px 10px;
	border:1px solid #dcdcdc;
	border-radius:5px;
	cursor:pointer;
	color:#fff;
	background:#a5a5a5;
	font-size:13px;
	position:fixed;
	bottom:100px;
	right:100px;
`;


