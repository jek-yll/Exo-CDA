const AlertComponent = (props) => {
    const textAlert = props.textAlert
    const colorAlert = props.colorAlert
    const iconAlert = props.iconAlert

    return(
        <div className={"alert alert-" + colorAlert} role="alert">
            <i className={"bi bi-" + iconAlert}></i>
            {textAlert}
        </div>
    )
};

export default AlertComponent;