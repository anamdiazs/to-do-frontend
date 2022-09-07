import './App.css';

function App() {
  return (
    <div className="App">
		<div className='flex flex-col w-screen h-screen bg-blue-300'>
			<div className='w-11/12 h-auto bg-red-200'>
				<form className='flex flex-col w-64 justify-between'>
					<label>Name</label>
					<input type='text'></input>
					<label>Priority</label>
					<select>
						<option>All</option>
						<option>High</option>
						<option>Medium</option>
						<option>Low</option>
					</select>
					<label>State</label>
					<select>
						<option>All</option>
						<option>Done</option>
						<option>Undone</option>
					</select>
				</form>
				<button className='w-24 h-12 bg-blue-700 rounded-md'>Search</button>
			</div>
			<div></div>
			<div></div>
		</div>
	 
    </div>
  );
}

export default App;
