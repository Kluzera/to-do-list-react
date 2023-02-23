import "./style.css";
import { useState } from "react";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSumbit = (event) => {
     event.preventDefault();
     addNewTask(newTaskContent.trim());
     setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSumbit} >
      <input
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({target}) => setNewTaskContent(target.value)}
      />
      <button className="form__addButton">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
