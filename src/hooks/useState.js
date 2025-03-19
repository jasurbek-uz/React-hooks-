import { useState } from "react";

export const StateExample = () => {
	const [count, setCount] = useState(0);

	const Increment = () => {
		setCount(count + 1);
  };
  
  const Decrement = () => {
    setCount(count - 1);
  };

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={Increment}>Increment</button>
			<button onClick={Decrement}>Decrement</button>
		</div>
	);
};

export default StateExample;
