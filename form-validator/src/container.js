import React from 'react';
import FormControl from './formControl'

function Form(){
    return(
        <div className='container'>
            <form id="form" className="form">
                <h2>Register With Us</h2>
                <FormControl for='username'/>
                <FormControl for='email'/>
                <FormControl for='password'/>
                <FormControl for='password2'/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Form;