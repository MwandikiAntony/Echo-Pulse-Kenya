import { useState, useEffect } from 'react';
import Card from '../components/Card';
import TaskInput from '../components/TaskInput';
import Button from '../components/Button';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { fetchEcoFacts } from '../api/ecoFactsApi';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';

const Home = () => {
  const [tasks, setTasks] = useLocalStorage('ecoTasks', []);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all');
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
    if (!task.trim()) return toast.error('Please enter a task!');
    const newTask = { id: Date.now(), text: task, completed: false };
    setTasks([...tasks, newTask]);
    setTask('');
    toast.success('Eco task added!');
  };

  const toggleComplete = id => {
    const updated = tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
    toast.success('Task status updated!');
  };

  const deleteTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
    toast.error('Task deleted');
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'completed') return t.completed;
    if (filter === 'pending') return !t.completed;
    return true;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 w-full flex-grow bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 dark:text-green-300 mb-3">
          🌿 EcoPulse Kenya
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Track your eco-friendly actions and inspire a greener tomorrow 🌍
        </p>
      </motion.div>

      {/* Task Input */}
      <div className="max-w-2xl mx-auto mb-10">
        <TaskInput task={task} setTask={setTask} addTask={addTask} />
      </div>

      {/* Filter + Progress Section */}
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white/60 dark:bg-gray-800/50 p-4 rounded-xl shadow-md backdrop-blur-md">
        {/* Filters */}
        <div className="flex gap-2">
          {['all', 'completed', 'pending'].map(type => (
            <Button
              key={type}
              variant={filter === type ? 'primary' : 'secondary'}
              onClick={() => setFilter(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </div>

        {/* Progress */}
        <div className="w-full sm:w-1/3">
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <motion.div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-sm text-center text-gray-600 dark:text-gray-300 mt-1">
            {completedTasks}/{totalTasks} completed
          </p>
        </div>
      </div>

      {/* Task List */}
      <div className="max-w-3xl mx-auto">
        <AnimatePresence>
          {filteredTasks.map(t => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <Card
                title={t.text}
                description={`Status: ${t.completed ? '✅ Done' : '❌ Pending'}`}
              >
                <div className="flex gap-2 mt-2 justify-center sm:justify-start">
                  <Button
                    variant="secondary"
                    onClick={() => toggleComplete(t.id)}
                  >
                    {t.completed ? 'Undo' : 'Complete'}
                  </Button>
                  <Button variant="danger" onClick={() => deleteTask(t.id)}>
                    Delete
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredTasks.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400 text-center mt-6">
            No tasks yet — start your green journey 🌱
          </p>
        )}
      </div>

      {/* Eco Tips */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 text-center mb-6">
          🌎 Eco Tips & Facts
        </h2>

        {loading && <p className="text-center text-gray-600">Loading tips...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {facts.map(f => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card title={f.title} description={f.body} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
