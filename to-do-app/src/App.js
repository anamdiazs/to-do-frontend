import './App.css';
import { Button, 
			Table, 
			TableHead,
			TableBody, 
			TableCell, 
			FormControl,
			FormGroup, 
			TextField,
			Select, 
			MenuItem,
			Grid,
			InputLabel, 
			TableRow
		}
from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect} from 'react';
import ModalTask from './components/modalTask';


function App() {
	const [tasks, setTasks] = useState([])
	const [isOpen, setIsOpen] = useState(false)
	const getTasks = async () =>{
		try{
			const response = await fetch('/todos')
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
	

	
  return (
    <div class='App' >
		<Grid container sx={{width:'100%', padding:'2vw'}} direction='column'>
			<Grid item>
				<FormGroup>
					<InputLabel sx={{paddingBottom: 2}}>Text</InputLabel>
					<TextField type='text'></TextField>
					<InputLabel sx={{paddingBottom: 2, paddingTop:2 }}>Priority</InputLabel>
					<Select sx={{width: '10vw'}}>
						<MenuItem >All</MenuItem>
						<MenuItem>High</MenuItem>
						<MenuItem>Medium</MenuItem>
						<MenuItem>Low</MenuItem>
					</Select>
					<InputLabel sx={{paddingBottom: 2, paddingTop:2 }}>State</InputLabel>
					<Select sx={{width: '10vw'}}>
						<MenuItem>All</MenuItem>
						<MenuItem>Done</MenuItem>
						<MenuItem>Undone</MenuItem>
					</Select>
				</FormGroup>
				<Button size='large' variant='contained' startIcon={<SearchIcon />} sx={{marginTop: 4 }}>Search</Button>
			</Grid>
			<Grid item >
				<Button size='large' variant='contained' startIcon={<AddIcon />} sx={{marginTop: 4 }}>New To Do</Button>
			</Grid>
			<Grid item sx={{marginTop:'2vh'}}>
				<Table>
					<TableHead>
						<TableRow>
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
  );
}

export default App;
