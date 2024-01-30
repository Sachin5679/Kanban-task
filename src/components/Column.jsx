import React from 'react'
import Task from './Task'

const Column = ({title, tasks}) => {
    return (
        <div className="flex flex-col md:w-1/3 p-4 m-4 bg-gray-200 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">{title}</h2>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
    );
}

export default Column
