class Person {
    constructor(_firstname, _lastname, _dateOfBirth, _email, _phoneNumber, _avatarUrl) {
        this._firstname = _firstname;
        this._lastname = _lastname;
        this._dateOfBirth = _dateOfBirth;
        this._email = _email;
        this._phoneNumber = _phoneNumber;
        this._avatarUrl = _avatarUrl;
        this._id = ++Person._count;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get firstname() {
        return this._firstname;
    }
    set firstname(value) {
        this._firstname = value;
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(value) {
        this._lastname = value;
    }
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    get avatarUrl() {
        return this._avatarUrl;
    }
    set avatarUrl(value) {
        this._avatarUrl = value;
    }
}
Person._count = 0;
export default Person;
