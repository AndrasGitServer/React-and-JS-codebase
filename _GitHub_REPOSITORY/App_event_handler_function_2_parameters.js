/*

The App component is essentially the top most component in a React-based application, 
from whom all other components are children of.

*/


import React, { Component } from 'react';
import './App.css';


// Just copied the class from another file (cheat sheet example)
// To use the Component in this App


class MyNewComponent extends Component{
	
	render(){

		// You can pass objects to your Components but you can not render them as objects
		// Render them as STRINGS & NUMBERS

		const { animal1, animal2 , animal3 } = this.props.an_object;

		console.log( animal1 , animal2 , animal3 );

		console.log( this.props.my_array );

		console.log( this.props.my_array2 );

		
		// The logic in the component is written mostly before the return() !
	
		return(

            <div>
                <h1> { this.props.header } </h1>

				<hr/>

                { this.props.children }
				
				<hr/>

				{ JSON.stringify(this.props.an_object) }

				<hr/>
				
				{ this.props.an_object.animal1 }
				
				<hr/>

				<h2>The keys of the passed child object are: { animal1 } , { animal2 } , {animal3} ! </h2>

				<hr/>

				{
					this.props.my_array.map( (element, index) => 
						<ul key={ index }>
							<li> { element }</li>
						</ul>

					) 
               }

			   <hr/>

			   {
					this.props.my_array2.map( (element, index) => 
						<ul key={ index }>
							<li> { element.animal1 }</li>
							<li> { element.animal2 }</li>
							<li> { element.animal3 }</li>
						</ul>

					) 
               }

			   <hr/>

			   { this.props.my_array2[0].animal1 } <br/>
			   { this.props.my_array2[0].animal2 } <br/>
			   { this.props.my_array2[0].animal3 } <br/>

            </div>

        );
    }
}



function App() {

	const my_obj    = { animal1: 'Roadrunner' , animal2: 'Parrot' , animal3: 'Lovebird'};
	const my_array  = [ my_obj.animal1 , my_obj.animal2 , my_obj.animal3 ];
	const my_array2 = [ my_obj ];
	

	const my_function_name = (event, another_parameter) => {

		
		// prevent default behavior in React, similar to HTML return false to avoid opening a new page
		// event.preventDefault() explicit call
		event.preventDefault();						
		
		alert(" Function Name activated ! Event Handler !"); 
		console.log('*** Button clicked *** function name *** Event Handler');
		console.log('*** This function name declaration is in the same Component before return()');
		console.log('*** The (e) or (event) parameter is the synthetic event');
		
		console.log( event );
		
		// You can pass another parameter to the function
		console.log(another_parameter);
		
	}


	const my_2nd_function_name = ( event, parameter2 ) => {
		console.log('You clicked -->' , parameter2);
		console.log(event.type);
		console.log(event.target);
	}


  	return (

    	<div className="App">

		<button onClick={ () => { alert("Anonymous Arrow Function activated !"); console.log('*** Button clicked *** inline code');} }>Click Me</button>

		<button onClick={ (event) => my_function_name( event, "string parameter hardcoded" ) }>Click Me</button>


		<MyNewComponent header={ "Header Prop" } an_object={ my_obj } my_array={ my_array } my_array2={ my_array2 }>
			<ol>
				<li> <p> <button onClick={ (event) => my_2nd_function_name( event, 1 ) }>Click Me</button> This is a child</p> </li>
				<li> <p> <button onClick={ (event) => my_2nd_function_name( event, 2 ) }>Click Me</button> This is another child</p>      </li>
				<li> <p> <button onClick={ (event) => my_2nd_function_name( event, 3 ) }>Click Me</button> This is even another child</p> </li>
			</ol>
		</MyNewComponent>  

	    </div>
  	);

}

export default App;








