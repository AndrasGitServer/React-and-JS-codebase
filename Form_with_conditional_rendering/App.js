/*	2020 May 8 Friday

Conditional Rendering (Ternary Operator)
---------------------

Let's say we want to render something in the DOM that is based on some other value. 
Using the example from the form, we want to have output after the form was submitted.
At the top, let's say we want to have an <h3> that will say "Welcome. please submit the form." 
if the form has not been submitted. 
After we click submit, we want to change the text to say "Thank you for submitting the form!". 
We can add some logic in our component to take care of this. 
We will need to add a submit button and a function that will run onSubmit (we'll call it createUser).
By default, hasBeenSubmitted is false. 
When the form is submitted this value in state will be flipped to true 
which will cause the form to re-render and the formMessage function can be run again 
which will produce a message thanking the user for submitting the form.

Using Ternary Operators
Ternary operators offer a better way to conditionally render an element. 
The biggest advantage to us using a ternary operator here, 
is that we can replace the formMessage function we wrote with some code that can go directly into our JSX.

*/


import React , { useState } from 'react';
import './App.css';


function App() {

  return (

	<div className="App">

		<UserForm  />
		<br/>
		<br/>
		<br/>
		<MovieForm />
		<br/>
		<br/>

    </div>

  );
}//*******************************************************************



const UserForm = (props) => {


	const [username, setUsername]                 = useState("");
  	const [email, setEmail]                       = useState("");
  	const [password, setPassword]                 = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  

  	const createUser = (e) => {
    	e.preventDefault();
      	const newUser = { username, email, password };
      	console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
  	};
  

    const formMessage = () => {
    	if( hasBeenSubmitted ) {
    		return "Thank you for submitting the form!";
		} else {
    		return "Welcome, please submit the form";
		}
    };

    
    return (
        <form onSubmit={ createUser }>

            <h3>{ formMessage() }</h3>

			{
    		    hasBeenSubmitted ? 
	       		<h2>Thank you for submitting the form!</h2> :
        		<h2>Welcome, please submit the form.</h2> 
    		}
	    	
			<div>
                <label> Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
            
			<div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            
			<div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            
			<input id="submit" type="submit" value="Create User" />

        </form>
    );
}//*******************************************************************



const MovieForm = (props) => {


    const [ title , setTitle ]           = useState("");
    const [ titleError , setTitleError ] = useState("");
	
	
    const handleTitle = (e) => {
	
		setTitle( e.target.value );

		console.log( title , title.length );		// After seTitle() setting state there can be some delay
	
		if(e.target.value.length < 1) {				// Use the event value to avoid discrepancy in the delay
            setTitleError("Title is required!");
        } else if(e.target.value.length < 3) {
            setTitleError("Title must be 3 characters or longer!");
        } else if(e.target.value.length >= 3) {
            setTitleError("Yes Champion !");
        }
	
	}
    
    
    
    return (

        <form onSubmit={ (e) => e.preventDefault() }>
        
		    <div>
                <label>Title: </label>
                <input type="text" onChange={ handleTitle } />

                {
                    titleError ?
                    <h4 style={{color:'red'}}> { titleError } </h4> :
                    ''
                }

				<br/>
            </div>

			<br/>

            <input type="submit" value="Create Movie" />

        </form>

	);
	
}//*******************************************************************


export default App;

