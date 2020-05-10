/*
	Lifting State

	Provide a prop to the <MessageForm /> from the parent of both it and <MessageDisplay />. 
	If this prop is a function, then we can have the child component call the function. 
	And if the function accepts a parameter, then the child can pass a parameter into this function.

*/


import React, { useState } from 'react';
import './App.css';



function App() {

	const [ currentMsg , setCurrentMsg ] = useState( "Initial state string ! There are no messages" );

    let global_data = "The initial program run passes this props.global_data to the return() method."
                    + " If global_data changes it does not render the change. Notice there is no page reload !";     

	const youveGotMail_fun = ( newMessage ) => {

        global_data = newMessage;
        
        console.log( global_data , typeof(global_data))	;
        
        setCurrentMsg( newMessage );
    }
    

	return (

		<div className="App">
    
    		<MessageForm  onNewMessage={ youveGotMail_fun }                    />

			<MessageDisplay    message={ currentMsg }  my_data={ global_data } />
		 
		</div>

  );
}//*******************************************************************


 
const MessageForm = (props) => {

  const [ msg , setMsg ] = useState("");
  

  const handleSubmit = (e) => {
      e.preventDefault();
      props.onNewMessage( msg )
  };
  

  return (

      <form onSubmit={ handleSubmit }>

          <h1>Set Message</h1>
      
          <textarea 
              rows="4"
              cols="50"
              placeholder="Enter your message here"
              onChange={ (e) => setMsg( e.target.value ) }
              value={ msg }
          ></textarea>

          <input type="submit" value="Send Message" />

      </form>

  );
}//*******************************************************************



   
const MessageDisplay = (props) => {
	
	return (
        
		<>
            <h1> Current Message </h1>

            <pre> { props.message } </pre>

			<h2> { props.my_data } </h2>
        </>

    );
}//*******************************************************************


export default App;
