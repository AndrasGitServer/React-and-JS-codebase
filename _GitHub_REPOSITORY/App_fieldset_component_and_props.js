import React, { Component } from 'react';
import './App.css';


class PersonCard extends Component
{
	constructor(props)
	{
		super(props);

	}


	click_here = e =>
	{
		console.log(e.target);
		console.log(e);
		
	}



	render()
	{
		return (

			<fieldset>

				<legend> <h2> { this.props.lastName }, { this.props.firstName } </h2> </legend>
				
				<ul>
					<li> <h3> { this.props.age }       </h3> </li>
					<li> <h3> { this.props.hairColor } </h3> </li>
				</ul>

			</fieldset>

		); //** return() */

	} //** render() method */

} //** class PersonCard */



function App() 
{
	return(
		<div>

			<h1 className="jumbo"> Prop It Up !</h1>
						
			<br/>
			<br/>

			<PersonCard firstName="Jane" 
						lastName="Doe" 
						age="45" 
						hairColor="Black"
			/>
			
			<br/>
			
			<PersonCard firstName="John" 
						lastName="Smith"
						age="88"   
						hairColor="Brown"
			/>

			<br/>

			<PersonCard firstName="Millard" 
						lastName="Fillmore"
						age="50"   
						hairColor="Brown"
			/>

			<br/>

			<PersonCard firstName="Maria" 
						lastName="Smith"
						age="62"   
						hairColor="Brown"
			/>



		</div>
  	);
}

export default App;
