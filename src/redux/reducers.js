import { combineReducers } from 'redux'
import store from '../store'

const stories =(state =[], action)=>{
  console.log('this action', action.value)
  switch(action.type){
    case "STORIES":
      return [...state, action.value]
    default:
      return state
  }
}
const addImage =(state =[], action)=>{
  console.log('this action', action.value)
  switch(action.type){
    case "ADDING_IMAGE":
      return [...state, action.value]
    default:
      return state
  }
}
const setStyles = (state = {colorPrimary: '#BF94E4', buttonColor: '#FFFF00'}, action) =>{
  console.log('style action', action.value, action.type, store)
  switch(action.type){
    case "SET_STYLES":
      return action.value
    default:
      return state
  }
}

export default combineReducers({
  stories,
  addImage,
  setStyles,
})