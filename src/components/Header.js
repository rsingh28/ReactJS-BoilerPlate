import React from "react";

// Since we want to get this component in the index.js file, we use the export keyword
// This is just a trivial component that creates a nav bar and adds a link to it
export class Header extends React.Component{

	render() {
		return(
			<nav>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
				</ul>
			</nav>
		);
	}
}