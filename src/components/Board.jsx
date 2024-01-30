import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { useState } from 'react';

const initialTasks = [
  { id: 1, content: 'Task 1' },
  { id: 2, content: 'Task 2' },
  { id: 3, content: 'Task 3' },
];

const Board = () => {

  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = Array.from(tasks);
    const [removed] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, removed);
    setTasks(updatedTasks);

    console.log(result.source);
    console.log(result.destination);

    // Timeout function
    setTimeout(() => {
      setTasks(updatedTasks);
    }, 1000);
  };

  return (
    <>
      <h1 className='p-4 text-2xl font-bold'>Brackets</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='p-4 md:flex'>
          <Column title="To Do" tasks={tasks.filter((task) => task.id % 3 === 1)} columnId="todo" />
          <Column title="In Progress" tasks={tasks.filter((task) => task.id % 3 === 2)} columnId="inProgress" />
          <Column title="Done" tasks={tasks.filter((task) => task.id % 3 === 0)} columnId="done" />
        </div>
      </DragDropContext>

      
    </>
  )
}

export default Board
