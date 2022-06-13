import styles from "./style-phonebook.module.css"
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { items, filter,deleteContact } from '../redux/store'
 const Filter = ({ filter,hendelChangeInputFilter }) => {
    
    return <div><input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        required
        onChange={hendelChangeInputFilter}
    />
    </div>
}
Filter.propTypes = {
    hendelChangeInputFilter: PropTypes.func.isRequired,
    filter:PropTypes.string.isRequired,
    
}

const mapStateToProps = (state) => {
    return {
        filter: state.rootReduser.contacts.filter,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        hendelChangeInputFilter: (event) => dispatch(filter(event.currentTarget.value)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter)