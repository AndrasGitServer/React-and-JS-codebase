import React, { useState } from 'react';
import './App.css';



function App() {

	return (
    	<div className="App">
      
			<RegisterForm />

    </div>
  );

} //******************************************************************



const RegisterForm = props => {

    const [ formState, setFormState ] = useState(
    	{
        	firstName: "",
          	lastName: "",
          	email: "",
          	password: "",
          	confirmPassword: ""
	  	}   
	);			

	// The above keys correspond to every single field in the form !


    const onChangeHandler = event => {
		event.preventDefault();
		
		setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }


    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
    }


    return(
        <div>

			<br />
			
            <form onSubmit={onSubmitHandler}>

                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>

			    <br/>        
                
				<label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
					
				<br/>        

                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>

                <br/>        
    
	            <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>

                <br/>        

                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
					
				<br/>   

                <input type="submit" />     

            </form>

			{formState.firstName}		<br />
			{formState.lastName} 		<br />
			{formState.email} 			<br />
			{formState.password} 		<br />
			{formState.confirmPassword}	<br />

        </div>
    );
}//*******************************************************************



export default App;
