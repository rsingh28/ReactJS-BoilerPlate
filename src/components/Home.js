import React from "react";

// Since we want to get this component in the index.js file, we use the export keyword
// This is just a trivial component that creates a new paragraph element inside a div tag
export class Home extends React.Component {

	render(){
		return(
			<div>
				<p>This is a new Component exported from a different JS file</p>
				
				{/* For Dynamic Calculations use curly braces */}
				<p>Result of a dynamic addition 2+2 = {2+2} (Quick Math)</p>
			</div>
		);
	}

}
