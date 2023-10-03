import { PureComponent } from "react";

class WelcomeComponentClass extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "loïc",
            lastname: "gastrin"
        }
        this.changeFirstname = this.changeFirstname.bind(this)
        this.changeLastname = this.changeLastname.bind(this)
    }

    changeFirstname (event) {
        this.setState(prevState => ({...prevState, firstname: event.target.value}))
    }
    changeLastname (event) {
        this.setState(prevState => ({...prevState, lastname: event.target.value}))
    }


    render() {
        return(
            <>
                <div>
                <label for="firstname" class="form-label">Prénom :</label>
                <input type="text" className="form-control" for="firstname" onInput={this.changeFirstname}/>
                </div>
                <div>
                    <label for="lastname" class="form-label">Nom :</label>
                    <input type="text" className="form-control" for="lastname" onInput={this.changeLastname}/>
                </div>
                <p className="text-center my-2">
                    Bonjour <b><span className="text-capitalize">{this.state.firstname} {this.state.lastname.toUpperCase()}</span></b>, bienvenue sur l'application !
                </p>
            </>
        )   
    }
}

export default WelcomeComponentClass