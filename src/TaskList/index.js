import "./style.css";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="list__tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`
            list__task${task.done && hideDone 
              ? " list__task--hidden" 
              : ""}
              `}
      >
        <button 
        onClick={() => toggleTaskDone(task.id)}
        className={`list__button list__button--done`}
        >
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`
             list__taskName${task.done 
              ? " list__taskName--done" 
              : ""}`
            }
        >
          {task.content}
        </span>
        <button 
          className="list__button"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default TaskList;
