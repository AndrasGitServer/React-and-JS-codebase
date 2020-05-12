/*
Cleaning Up On Unmounting

You might have a situation in which you've initiated something inside a useEffect call 
that is ongoing, such as a setInterval call or a socket connection. 

When the component is unmounted, as when the user changes to a different route, 
it is important to clean up so that your application doesn't develop a memory leak. 
To clean up, you can optionally return a function from your useEffect callback. 

For example, consider the following code (Time Display)

Let's go through what's happening in the body of our useEffect callback. 

We create an int variable and assign it to the result of invoking the setInterval function. 
We pass setInterval two arguments:
(1) an anonymous function which updates the time with the current time, and 
(2) the interval, which is 1000 milliseconds, or 1 second. 

We then return a function called clearInt 
(could also be an anonymous or even an arrow function) which clears the interval. 
If we didn't do this, 
our application would continue to run the setInterval callback at 1 second intervals 
until the user either did a hard refresh or left the app entirely.

useState()

useEffect()

setInterval()

return function clearInt() {
	clearInterval(int);
}

*/


import React, { useEffect, useState } from 'react';
import './App.css';


function App() {


	const [ time, setTime ] = useState( new Date().toLocaleString() );
   

	useEffect( () => {
	

		const int = setInterval(
        	() => setTime( new Date().toLocaleString() ),
			1000
		);
   

		return function clearInt() {
			clearInterval(int);
		}


	}, []);
  

  return (
    
	<div className="App">
 
        <h1>Current Time: {time} </h1>

    </div>

  );
}

export default App;

