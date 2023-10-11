let todokCount = 0

class Todo {
    constructor(_title, _description="",  _deadline="", _isDone = false){
        this._title = _title
        this._description = _description
        this._isDone = _isDone
        this._deadline = _deadline
    }

    get id(){
        return this.id
    }

    get title(){
        return this._title
    }

    get deadline(){
        return this._deadline
    }

    get isDone(){
        return this._isDone
    }

    get description(){
        return this._description
    }
}

export default Todo