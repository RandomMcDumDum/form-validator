function FormControl(props){
    return(
        <div className="form-control">
            <label htmlFor={props.for}>{props.for==='password2' ? 'Confirm Password' : props.for.charAt(0).toUpperCase() + props.for.slice(1)}</label>
            <input type={props.for.includes('password') ? "password" : 'text'} id={props.for} placeholder={props.for==='password2' ? 'Enter password again' : 'Enter ' + props.for}/>
            <small>Error Message</small>
        </div>
    )
}
export default FormControl;