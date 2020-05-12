/*
	UseEffect is another hook that we can use in functional components.
	We use useEffect in order to manage "side Effects" in our React project.

	This method will execute directly after the component is rendered, 
	and every time the component updates.

	A common way useEffect is used is when making a call to an API (API call).

	Fetch is simply a way to make a request in Javascript. 
	
	When we make a request to the Star Wars API, we will get a response,
	and part of that response is a list of the people in the Star Wars API. 
	
	We will then use setPeople in order to keep track of the list of people.

	Second Argument
	***************
	useEffect() takes an optional second argument: an array that contains different variables. 
	This second argument is very powerful, 
	because we can be more specific and tell useEffect exactly when we want it to run. 
	
	useEffect will always run on first render (when a component first loads).
	*************************************************************************

	It will also run when a variable in the second argument array changes. 
	If we have an empty array in the second argument, it will never change. 
	Therefore, it will only run on first render.

		
			Then we get a response but the response we get is not JSON 
			but an object with a series of methods we can use 
			depending on what we want to do with the information.

			GET request is the default for fetch()

*/


import React , { useState , useEffect } from 'react';
import './App.css';


function App() {
	
	const [ boolean_state , setBoolean ] = useState(false);

	const my_fun = () => {
		console.log('1st. clicked is' , boolean_state );
		setBoolean(true);
	}

	return (

		<div className="App">
		
			<button onClick={ my_fun }>Click button to use the Component with: useEffect() & fetch()</button>
				
			{
				boolean_state
				? <Example1 />
				: <div>
					<h2> The Component Example1 is not rendered yet ! because the boolean_state is: { boolean_state.toString() } </h2>
					<h3>   { boolean_state.toString() } </h3>
					<span> { boolean_state.toString() } </span>
				</div>
				
			}

			

		</div>

	);
}



const Example1 = (props) => {

	const [ state , setState ] = useState(0);

  	useEffect( () => {

		console.log('** In useEffect() only once because of 2nd argument in useEffect() **');

		
		fetch('https://swapi.dev/api/people/')		// call to the Star Wars API

			.then( response => response.json() )	
			// or is the same as:	.then( response => { return response.json() } )
			// there will be a result property after the .json() call
						
			.then( response => { 
				console.log( response.results );
				setState( { people: response.results } );
			 } );
			
	}, [] );


  	return (

    	<div>
			<h2>

				{
					state.people ? 
						state.people.map( (item,index) => {
							return <div key={ index }> { item.name } </div>
						})
					: null 
				}

				<hr/>
				
				{ JSON.stringify( state.people ) }
				
						
			</h2>
		</div>

  	);
}


export default App;

	

