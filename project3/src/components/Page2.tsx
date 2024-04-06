import { useCallback, useState } from "react";
import Child from "./Child";

function Page2() {
	const [num, setNum] = useState(0);
	const [count, setCount] = useState(0);

	const getNumbers = useCallback(() => {
		return [num, num + 1, num + 2];
	}, [num]);

	console.log("page2 rerender");
	return (
		<div className="bg-blue-200">
			<div>
				<p>This is count {count}</p>
				<button
					className="p-2 mx-2 bg-yellow-200"
					onClick={() => setCount(count + 1)}>
					+
				</button>
				<button
					className="p-2 bg-yellow-200"
					onClick={() => setCount(count - 1)}>
					-
				</button>
			</div>
			<input
				type="number"
				value={num}
				onChange={(e) => setNum(Number(e.target.value))}
			/>
			<Child getNumbers={getNumbers} />
		</div>
	);
}

export default Page2;
