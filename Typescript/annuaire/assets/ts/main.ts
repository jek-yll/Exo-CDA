import Person from "./classes/Person.js"

let addContact = document.querySelector('#btnAddContact')
let newContactFirstname = document.querySelector('#add-firstname') as HTMLInputElement 
let newContactLastname = document.querySelector('#add-lastname') as HTMLInputElement 
let newContactdateOfBirth = document.querySelector('#add-dateOfBirth') as HTMLInputElement 
let newContactEmail = document.querySelector('#add-email') as HTMLInputElement 
let newContactPhoneNumber = document.querySelector('#add-phoneNumber') as HTMLInputElement 
let newContactAvatarUrl = document.querySelector('#add-avatarURL') as HTMLInputElement 
let editContactFirstname = document.querySelector('#edit-firstname') as HTMLInputElement 
let editContactLastname = document.querySelector('#edit-lastname') as HTMLInputElement 
let editContactdateOfBirth = document.querySelector('#edit-dateOfBirth') as HTMLInputElement 
let editContactEmail = document.querySelector('#edit-firstname') as HTMLInputElement 
let editContactPhoneNumber = document.querySelector('#edit-firstname') as HTMLInputElement 
let editContactAvatarUrl = document.querySelector('#edit-firstname') as HTMLInputElement 
let sendBtn = document.querySelector('#createContact')
let contactList = document.querySelector('#contactsContainer')

let newContact: Person
let contactArray: Person[] = []

sendBtn.addEventListener ("click", () => {
    newContact = new Person(newContactFirstname.value, newContactLastname.value, newContactdateOfBirth.value, newContactEmail.value,
        newContactPhoneNumber.value, newContactAvatarUrl.value)
    // console.log(newContact);

    contactArray.push(newContact)
    // console.table(contactArray);

})

function contactDisplay(): void {
     contactArray.forEach((person) => 
       document.createElement("button")
     
     /*  `
        <button data-id=${person.id} class="btn btn-success w-100" >${person.firstname} ${person.lastname} </button>
        ` */
    )
}

contactList.innerHTML += contactDisplay()
