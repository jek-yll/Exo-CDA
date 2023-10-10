let contactCount = 0

class Contact {
    constructor (_firstname, _lastname, _email, _phoneNumber) {
        this._id = ++contactCount
        this._firstname = _firstname
        this._lastname = _lastname
        this._email = _email
        this._phoneNumber = _phoneNumber

    }

    get id() {
        return this._id
    }
    
    get firstname() {
        return this._firstname
    }

    get lastname() {
        return this._lastname
    }
    
    get email() {
        return this._email
    }

    get phoneNumber() {
        return this._phoneNumber
    }

    set firstname(newFirstname) {
        return newFirstname
    }

    set lastname(newLastname) {
        return newLastname
    }

    set email(newEmail) {
        return newEmail
    }

    set phoneNumber(newPhoneNumber) {
        return newPhoneNumber
    }

}

export default Contact