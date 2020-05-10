import React from 'react';
import './App.css';


function App() {

	return (

    	<div className="App">

			<Groceries />
			
			<MyComponent1  movies={ [ "Last lagh" , "Seinfeld" , "Murphy's war" , "Gandhi" ] } />

			<br/>

			<MyComponent2  movies={ [ "Last lagh" , "Seinfeld" , "Murphy's war" , "Gandhi" ] } />

    	</div>

	);
}//*******************************************************************


    
const Groceries = (props) => {
	
	// Data arrays could just as easily come from props
	
	const groceryList1  = [ "pearl onions", "thyme", "cremini mushrooms", "butter" ];

	const groceryList2 = [
		{ bird: 'Roadrunner', city: 'Phoenix'},
		{ bird: 'Quail'     , city: 'Tucson' },
		{ bird: 'Macaw'     , city: 'Rio'    }
	];
	

	// Create another array with only strings containing data

	let orig_data_string = JSON.stringify( groceryList2 );

	console.log( orig_data_string );
	
	let render_data_string = orig_data_string.replace( '[{"bird":"' , "" );		// step 1 delete first key

	render_data_string = render_data_string.replace( /","/g  , "," );			// step 2

	render_data_string = render_data_string.replace( '"}]'  , "" );				// step 3

	render_data_string = render_data_string.replace( /":"/g  , "," );			// step 4

	render_data_string = render_data_string.replace( /"},{"/g  , "," );			// step 5

	render_data_string = render_data_string.replace( /,bird,/g  , "," );		// step 6 delete each unique key

	render_data_string = render_data_string.replace( /,city,/g  , "," );		// step 7 delete each unique key

	let array_with_strings = render_data_string.split( ',' );					// step 8

	console.log( array_with_strings );

	
	return (

		<div>

			<h3> Array containing strings</h3>

			<ol>
		
				{
					groceryList1.map( (item, i) => 
						<li key={ i }> [ { i } ] { item }</li>
					)
				}
		
			</ol>


			{/* React does not allow to render complete objects, let's we display a key:value      */}
			{/* 2nd - example we can access the key which is the same for all objects in the array */}


			<h3> Array containing objects</h3>

			<ol>
		
				{
					groceryList2.map( (item, i) => 
						<li key={ i }> [ { i } ] { item.bird } -> { item.city } </li>
					)
				}

			</ol>


			{/* Use JSON.stringify( array ) to get an idea for troubleshooting */}
			{/* So we can note that the data is available & how it is structured within the array */}


			<h3> JSON.stringify( array_with_data ) </h3>
			
			<ol>
				{ JSON.stringify( groceryList2 ) }
			</ol>


			{/* Display new created array with only strings containing data */}


			<h3> New created array containing data strings </h3>

			<ol>
		
				{
					array_with_strings.map( (item, i) => 
						<li key={ i }> [ { i } ] { item }</li>
					)
				}
		
			</ol>

			<ol>
				{ array_with_strings[0] } -> { array_with_strings[1] }		( Notice this style ! )
			</ol>


		</div>

	); 
}//*******************************************************************



const MyComponent1 = props => {
	

	const onClickHandler = (e) => {
        alert("You have clicked the button");
    }
 

    return (
		
		props.movies.map( (item, index) => {

        	return <button onClick={ onClickHandler } > { item } </button>
		})

	);
}//*******************************************************************


const MyComponent2 = props => {


    const onClickHandler = ( e , value ) => {
        alert(value);
    }

	
    return props.movies.map( (item, index) => {

        return <button onClick={ (e) => onClickHandler(e, item) } > { item } </button>

    });


}//*******************************************************************


export default App;
