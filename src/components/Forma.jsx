import { useState,useEffect} from "react"
import styles from "./style-phonebook.module.css"
import { items } from "../redux/Acions/Actions";
import { nanoid } from 'nanoid'
import { useDispatch } from "react-redux";

export const Form = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const hendelChange = (event) => {
        const keyObject = event.currentTarget.name
        switch (keyObject) {
        case 'name':
        setName(event.currentTarget.value)
    break;
        case 'number':
        setNumber(event.currentTarget.value)
    break;
    default:
    console.log("error");
        }  
    }

    const addPerson = (event) => {
        event.preventDefault();
        dispatch(items({name,number,id:nanoid()}))
        formReset();
        
    }
    const formReset = () => {
        setName("");
        setNumber("");
    }
    
    return <form onSubmit={addPerson} className={styles.forma}>
            <label className={styles.label}>Name<input
                className={styles.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
                onChange={hendelChange} /></label>
            <label className={styles.label}>Number
                <input
                    className={styles.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={hendelChange}
        /></label>
        <button type="submit" className={styles.button} >add</button>
        </form>
    }
