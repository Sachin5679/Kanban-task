import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from './Column'
import { useState } from 'react'

const initialTasks = [
    { id: 1, content: 'Task 1' },
    { id: 2, content: 'Task 2' },
    { id: 3, content: 'Task 3' },
  ];

const Board = () => {

  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className=''>
      <h1 className='p-4 text-2xl font-bold'>Brackets</h1>
      <div className='p-4 md:flex'>
        <Column title="To Do" tasks={tasks.filter((task) => task.id % 3 === 1)} />
        <Column title="In Progress" tasks={tasks.filter((task) => task.id % 3 === 2)} />
        <Column title="Done" tasks={tasks.filter((task) => task.id % 3 === 0)} />
      </div>
      
    </div>
  )
}

export default Board
