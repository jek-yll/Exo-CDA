export default class Person {
    private static _count: number = 0;
    private _id: number; 

    constructor(
        private _firstname: string,
        private _lastname: string,
        private _dateOfBirth: string, 
        private _email: string,
        private _phoneNumber: string, 
        private _avatarUrl: string 
        ){
            this._id = ++Person._count
        }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get firstname(): string {
        return this._firstname;
    }
    public set firstname(value: string) {
        this._firstname = value;
    }

    public get lastname(): string {
        return this._lastname;
    }
    public set lastname(value: string) {
        this._lastname = value;
    }

    public get dateOfBirth(): string {
        return this._dateOfBirth;
    }
    public set dateOfBirth(value: string) {
        this._dateOfBirth = value;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get phoneNumber(): string {
        return this._phoneNumber;
    }
    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    public get avatarUrl(): string {
        return this._avatarUrl;
    }
    public set avatarUrl(value: string) {
        this._avatarUrl = value;
    }


}
