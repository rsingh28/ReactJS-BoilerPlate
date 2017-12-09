import React from "react";

// Header of the document 

// export class Header extends React.Component{

// 	render() {
// 		return(
// 			<nav>
// 				<ul>
// 					<li>
// 						<a href="#">Home</a>
// 					</li>
// 				</ul>
// 			</nav>
// 		);
// 	}
// }

// Converting the above component into a "Stateless Component" since there are no changes of states happening in this component
// Sateless Components make loading more faster (Refer - https://www.youtube.com/watch?v=SEkfzqIgvTo)

export const Header = (props) => {

	return(
			<nav>
			<ul>
				<li>
				<a href="#">Home</a>
				</li>
			</ul>
			</nav>
		);
};
