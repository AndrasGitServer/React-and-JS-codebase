    	2020 May 12 Tuesday

	Reach Router (front-end routing for our project)

	Use Router to change the DOM.

	Install & add it to the project's dependencies list
	***************************************************
	$ npm i @reach/router

	Import
	******
	import { Router , Link , navigate } from '@reach/router';

	Router tag set up
	*****************
	1) App.js file acts as an entry point into our React project.
	2) Wrap the part of our website that relies on routing within the <Router> tag. 
	   It creates a container that all of our routes will live in.
	3) path is a prop & a route we want to go to to display that component.
	   path is not a file system path, it is programmer-defined. 
	4) You can not insert here its own Component, can NOT App in APP ! 
	   (the parent component can NOT be in the child component)

	These tell React that when we go to the path /login, 
	we want to update the DOM so that it shows the LoginComponent within the <Router> component wrapper.
	It looks like it is re-routing the page to a new url. 
	In reality, it is just changing what we see on the webpage, 
	without a true refresh of the page. 
	AJAX requests may be firing in the background, 
	but the DOM is changing based on front end Javascript.

	Link tag
	********
	Now that we have a router set up, we want to be able to link to other pages. 
	Traditionally, this is done with an html <a> tag and an href attribute.
	However, a <Link> component will not refresh the page. 
	
	It will simply change the url and change the DOM !

	navigate() is a method to programmatically redirect to a route
	**************************************************************
	We want the program code to go to a route and not the user to enter the route in the URL.
	The 1st time the program loads it renders (goes to) "/" and displays App.
	We can add a button to navigate to another component in the Router tag
	with navigate().

	If we wanted to redirect a user to another page in our React project,
	This can be done with navigate ( import { navigate } from '@reach/router' ).
	Run a method such as navigate('/success'), 
	and this will programmatically redirect the user to that front end route.



















