import React, { useState } from 'react';

const ExpandableTask = ({ task }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button onClick={toggleExpand}>
        {isExpanded ? 'Hide Details' : 'Show Details'}
      </button>
      {isExpanded && (
        <div className="task-details">
          <p>{task.description}</p>
          <p>Last updated: {task.lastUpdated}</p>
        </div>
      )}
    </div>
  );
};

export default ExpandableTask;
