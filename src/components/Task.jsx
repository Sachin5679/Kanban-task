import React from 'react'

const Task = ({task}) => {
  return (
    <div className="bg-white p-4 m-2 rounded shadow-md">
      {task.content}
    </div>
  )
}

export default Task
