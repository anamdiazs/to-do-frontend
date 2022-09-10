import React from 'react'
import { IconButton, Card, FormGroup, InputLabel,TextField, Select, MenuItem, Button, FormControl } from '@mui/material'
import ReactDOM  from 'react-dom'
import CloseIcon from '@mui/icons-material/Close';
import { useState, useContext} from 'react';
import { TaskContext } from '../providers/TaskContext';

export default function ModalTask({open, onClose, task}) {
	const [text, setText] = useState("")
	const [dueDate, setDueDate] = useState("")
	const [valid, setValid] = useState()
	const [priority, setPriority] = useState("")
	const {editTask, setEditTask} = useContext(TaskContext)

	const api = process.env.REACT_APP_API

	console.log(task)

	const generateRandomUI = () =>{
		let id = "";
		let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
			for ( var i = 0; i < 7; i++ ) {
			id += characters.charAt(Math.floor(Math.random() * 36));
			}
		return id;
	}

	const handleDateChange = (e) => {
		setDueDate(e.target.value)
	}
	const handleTextChange = (e) => {
		setText(e.target.value)
		text !== "" && text.length < 120 ? setValid(true): setValid(false)
	}

	const handlePriorityChange = (e) => {
		setPriority(e.target.value)
	}
	
	const dataPayload = {
		id: generateRandomUI(),
		text: text,
		dueDate: dueDate, 
		done: false, 
		priority: priority,
		creationDate:new Date().toJSON().slice(0, 10)
	}

	const createNewTodo = async() => {
		generateRandomUI();
		try{
			const response = await fetch(`${api}/todos`,{
				method:'POST',
				mode:'cors',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				 },
				 body: JSON.stringify(dataPayload)
			})
			setEditTask(dataPayload)
			window.location.reload();
			onClose()
		}catch(err){
			console.log(err)
		}
	}

	if(!open) return null
  return ReactDOM.createPortal(
	<>
	 <div style={{
			width:'100vw',
			height:'100vh',
			position:'fixed', 
			display:'flex',
			justifyContent:'center', 
			alignItems:'center',
			top: 0, 
			left: 0, 
			right: 0, 
			left: 0, 
			backgroundColor:'rgba(0,0,0, .7)',
			opacity:'50px',
			zIndex:1000
		}}>
		<Card sx={{width:'40vw', height:'60vh', display:'flex', flexDirection:'column', borderRadius: 2}}>
			<IconButton sx={{ display:'flex', alignSelf:'end', marginRight:2, marginTop:2}} onClick={onClose}>
				<CloseIcon />
			</IconButton>
			<FormGroup sx={{padding: 5}}>
				<InputLabel sx={{paddingBottom:2}}>Text</InputLabel>
				<TextField  
					minRows={8}
					maxLength="120"
					onChange={handleTextChange}
					required={true}
					error={valid === false}
					helperText={valid === false ? "This input most contain less than 120 characters" : ""}
				/>
				<FormGroup sx={{maxWidth:'30%'}}>
					<InputLabel sx={{paddingBottom:2, paddingTop:2}}>Priority</InputLabel>
					<Select 
						onChange={handlePriorityChange}
						required={true}
					>
						<MenuItem value={"High"}>High</MenuItem>
						<MenuItem value={"Medium"}>Medium</MenuItem>
						<MenuItem value={"Low"}>Low</MenuItem>
					</Select>
					<InputLabel sx={{paddingBottom:2, paddingTop:2}}>Due date</InputLabel>
					<TextField 
						type="date"
						onChange={handleDateChange}
						required={true}
					/>
					<Button onClick={createNewTodo} variant="contained" size='large' sx={{marginTop:2}}>Create Task</Button>
				</FormGroup>
			</FormGroup>
	</Card>
	 </div>
	</>,
	document.getElementById("modal")
  )
}
