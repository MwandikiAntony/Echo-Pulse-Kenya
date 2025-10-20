import { useState, useEffect } from 'react';
import Card from '../components/Card';
import TaskInput from '../components/TaskInput';
import Button from '../components/Button';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { fetchEcoFacts } from '../api/fetchFacts';

const Home = () => {
  const [tasks, setTasks] = useLocalStorage('ecoTasks', []);
  const [task, setTask] = useState('');
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEcoFacts()
      .then(setFacts)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask('');
  };

  const toggleComplete = id =>
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTask = id => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Track Your Green Actions</h2>

      <TaskInput task={task} setTask={setTask} addTask={addTask} />

      {/* Task List */}
      {tasks.map(t => (
        <Card key={t.id} title={t.text} description={`Status: ${t.completed ? '✅ Done' : '❌ Pending'}`}>
          <div className="flex gap-2 mt-2">
            <Button variant="secondary" onClick={() => toggleComplete(t.id)}>
              {t.completed ? 'Undo' : 'Complete'}
            </Button>
            <Button variant="danger" onClick={() => deleteTask(t.id)}>Delete</Button>
          </div>
        </Card>
      ))}

      {/* Eco Facts */}
      <h2 className="text-xl font-bold mb-2 mt-6 text-gray-800 dark:text-gray-100">Eco Facts</h2>
      {loading && <p>Loading facts...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {facts.map(f => (
        <Card key={f.id} title={f.title} description={f.body} />
      ))}
    </div>
  );
};

export default Home;
