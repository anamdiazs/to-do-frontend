import './App.css';
import { Button, 
			Table, 
			TableHead,
			TableBody, 
			TableCell, 
			FormGroup, 
			TextField,
			Select, 
			MenuItem,
			Grid,
			InputLabel, 
			TableRow,
			Checkbox
		}
from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect, useContext} from 'react';
import ModalTask from './components/modalTask';
import { TaskContext } from './providers/TaskContext';


function App() {
	const [tasks, setTasks] = useState([])
	const [isOpen, setIsOpen] = useState(false)
	const [editTask, setEditTask] = useState({})
	const api = process.env.REACT_APP_API
	const getTasks = async () =>{
		try{
			const response = await fetch(`/todos`)
			const data = await response.json();
			setTasks(data)
			console.log('Response from fetch >>>> ' ,data)
		}catch(err){
			console.log(err)
		}
	}

	useEffect(() => {
		getTasks();
	}, [])

	const updateTask = () => {
		setIsOpen(true)
	}

	console.log('Edited task data>>>>', editTask)
	
  return (
	<TaskContext.Provider value={{editTask, setEditTask}}>
    <div class='App' >
		<Grid container sx={{width:'100%', padding:'2vw'}} direction='column'>
			<Grid item>
				<FormGroup>
					<InputLabel sx={{paddingBottom: 2}}>Text</InputLabel>
					<TextField type='text'></TextField>
				</FormGroup>
				<Button size='large' variant='contained' startIcon={<SearchIcon />} sx={{marginTop: 4 }}>Search</Button>
			</Grid>
			<Grid item >
				<Button onClick={() => setIsOpen(true)} size='large' variant='contained' startIcon={<AddIcon />} sx={{marginTop: 4 }}>New To Do</Button>
				<ModalTask open={isOpen} onClose={()=>setIsOpen(false)}></ModalTask>
			</Grid>
			<Grid item sx={{marginTop:'2vh'}}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Task</TableCell>
							<TableCell>Done</TableCell>
							<TableCell>Priority</TableCell>
							<TableCell>Due date</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{tasks.map((task) =>{
							return(
								<TableRow
									key={task.id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell>{task.text}</TableCell>
									<TableCell>{ <Checkbox sixe='medium'/>}</TableCell>
									<TableCell>{task.priority}</TableCell>
									<TableCell>{task.dueDate}</TableCell>
									<TableCell>{<Button variant='contained' onClick={updateTask}>Edit</Button>}</TableCell>
									<ModalTask task={task} open={isOpen} onClose={()=>setIsOpen(false)}></ModalTask>
            				</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</Grid>
			<Grid item>

			</Grid>
		</Grid>
    </div>
	</TaskContext.Provider>
	
  );
}

export default App;
