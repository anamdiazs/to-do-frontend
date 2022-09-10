import React from 'react'
import { TableRow, TableCell, Button, Checkbox } from '@mui/material'
import ModalTask from './modalTask'
import { useState } from 'react'


export default function TaskRow(task) {
	const [isOpen, setIsOpen] = useState(false)

	const updateTask = () => {
		setIsOpen(true)
	}
  return (
		<TableRow
			key={task.id}
			sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
		>
			<TableCell>{task.task.text}</TableCell>
			<TableCell>{ <Checkbox size='medium'/>}</TableCell>
			<TableCell>{task.task.priority}</TableCell>
			<TableCell>{task.task.dueDate}</TableCell>
			<TableCell>{<Button variant='contained' onClick={updateTask}>Edit</Button>}</TableCell>
			<ModalTask task={task} open={isOpen} onClose={()=>setIsOpen(false)}></ModalTask>
		</TableRow>
  )
}
