import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import SearchBar from './components/Search';
import tasksData from './data/tasks.json';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const handleSaveTask = (task) => {
    if (taskToEdit) {
      setTasks(tasks.map(t => (t.id === taskToEdit.id ? { ...t, ...task, timestamp: new Date().toISOString() } : t)));
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false, timestamp: new Date().toISOString() }]);
    }
  };

  const handleUpdateTask = (task) => {
    setTaskToEdit(task);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Todo List</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TaskForm taskToEdit={taskToEdit} onSave={handleSaveTask} />
      <TaskList tasks={filteredTasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
    </div>
  );
};

export default App;
