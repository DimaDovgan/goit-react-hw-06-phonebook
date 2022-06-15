import { PersonlistItem } from "./Person-list-item"
import {deleteContact } from '../../redux/Acions/Actions'
import { useSelector,useDispatch } from "react-redux";
export const ContactList = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => {
        let filterArr = state.rootReduser.contacts.items;
        return filterArr.filter(contact => contact.name.toLocaleLowerCase().includes(state.rootReduser.contacts.filter.toLocaleLowerCase()))
    })

    return <ul>{item.map(({ name, number, id }) => <PersonlistItem key={id} name={name} number={number} id={id} deleteContact={(id)=>()=>dispatch(deleteContact(id))} />)}</ul> 
}

