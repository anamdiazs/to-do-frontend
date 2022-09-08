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

function App() {
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
