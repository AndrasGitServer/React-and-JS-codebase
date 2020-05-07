import React , { useState } from 'react';
import './App.css';


function App() {

	return (
    	<div className="App">

			<UserForm />

		</div>
	);
	  
}// App() ************************************************************


/*
	1) import useState()

	2) Destructure useState() in our functional component UserForm() but outside of return()
	   and Initialize as a state string with value empty.
	   
*/


/*
Form

Track input values as a piece of your state, 
updating them on change events and rendering them back out to the UI. 
These are called controlled components.
Favor the controlled component strategy 
because it allows React to continue to sit between us and the actual DOM.

We're using two new Synthetic Events:
onChange (calling an anonymous function to set state for each string)
         (Note: the new string is just an argument in the set state method)
  and 
onSubmit (createUser function).

Notice how after submitting this form, 
the current values in the form inputs just stick around. 
Because we haven't let the page reload (we prevented default)

When we add in validations to our form later, 
if the form happens to have not valid data then
the information the user typed in will still be there for them to fix.

two-way data binding
Whatever value is currently in state variables will match what is in the form
adding the following statements in each of the input tags:
value={ username }
value={ email }
value={ password }
*********************************************************************/

const UserForm = (props) => {


	let [username, setUsername] = useState("");
    let [email, setEmail]       = useState("");
    let [password, setPassword] = useState("");  
	
	
    const createUser = ( event_onSubmit ) => {
		
		event_onSubmit.preventDefault();
		
		// Property Value Shorthand ES6 notation.
		// const newUser = { username: username, email: email, password: password };
		const newUser = { username, email, password };
		
		console.log("Welcome", newUser);
		
		
		// Set input fields back to an appropiate starting value after submit.
		setUsername("");
		setEmail("");
		setPassword("");
    };
	
	
    return(

		<fieldset>

			<form onSubmit={ createUser }>
				
				<div>
					<label>Username: </label> 
					<input type="text" onChange={ (e) => setUsername(e.target.value) }  value={ username } />
				</div>

				<div>
					<label>Email Address: </label> 
					<input type="text" onChange={ (e) => setEmail(e.target.value) }   value={ email }/>
				</div>

				<div>
					<label>Password: </label>
					<input type="text" onChange={ (e) => setPassword(e.target.value) }  value={ password }/>
				</div>

				<input id="submit" type="submit" value="Create User" /> 
			
			</form>

		</fieldset>

    );

}


export default App;
