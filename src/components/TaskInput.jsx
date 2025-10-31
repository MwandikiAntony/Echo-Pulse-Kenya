import Button from './Button';

const TaskInput = ({ task, setTask, addTask }) => {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Plant a tree / Recycle / Save water"
        className="flex-1 p-2 rounded border dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <Button onClick={addTask}>Add</Button>
    </div>
  );
};

export default TaskInput;
