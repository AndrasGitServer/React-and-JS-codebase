/*

The App component is essentially the top most component in a React-based application, 
from whom all other components are children of.

*/

import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';


function App() {
    
  let h1_text = "Hello Dojo!";
  let h2_text = "Things I need to do:";


  return (

    <div className="App">

      
      	{ console.log( h1_text ) }
       
      	{/*	We can not do normal variable declarations here in return()	*/}
      
		<h1> 
			The App component is essentially the top most component in a React-based application,
	    	from whom all other components are children of.
		</h1>

		<hr/>

		<h1> { h1_text } </h1>

		<h2> { h2_text } </h2>

		<ol>
			<li>Learn React</li>
			<li>Climb Mt. Everest</li>
			<li>Run a marathon</li>
			<li>Feed the dogs</li>
		</ol>

		<MyNewComponent 
			my_text={ "CLASS-BASED COMPONENT" } 
			my_age={ 23 } 
			my_hobbies={ [ "cooking" , "walking" , "coffee" ] }
		/>
	
		<MyNewComponent 
			my_text={ "We can reuse a COMPONENT and make it more dynamic" } 
			my_age={ 19 } 
			my_hobbies={ [ "guitar" , "biking" , "beach" , "characterized by constant change"] }
		/>

    </div>
  );
}

export default App;








