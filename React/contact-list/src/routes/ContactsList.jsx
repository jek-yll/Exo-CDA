import { useContext } from "react"
import ContactContext from "../contexts/ContactContext"
import ContactItem from "../components/ContacItem"
import { useNavigate } from "react-router-dom"

const ContactsList = () => {

    const contacts = useContext(ContactContext).contacts
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/contacts/add?mode=add`)
    }

    console.log(contacts);

    if (!contacts || contacts?.length === 0){
        return (
            <>
                <h1>Mes contacts</h1>
                <button onClick={clickHandler}>Ajouter un contact</button>
                <hr />
                <p>Aucun contact présent dans la base de données</p>
            </>
        )
    } else {
        return(
            <>
                <h1>Mes contacts</h1>
                <button onClick={clickHandler}>Ajouter un contact</button>
                <hr />
                {contacts.map((contact, index) => (
                    <ContactItem key={index} contactId={contact.id}/>
                ))}
            </>
        )
    }
}

export default ContactsList