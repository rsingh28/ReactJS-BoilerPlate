import React from "react";

// Since we want to get this component in the index.js file, we use the export keyword
// This is just a trivial component that creates a new paragraph element inside a div tag
export class Home extends React.Component {

	render(){
		return(

			<div>

				{/* For Dynamic Calculations use curly braces */}
				<p>Result of a dynamic addition 2+2 = {2+2} (Quick Math)</p>
				<div>

					{/* The received properties can be used as shown below - */}
				    {/* We don't have to specify the props as arguments. React.Component takes care of it and we can just use it right away as - this.props.<prop_name> - */}
					<p> Name = {this.props.name} </p>
					<p> Age = {this.props.age} </p>
					<p> Hobbies = </p>

				    {/* Since the hobby poperty is an array, we can create an un-oreder list and loop through the array, displaying it as elements of the list- */}
				    {/* This is how looping is done in React */}
					<ul>
						{this.props.hobby.map( (x) => <li> {x} </li> )}
					</ul> 
				</div>

			</div>

		);
	}

}
