import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
	// const [title, setTitle] = useState("");
	const [des, setDes] = useState("");
	const [notes, setNotes] = useState(data);
	const [count, setCount] = useState(4);

	function remove(id) {
		setNotes(notes.filter((e) => e.key !== id));
	}

	function handle() {
		if (!des) {
			window.alert("Incomplete input");
			return;
		}
		setNotes([...notes, { key: count, des: des }]);
		setCount(count + 1);
		setTitle("");
		setDes("");
		console.log(notes);
	}

	return (
		<div className="App">
			<div className="card">
				<div className="head">
					<h1>React notes</h1>
				</div>
				<div className="notes">
					{notes.map((e) => (
						<div className="notes-item">
							<div style={{ width: "90%" }}>
                <h5>To Do:</h5>
								<p>{e.des}</p>
							</div>
							<button className='btn'
								type="input"
								style={{
									fontSize: "20px",
									width: "8%",
									height: "35px",
									padding: "0 2% 0 2%",
									color: "black",
								}}
								onClick={() => remove(e.key)}
							>
								X
							</button>
						</div>
					))}
					<div className="add">
						<h3>Add Notes</h3>
						<input
							type="text"
							id="description"
							placeholder="Notes"
							value={des}
							onChange={(e) => {
								setDes(e.target.value);
							}}
						></input>
						<button className='btn' type="submit" onClick={handle}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}


const data = [];

export default App;

