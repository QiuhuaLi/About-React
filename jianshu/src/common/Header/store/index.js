import reducer from './reducer.js';
import *as constants from './constants.js';
import * as actionCreators from './actionCreators.js'

export {reducer,constants,actionCreators}

//header下的store的一个出口文件，所有store中用到的文件库：常量库、actionCreators、reducers，
//外部直接引入到store即可获得所有的文件，为了方便外部引入时一时间找不到文件的路径