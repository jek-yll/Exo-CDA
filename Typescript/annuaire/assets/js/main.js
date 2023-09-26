import Person from "./classes/Person.js";
let addContact = document.querySelector('#btnAddContact');
let newContactFirstname = document.querySelector('#add-firstname');
let newContactLastname = document.querySelector('#add-lastname');
let newContactdateOfBirth = document.querySelector('#add-dateOfBirth');
let newContactEmail = document.querySelector('#add-email');
let newContactPhoneNumber = document.querySelector('#add-phoneNumber');
let newContactAvatarUrl = document.querySelector('#add-avatarURL');
let editContactFirstname = document.querySelector('#edit-firstname');
let editContactLastname = document.querySelector('#edit-lastname');
let editContactdateOfBirth = document.querySelector('#edit-dateOfBirth');
let editContactEmail = document.querySelector('#edit-firstname');
let editContactPhoneNumber = document.querySelector('#edit-firstname');
let editContactAvatarUrl = document.querySelector('#edit-firstname');
let sendBtn = document.querySelector('#createContact');
let contactList = document.querySelector('#contactsContainer');
let newContact;
let contactArray = [];
sendBtn.addEventListener("click", () => {
    newContact = new Person(newContactFirstname.value, newContactLastname.value, newContactdateOfBirth.value, newContactEmail.value, newContactPhoneNumber.value, newContactAvatarUrl.value);
    // console.log(newContact);
    contactArray.push(newContact);
    // console.table(contactArray);
});
function contactDisplay() {
    contactArray.forEach((person) => document.createElement("button")
    /*  `
       <button data-id=${person.id} class="btn btn-success w-100" >${person.firstname} ${person.lastname} </button>
       ` */
    );
}
contactList.innerHTML += contactDisplay();
