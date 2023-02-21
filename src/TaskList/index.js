import "./style.css";

const TaskList = ({ tasks, hideDoneTasks }) => (
  <ul className="list__tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`
            list__task${task.done && hideDoneTasks 
              ? " list__task--hidden" 
              : ""}
              `}
      >
        <button className={`list__button list__button--done`}>
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
        <button className="list__button">🗑</button>
      </li>
    ))}
  </ul>
);

export default TaskList;
