import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Checkout from "./components/Checkout";

function App() {
	return (
		<div className="h-screen">
			<NavBar />
			<div id="pages" className=" h-5/6 bg-yellow-100">
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/about" element={<About />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
