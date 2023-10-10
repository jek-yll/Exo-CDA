import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import ContactContext from "../contexts/ContactContext";

const ContactItem = ({contactId}) => {
    
    const contact = useContext(ContactContext).contacts.find(c => c.id === contactId)

    const navigate = useNavigate()

    const handlerEditClick = () => {
        navigate(`/contacts/edit/${contact.id}?mode=edit`)
    }

    const handlerDeleteClick = () => {
        navigate(`/contacts/delete/${contact.id}?mode=delete`)
    }
    
    return(
        <>
        <h1>{contact.firstname} {contact.lastname}</h1>
        <div>
        <p>mail : {contact.email}</p>
        <p>tel : {contact.phoneNumber}</p>
        <div>
            <button onClick={handlerEditClick}>Edit</button>
            <button onClick={handlerDeleteClick}>Delete</button>
        </div>
        </div>
        <hr />
        </>
    )
}

export default ContactItem