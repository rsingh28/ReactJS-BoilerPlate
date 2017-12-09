// Excellent Source for learning ReactJS - https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS
// To see why ReactJS is better than plain JS, check Video 9 in the playlist - https://www.youtube.com/watch?v=Iw2BLUjQo1E

// Jist of Video #9 - As decribed in the 9th tutorial, one of the advantages of ReactJS is that it updates (re-renders) only 
// what is changed instead of re-rendering the whole documnet. It does this by comparing the DOM to the original state and the 
// state after changes are made. Then it re-renders only that particular change of state making loading of pages much faster.

import React from 'react';
import { render } from 'react-dom';
import { Header } from "../components/Header"; // Including the component to the file. No need to specify .js with the file name(That'll result in an error)
import { Home } from "../components/Home";     // Including the component to the file
 
// App is a component here. This is the general way of making a component 
class App extends React.Component {

	render(){

			var hobbies = {
				user1: ["basketball", "salsa"],
				user2: ["salsa", "bachata"]
			};

		return(

			<div>
				<div>
					<Header homeLink="Home"/>  {/* This is how we include the exported component */}
				</div>
				<h1>Hello World!</h1>
				<div>
					<h3>User1</h3>
					<Home setName={"ABC"} initialAge={20} hobby={hobbies.user1}/>    {/* This is how we include the exported component and pass props (properties to it)*/}
				</div>
			</div>

		);
	}

}

// render(component, location to place) is the general form of render() method
render(<App/>, window.document.getElementById("test")); // Telling react where to return the component in the HTML code

console.log("It works!");