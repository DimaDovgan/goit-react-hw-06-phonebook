import {ContactList}   from "./person-list/Person-list"
import {Filter}  from "./Filter"
import {Form}  from "./Forma"

export const PhoneBook = () => {

    return <div>
        
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
    </div>

}
