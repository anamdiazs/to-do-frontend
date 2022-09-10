import React from 'react'
import { TableRow, TableCell, Button, Checkbox } from '@mui/material'
import ModalTask from './modalTask'
import { useState, useRef } from 'react'


export default function TaskRow(task) {
	const [isOpen, setIsOpen] = useState(false)
	const api = process.env.REACT_APP_API

	const checkedInput = useRef()

	const updateTask = () => {
		setIsOpen(true)
	}

	const markAsDone = async() => {
		if(checkedInput.current.value === "on"){
			try{
				const response = await fetch(`${api}/todos/${task.task.id}/done`,{
					method:'PUT',
					mode:'cors',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*'
					},
					body: JSON.stringify(task)})
			alert('Task Marked as Done')
			}catch(err){
				console.log(err)
			}
		}else{
			console.log('Task undone')
		}
	}

	const defaultChecked = () => {
		if(task.task.done === true){
			return true	
		}else{
			return false 
		}
	}
	
  return (
		<TableRow
			key={task.id}
			sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
		>
			<TableCell>{task.task.text}</TableCell>
			<TableCell>{ <Checkbox inputRef={checkedInput} onChange={markAsDone} defaultChecked={ defaultChecked()} size='medium'/>}</TableCell>
			<TableCell>{task.task.priority}</TableCell>
			<TableCell>{task.task.dueDate}</TableCell>
			<TableCell>{<Button variant='contained' onClick={updateTask}>Edit</Button>}</TableCell>
			<ModalTask task={task} open={isOpen} onClose={()=>setIsOpen(false)}></ModalTask>
		</TableRow>
  )
}
