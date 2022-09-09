import React from 'react'
import { IconButton, Card, FormGroup, InputLabel, TextField, Select, MenuItem, Button } from '@mui/material'
import ReactDOM  from 'react-dom'
import CloseIcon from '@mui/icons-material/Close';

export default function ModalTask({open, onClose}) {
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
		<Card sx={{width:'40vw', height:'60vh', display:'flex', flexDirection:'column'}}>
			<IconButton sx={{}} onClick={onClose}>
				<CloseIcon />
			</IconButton>
			<FormGroup sx={{padding: 5}}>
				<InputLabel sx={{paddingBottom:2}}>Text</InputLabel>
				<TextField />
				<FormGroup>
					<InputLabel sx={{paddingBottom:2, paddingTop:2}}>Priority</InputLabel>
					<Select>
						<MenuItem value={"High"}>High</MenuItem>
						<MenuItem value={"Medium"}>Medium</MenuItem>
						<MenuItem value={"Low"}>Low</MenuItem>
					</Select>
					<InputLabel sx={{paddingBottom:2, paddingTop:2}}>Due date</InputLabel>
					<TextField type="date"/>
					<Button variant="contained" size='large' sx={{marginTop:2}}>Create Task</Button>
				</FormGroup>
			</FormGroup>
		</Card>
	 </div>
	</>,
	document.getElementById("modal")
  )
}
