/*
Components in React are able to hold onto their own information is inside of a variable
we will be calling state. 

A light switch has some sort of mechanism we can flip from "On" to "Off". 
Whether the switch is in the "On" position or the "Off" position 
is something we could call the "state" of the light switch.

In the Render() method, we can display the current state 
of the light switch inside of the familiar { } tags. 

*/

import React, { Component } from 'react';
import './App.css';


// Just copied the class from another file (cheat sheet example)
// To use the Component in this App


/* Notice how we now need to write a constructor for our Component, 
   this will let us create an attribute for our LightSwitch Component, 
   one that we will call STATE. 

   To change it we have to use a method called setState()
*/

class LightSwitch extends Component {
	
	constructor(props) {
	
		super(props);
	
		this.state = {
			position: "On",
			qty: 0
		};
		
		
	}
		
	
    render() {
		

		// In a Component we can write our function above the return()
		
		const flipSwitch_function = (event) => {

		    if( this.state.position === "On" ) {
		
				this.setState({ position: "Off" });		// Only assign new values (numbers & strings)
				qty_outside++;
				console.log(qty_outside);
				this.setState({ qty: qty_outside});		// Only assign new values (numbers & strings)
		    
			} else {
		    
				this.setState({ position: "On" });		// Only assign new values (numbers & strings)
				qty_outside++;
				console.log(qty_outside);
				this.setState({ qty: qty_outside});		// Only assign new values (numbers & strings)
		    }

		}
	

		return (
	
			<fieldset>
                
				<h2>The light is currently: { this.state.position }</h2>

				<h1>Quantity flipped = {this.state.qty }</h1>
				
				<button onClick={ (event) => flipSwitch_function(event) }> Flip Switch </button>
                
				<button onClick={ flipSwitch_function }>Flip Switch</button>

            </fieldset>

        );
    }
}


/*
The App component is essentially the top most component in a React-based application, 
from whom all other components are children of.
*/


let qty_outside = 0;


function App() {
	

  	return (

    	<div className="App">

			<LightSwitch />
			<LightSwitch />

	    </div>
  	);

}

export default App;
