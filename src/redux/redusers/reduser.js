import {items,filter,deleteContact,readingLocalHost} from '../Acions/Actions'
import {createReducer} from '@reduxjs/toolkit';
import { combineReducers} from 'redux'

const itemsReduser = createReducer([], {
  [items]: (state, { payload:{name,number,id}}) => {
    const obj = {name,number,id }
    if (state.some(contact => contact.name.toLocaleLowerCase() === obj.name.toLocaleLowerCase())) {
       alert(`${obj.name} is anlready in contacts npm run build`)
           return [...state]
    }
    return [...state,obj]},
  [deleteContact]: (state, action) => {
    let delateContacts = state.filter(contact => (contact.id !== action.payload));
    return [...delateContacts]
  },
  [readingLocalHost]: (state, action) => {
    if (!action.payload) { 
    return [...state]
    }
    return [...action.payload]
  },
  
});
const filterReduser = createReducer("", {
  [filter().type]: (state, action) => {
    return action.payload
  }
});


const reduser = combineReducers({
  items: itemsReduser,
  filter:filterReduser,
})
export const rootReduser = combineReducers({
  contacts:reduser
})