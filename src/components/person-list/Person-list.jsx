import { PersonlistItem } from "./Person-list-item"
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { items, filter,deleteContact } from '../../redux/store'
const ContactList = ({ item, deleteContact ,filter}) => {

    return <ul>{item.map(({ name, number, id }) => <PersonlistItem key={id} name={name} number={number} id={id} deleteContact={deleteContact} />)}</ul> 
}

const mapStateToProps = (state) => {
    let filterArr=state.rootReduser.contacts.items
    return {
        item: filterArr.filter(contact => contact.name.toLocaleLowerCase().includes(state.rootReduser.contacts.filter.toLocaleLowerCase())),
        filter: state.rootReduser.contacts.filter,
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        hendelChangeInputFilter: (event) => dispatch(filter(event.currentTarget.value)),
        deleteContact:(id)=>()=>dispatch(deleteContact(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactList)