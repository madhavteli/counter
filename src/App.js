import React, { useState } from 'react';
import Btn from "./Components/Btn";

function App() {

	const [count, setCount] = useState( 0 );

	const increaseCount = () => {
		setCount( count + 1 );
	}

	const decreaseCount = () => {
		setCount( count <= 0 ? count : count - 1 );
	}

	const resetCount = () => {
		setCount( 0 );
	}

	return (
		<div style={{textAlign: "center"}}>
			<Btn btnText="+" onClick={increaseCount} />
			<span className='count'>{count}</span>
			<Btn btnText="-" onClick={decreaseCount} />
			<div>
				<Btn btnText="Reset" onClick={resetCount} />
			</div>
		</div>
	);
}

export default App;
