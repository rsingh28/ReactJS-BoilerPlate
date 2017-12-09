import React from "react";

// Since we want to get this component in the index.js file, we use the export keyword
export class Home extends React.Component {

	constructor(props){

		// Call to the super constructor since the class extends React.Component
		super();

		// We get the props as arguments to the constructor. Inside this constructor, we can save the
		// current "State" of the props (as we get from index.js). Whenever we want to change any of these
		// props dynamically in the page, we have to change the "State" of the prop. Not changing the "State"
		// would not update the UI
		this.state = {
			age: props.initialAge,
			name: props.name
		};
	}

	// This function will be called when the button is clicked, in order to increase the age by 1
	ageIncrease(){

		// this.setState() is an internal ReactJS method that helps to change the current "state" of the 
		// props so the changes can be reflected in the UI
		this.setState({
			age: this.state.age + 1
		});
	}

	dumbNameFormatting(){

		this.setState({
			name: "*" + this.state.name + "*"
		});
	}

	render(){
		return(

			<div>

				{/* For Dynamic Calculations use curly braces */}
				<p>Result of a dynamic addition 2+2 = {2+2} (Quick Math)</p>
				<div>

					{/* The received properties can be used as shown below - */}
				    {/* We don't have to specify the props as arguments. React.Component takes care of it and we can just use it right away as - this.props.<prop_name> - */}

				    {/* This is the name passed as property */}
					<p> Name = {this.props.name} </p>  

					{/* This is that represents any change of "State" in the document */}
					<p> Formatted Name = {this.state.name} </p>  {/* For instance, their will be a change of state when the second button is pressed */}

					<p> Age = {this.state.age} </p>
					
					<p> Hobbies = </p>

				    {/* Since the hobby poperty is an array, we can create an un-oreder list and loop through the array, displaying it as elements of the list- */}
				    {/* This is how looping is done in React */}
					<ul>
						{this.props.hobby.map( (x) => <li> {x} </li> )}
					</ul> 

					<button onClick={() => this.ageIncrease()}>Increse age dynamically</button>
					<button onClick={() => this.dumbNameFormatting()}>Add stars to your name LOL</button>

				</div>

			</div>

		);
	}

}
