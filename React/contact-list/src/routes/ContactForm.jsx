import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import Form from "../components/shared/Form"
import { useContext, useEffect, useRef } from "react"
import ContactContext from "../contexts/ContactContext"
import Contact from './../models/Contact';

const ContactForm = () => {

    const { contacts, setContacts } = useContext(ContactContext)

    const objParams = useParams()
    const contact = contacts.find(c => c.id === +objParams.contactId)
    const [searchParams] = useSearchParams()
    const mode = searchParams.get('mode')

    const navigate = useNavigate()

    const firstnameInputRef = useRef()
    const lastnameInputRef = useRef()
    const emailInputRef = useRef()
    const phoneNumberInputRef = useRef()

    const submitHandler = () => {
        if ( mode === 'edit') {
            console.log('edition du contact');
            const contactsCopy = contacts.slice()

            const index = contacts.indexOf(contact)
            console.log(`index : ${index}`);

            const modifiedContact = contact
            modifiedContact.firstname = firstnameInputRef.current.value
            modifiedContact.lastname = lastnameInputRef.current.value
            modifiedContact.email = emailInputRef.current.value
            modifiedContact.phoneNumber = emailInputRef.current.value

            console.log(modifiedContact);
            contactsCopy[index] = modifiedContact
            setContacts(contactsCopy)

            

        } else if ( mode === 'delete') {
            setContacts((contacts.filter((c) => c.id === contact.id)))
        } else {
            setContacts((prev => [...prev, new Contact(firstnameInputRef.current.value, lastnameInputRef.current.value,
                emailInputRef.current.value, phoneNumberInputRef.current.value)]))
        }
        navigate(`/contacts`)
    }

    const hydrateInput = () => {
        firstnameInputRef.current.value = contact.firstname
        lastnameInputRef.current.value = contact.lastname
        emailInputRef.current.value = contact.email
        phoneNumberInputRef.current.value = contact.phoneNumber
    }

    const lockedInput = () => {
        firstnameInputRef.current.readonly
        lastnameInputRef.current.readonly
        emailInputRef.current.readonly
        phoneNumberInputRef.current.readonly
    }

    useEffect(() => {
        if (mode === 'edit') {
            contact.firstname = firstnameInputRef.current.value
            contact.lastname = lastnameInputRef.current.value
            contact.email = emailInputRef.current.value
            contact.phoneNumber = phoneNumberInputRef.current.value
        }
    })

    useEffect(() => {
        switch (mode) {
            case 'edit':
                hydrateInput();
                break;
            case 'delete':
                hydrateInput()
                lockedInput()
                break;
            default:
        }
    }, [mode])

    return (
        <>
            <h1>{mode} contact </h1>
            <hr />
            <Form onSubmit={submitHandler}>
                <div>
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">Prénom :</label>
                        <input type="text" className="form-control" id="firstname" placeholder="Prénom" ref={firstnameInputRef} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Nom :</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Nom" ref={lastnameInputRef} />
                    </div><div className="mb-3">
                        <label htmlFor="email" className="form-label">Mail :</label>
                        <input type="text" className="form-control" id="email" placeholder="Mail" ref={emailInputRef} />
                    </div><div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Numéro de téléphone :</label>
                        <input type="text" className="form-control" id="phoneNumber" placeholder="Tel" ref={phoneNumberInputRef} />
                    </div>
                </div>
                {mode === 'add' ? <button className="btn btn-success">Ajouter</button> : 
                mode === 'edit' ? <button className="btn btn-warning">Modifier</button> :
                <button className="btn btn-danger">Supprimer</button>}

            </Form>
        </>
    )
}

export default ContactForm