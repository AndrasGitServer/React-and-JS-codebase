import React , { useState } from 'react';
import './App.css';


// ********************************************* 2020 May 7 Thursday *

function App() {

	return (
    	<div className="App">

			<PersonCard firstName="John" lastName="Smith" age={ 20 } /> 
			<br/>
			<PersonCard firstName="JavaScript" lastName="React" age={ 6 } /> 

		</div>
	);
	  
}// App() ************************************************************


/*
	1) import useState()

	2) Destructure useState() in our functional component PersonCard() but outside of return()
	   and Initialize the state object
	   
*/


const PersonCard = props => {


	const [ program_state , set_program_state ] = useState(

		{
			qty: 0									// Initialize the STATE as an object
		}

	); // Destructure useState()


	const clickHandler_function = props => {

		console.log( program_state );				// in our program it is an object, it was initialized as an object !

		set_program_state(							// Set STATE, in other words change the STATE
													// set_program_state AND program_state
			{										// *** Use the 2 (YES BOTH) ***
				qty: program_state.qty + 1			
			}

		);

	} // clickHandler_function


    return(
        <div>
			<fieldset>

				<h1> { props.firstName } { props.lastName } </h1>

				<p>Age: { props.age }</p>

				<p> Quantity: 
					<span> { program_state.qty } </span> 
					<button onClick={ clickHandler_function }>Click this button !</button> 
				</p>
		
			</fieldset>
		</div>
	);
	
}// PersonCard() *****************************************************


export default App;
