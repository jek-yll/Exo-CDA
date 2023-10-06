let taskCount = 0

class Task {
    constructor(_name, _deadline, _done = false){
        this._id = ++ taskCount
        this._name = _name
        this._deadline = _deadline
        this._done = _done
    }

    get id(){
        return this._id
    }

    get name(){
        return this._name
    }

    get deadline(){
        return this._deadline
    }

    get done(){
        return this._done
    }
}

export default Task