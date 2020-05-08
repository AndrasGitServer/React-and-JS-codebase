import React from 'react';


const Form = props => {


    const { inputs_state , set_inputs_setState } = props;


    const onChangeHandler_fun = (event) => {

		set_inputs_setState(
        
            {
                ...inputs_state,
                [ event.target.name ]: event.target.value
            }
        
        );

    }


    const onSubmitHandler_fun = event => {
        event.preventDefault();
        console.log(inputs_state);
    }


    return(
			
        <form onSubmit={ onSubmitHandler_fun } >

            <div>
                <label  htmlFor="firstName"> First Name </label>
                <input  type="text"  name="firstName"  onChange={ onChangeHandler_fun } />
            </div>
           
            <div>
                <label  htmlFor="lastName"> Last Name </label>
                <input  type="text"  name="lastName"  onChange={ onChangeHandler_fun } />
            </div>

            <div>
                <label  htmlFor="email">Email</label>
                <input  type="email"  name="email"  onChange={ onChangeHandler_fun } />
            </div>

            <div>
                <label  htmlFor="password">Password</label>
                <input  type="password"  name="password"  onChange={ onChangeHandler_fun } />
            </div>

            <div>
                <label  htmlFor="confirmPassword">Confirm Password</label>
                <input  type="password"  name="confirmPassword"  onChange={ onChangeHandler_fun } />
            </div>

            <input type="submit" />     

        </form>

    );

}//*******************************************************************




export default Form;
