import { configureStore ,createReducer,createAction,getDefaultMiddleware} from '@reduxjs/toolkit';
import { combineReducers, createStore } from 'redux'
import loger from 'redux-logger'
const middleware=[...getDefaultMiddleware(),loger]
const statePhone = {
  contacts: {
    items: [],
    filter: ''
  }
}

export const items = createAction("phone/item");
export const filter = createAction("phone/filter");
export const deleteContact = createAction("phone/delateItem");
export const filterItems = createAction("phone/delate");
export const readingLocalHost = createAction("phone/readingLocalHost");
export const initsial = createAction('@@INIT');


const itemsReduser = createReducer([], {
  [items]: (state, action) => {
    const obj = { ...action.payload.person, id: action.payload.id }
    if (state.some(contact => contact.name.toLocaleLowerCase() === obj.name.toLocaleLowerCase())) {
       alert(`${obj.name} is anlready in contacts npm run build`)
           return [...state]
    }
    localStorage.setItem("contacts", JSON.stringify([...state,obj]))
    return [...state,obj]},
  [deleteContact]: (state, action) => {
    let delateContacts = state.filter(contact => (contact.id !== action.payload));
    localStorage.setItem("contacts", JSON.stringify([...delateContacts]))
    return [...delateContacts]
  },
  [readingLocalHost]: (state, action) => {
    if (!action.payload) { 
    return [...state]
    }
    return [...action.payload]
  },
  [initsial]: (state, action) => {

    const contactsInLs = JSON.parse(localStorage.getItem("contacts"))
    if (contactsInLs) {
      return [...contactsInLs];
    }
    return [...state];
  }
  
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
const rootReduser = combineReducers({
  contacts:reduser
})

const store = configureStore({
    reducer: {
        rootReduser,
    },
    middleware,
})

export default store;