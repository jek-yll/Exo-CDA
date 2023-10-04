const Form = (props) => {
    
    
    return(
        <form onSubmit={(e) => e.preventDefault()}>
            {props.children}
        </form>
    )
}
export default Form