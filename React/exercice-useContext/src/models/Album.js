let timerCount = 0

class Album {
    constructor(_name, _artist, _style, _duration, _avis, _img){
        this._id = ++timerCount
        this._name = _name
        this._artist = _artist
        this._style = _style
        this._duration = _duration
        this._avis = _avis
        this._img = _img
    }

    get name(){
        return this._name
    }

    get artist(){
        return this._artist
    }

    get artist(){
        return this._artist
    }

    get style(){
        return this._style
    }

    get duration(){
        return this._duration
    }

    get avis(){
        return this._avis
    }

    get img(){
        return this._img
    }
}

export default Album