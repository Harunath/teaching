import { useState } from "react";
import DisplayClass1 from "./components/DisplayClass1";
import DisplayClass2 from "./components/DisplayClass2";

function App() {
	const [cls, setCls] = useState(1);
	return (
		<div className="m-4">
			<div>
				<div>
					{/* buttons */}
					<button
						className="border bg-blue-300 p-2 m-2 rounded"
						onClick={() => {
							setCls(1);
						}}>
						Class 1
					</button>
					<button
						className="border bg-blue-300 p-2 m-2 rounded"
						onClick={() => {
							setCls(2);
						}}>
						Class 2
					</button>
				</div>
				<div className="h-40 w-40">
					<p>Tab</p>
					{/* classes */}
					{cls === 1 ? <DisplayClass1 /> : <DisplayClass2 />}
				</div>
			</div>
		</div>
	);
}

export default App;
