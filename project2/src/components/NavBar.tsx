import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav className="bg-blue-300 h-1/6">
			<Link to="">Home</Link>
			<Link to="/products">Products</Link>
			<Link to="/about">About</Link>
		</nav>
	);
}

export default NavBar;
