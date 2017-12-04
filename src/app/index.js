
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
					<Header/>  {/* This is how we include the exported component */}
				</div>
				<h1>Hello World!</h1>
				<div>
					<h3>User1</h3>
					<Home name={"ABC"} age={"20"} hobby={hobbies.user1}/>    {/* This is how we include the exported component and pass props (properties to it)*/}
					<h3>User2</h3>
					<Home name={"XYZ"} age={"22"} hobby={hobbies.user2}/>    {/* This is how we include the exported component and pass props (properties to it)*/}
				</div>
			</div>

		);
	}

}

// render(component, location to place) is the general form of render() method
render(<App/>, window.document.getElementById("test")); // Telling react where to return the component in the HTML code

console.log("It works!");