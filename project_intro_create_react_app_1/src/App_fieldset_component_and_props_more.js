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
			<>
				<fieldset>

					<legend> 
						<h2> { this.props.lastName }, { this.props.firstName } </h2> 
					</legend>
					
					<ul>
						<li> <h3> { this.props.age }       </h3> </li>
						<li> <h3> { this.props.hairColor } </h3> </li>
					</ul>

					
				</fieldset>

				<h3> { this.props.ae.Date } </h3>
				<h3> { this.props.ae.Codebase } </h3>
				<h3> { this.props.ae.File_names } </h3>
				<h3> { this.props.ae.Description } </h3>

				<hr />

				{ this.props.ae.Description.map((key,i)=> <h3>Desctiption[{i}] = {key}</h3>) } 

				{ this.props.children}

			</>
		); //** return() */

	} //** render() method */

} //** class PersonCard */



function App() 
{

	const ae = {

		"Date"      : "2020 March 4",
	
		"Codebase"  : "2 files",
	
		"File_names": [ "App.js " , "App.css" ],
	
		"Description" : [
			
			"Description is an array with multilines, ",
			"In only 1 .js file, there is 1 class-based child component, ", 
			"receiving string props.",
			"This project has added more code to the original: prop_itup_cra_no_nodemodules.zip",
			"One child is added in the child component !"
		]
		
	};
	
	return(
		<div>

			<h1 className="jumbo"> Prop It Up !</h1>

			<h1> { ae.Date } </h1>
			<h1> { ae.Codebase } </h1>
			<h1> { ae.File_names } </h1>
			<h1> { ae.Description } </h1>

			<hr />

			{ ae.Description.map((key,i)=> <h1>Desctiption[{i}] = {key}</h1>) } 

			<br/>
			<br/>

			<PersonCard firstName="Jane" 
						lastName="Doe" 
						age="45" 
						hairColor="Black"
						ae = { ae }	>

						{/* // All the children components have to receive this same props
						// otherwise the build breaks !  */}

						<h1> This tag is a child of PersonCard and a grandchild of App() </h1>
						
			</PersonCard>
			
			<br/>
			
			<PersonCard firstName="John" 
						lastName="Smith"
						age="88"   
						hairColor="Brown"
						ae = { ae }
			/>

			<br/>

			<PersonCard firstName="Millard" 
						lastName="Fillmore"
						age="50"   
						hairColor="Brown"
						ae = { ae }
			/>

			<br/>

			<PersonCard firstName="Maria" 
						lastName="Smith"
						age="62"   
						hairColor="Brown"
						ae = { ae }
			/>

			

		</div>
  	);
}

export default App;
