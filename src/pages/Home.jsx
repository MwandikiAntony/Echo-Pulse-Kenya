import { useState, useEffect } from 'react';
import Card from '../components/Card';
import TaskInput from '../components/TaskInput';
import Button from '../components/Button';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { fetchEcoFacts } from '../api/ecoFactsApi';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast'; // ✅ for notifications

const Home = () => {
  const [tasks, setTasks] = useLocalStorage('ecoTasks', []);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // ✅ Fetch Eco Facts (Tips)
  useEffect(() => {
    fetchEcoFacts()
      .then(setFacts)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // ✅ Add New Task
  const addTask = () => {
    if (!task.trim()) return toast.error('Please enter a task!');
    const newTask = { id: Date.now(), text: task, completed: false };
    setTasks([...tasks, newTask]);
    setTask('');
    toast.success('Eco task added!');
  };

  // ✅ Toggle Completion
  const toggleComplete = id => {
    const updated = tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t));
    setTasks(updated);
    toast.success('Task status updated!');
  };

  // ✅ Delete Task
  const deleteTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
    toast.error('Task deleted');
  };

  // ✅ Task Filters
  const filteredTasks = tasks.filter(t => {
    if (filter === 'completed') return t.completed;
    if (filter === 'pending') return !t.completed;
    return true;
  });

  // ✅ Progress Bar Calculation
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-300 text-center">
        🌿 Track Your Green Actions
      </h2>

      {/* Task Input */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <TaskInput task={task} setTask={setTask} addTask={addTask} />
      </div>

      {/* Filter & Progress */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
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

        <div className="w-full sm:w-1/3 mt-4 sm:mt-0">
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-center text-gray-600 dark:text-gray-300 mt-1">
            {completedTasks}/{totalTasks} completed
          </p>
        </div>
      </div>

      {/* Task List */}
      <AnimatePresence>
        {filteredTasks.map(t => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              title={t.text}
              description={`Status: ${t.completed ? '✅ Done' : '❌ Pending'}`}
            >
              <div className="flex gap-2 mt-2 justify-center sm:justify-start">
                <Button variant="secondary" onClick={() => toggleComplete(t.id)}>
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

      {/* No Tasks Message */}
      {filteredTasks.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 text-center mt-6">
          No tasks to show here ✨
        </p>
      )}

      {/* Eco Facts Section */}
      <h2 className="text-2xl font-bold mb-2 mt-8 text-green-600 dark:text-green-400 text-center">
        🌎 Eco Tips
      </h2>
      {loading && <p className="text-center">Loading tips...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        {facts.map(f => (
          <Card key={f.id} title={f.title} description={f.body} />
        ))}
      </div>
    </div>
  );
};

export default Home;
