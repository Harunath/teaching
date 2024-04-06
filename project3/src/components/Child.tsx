function Child({ getNumbers }) {
	const arr = getNumbers();
	console.log(arr);
	console.log("child rerender");
	return (
		<div className="bg-pink-200">
			{arr.map((item) => (
				<p key={item}>This is {item}</p>
			))}
		</div>
	);
}

export default Child;
