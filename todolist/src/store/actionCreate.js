import {CHANGE_INPUT_VALUE,ADD_LIST_ITEM,DELETE_ITEM}from './actionType.js';

export const getChangeInputAction=(value)=>({
	type:CHANGE_INPUT_VALUE,
	value
});
export const getAddListAction=()=>({
	type:ADD_LIST_ITEM
});
export const getDeleteItemAction=(index)=>({
	type:DELETE_ITEM,
	index
});