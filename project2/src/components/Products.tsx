import { useNavigate } from "react-router-dom";

function Products() {
	const navigate = useNavigate();

	const buy = () => {
		navigate("/checkout");
	};
	return (
		<div>
			<div className=" h-20 w-20">
				<p>Product 1</p>
				<button onClick={buy}>Buy</button>
			</div>
			<div className=" h-20 w-20">
				<p>Product 2</p>
				<button onClick={buy}>Buy</button>
			</div>
			<div className=" h-20 w-20">
				<p>Product 3</p>
				<button onClick={buy}>Buy</button>
			</div>
		</div>
	);
}

export default Products;
