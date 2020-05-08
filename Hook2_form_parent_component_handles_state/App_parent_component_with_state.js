import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Result from "./components/Result";



function App() {


	const [ state , setState ] = useState(
	
		{
        	firstName:       "",
          	lastName:        "",
          	email:           "",
          	password:        "",
          	confirmPassword: ""
	  	}   

	);


	return (

    	<div className="App">
      
			<Form    inputs_state={ state }  set_inputs_setState={ setState } />

			<Result  inputs_state={ state } />

    	</div>

  	);

} //******************************************************************




export default App;
