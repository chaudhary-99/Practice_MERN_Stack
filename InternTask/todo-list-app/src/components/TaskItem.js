import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete, onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="task-item">
      <div className="task-header">
        <h3 className={task.completed ? 'completed' : ''}>{task.title}</h3>
        <div className="task-actions">
          <button onClick={() => onToggle(task.id)}>Done</button>
          <button onClick={() => onUpdate(task)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={handleExpand}>{isExpanded ? 'Collapse' : 'Expand'}</button>
        </div>
      </div>
      {isExpanded && (
        <div className="task-details">
          <p>{task.description}</p>
          <small>Last updated: {new Date(task.timestamp).toLocaleString()}</small>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
