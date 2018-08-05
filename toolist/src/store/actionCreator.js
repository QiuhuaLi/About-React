import {INPUT_CHANGE_VALUE,ADD_LIST_ELEMENT,DELETE_ELEMENT,INITIAL_ELEMENT,GET_INITIAL_LIST}from "./Actiontypes.js"



export const getChangeValueAction= (value)=>({
 	type:INPUT_CHANGE_VALUE,
	value
 })
export const getAddListAction= ()=>({
 	type:ADD_LIST_ELEMENT,
 })

export const getDeleteEAction= (index)=>({
 	type:DELETE_ELEMENT,
	index
 })
export const getInitialAction=(data)=>({
	type:INITIAL_ELEMENT,
	data
})
export const useSagaGetInitial=()=>({
	type:GET_INITIAL_LIST
})
