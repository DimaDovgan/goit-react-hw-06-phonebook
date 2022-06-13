import { useState,useEffect,useRef} from "react"
import  ContactList   from "./person-list/Person-list"
import { nanoid } from 'nanoid'
import  Filter  from "./Filter"
import  Form  from "./Forma"
import { connect } from "react-redux"
import { items, filter,deleteContact,readingLocalHost,initsial } from '../redux/store'
import store from '../redux/store'




const PhoneBook = () => {

    
    return <div>
        
        <h1>Phonebook</h1>
          <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
    </div>

}

const mapDispatchToProps = (dispatch) => {
    return {
        initsialFunc: () =>  dispatch(initsial()),
    }
}

export default connect(null,mapDispatchToProps)(PhoneBook)