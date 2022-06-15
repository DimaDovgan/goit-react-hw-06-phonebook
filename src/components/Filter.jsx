import styles from "./style-phonebook.module.css"
import {filter} from '../redux/Acions/Actions'
import { useSelector,useDispatch } from "react-redux";
export const Filter = () => {
    const filterValue = useSelector(state => state.rootReduser.contacts.filter);
    const dispatch = useDispatch();
    return <div><input
        className={styles.input}
        type="text"
        name="filter"
        value={filterValue}
        required
        onChange={(event) => dispatch(filter(event.currentTarget.value))}
    />
    </div>
}