import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task'

const Column = ({title, tasks, columnId}) => {
    return (
      <Droppable droppableId={columnId}>
        {(provided) => (
            <div
                {...provided.droppableProps}  
                ref={provided.innerRef}  
                className="flex flex-col md:w-1/3 p-4 m-4 bg-gray-200 rounded shadow-md"        
            >
                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                {tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
            </div>
        )}
      </Droppable>
    );
}

export default Column
