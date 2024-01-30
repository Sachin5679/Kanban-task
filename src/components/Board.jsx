import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { useState } from 'react';

const initialTasks = [
    { id: 1, content: 'Task 1', status: 'todo' },
    { id: 2, content: 'Task 2', status: 'inProgress' },
    { id: 3, content: 'Task 3', status: 'done' },
  ];

const Board = () => {

  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const [removed] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, { ...removed, status: result.destination.droppableId });
  
    setTasks(updatedTasks);

    console.log(result.source);
    console.log(result.destination);
  };

  return (
    <>
      <h1 className='p-4 text-2xl font-bold'>Brackets</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='p-4 md:flex'>
            <Column title="To Do" tasks={tasks.filter((task) => task.status === 'todo')} columnId="todo" />
            <Column title="In Progress" tasks={tasks.filter((task) => task.status === 'inProgress')} columnId="inProgress" />
            <Column title="Done" tasks={tasks.filter((task) => task.status === 'done')} columnId="done" />
        </div>
      </DragDropContext>

      
    </>
  )
}

export default Board
