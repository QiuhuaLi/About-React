import { injectGlobal }  from 'styled-components';
injectGlobal`
@font-face {
	font-family: "iconfont";
  src: url('./iconfont.eot?t=1533218297208'); /* IE9*/
  src: url('./iconfont.eot?t=1533218297208#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1533218297208') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1533218297208#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`