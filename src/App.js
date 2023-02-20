import Form from "./Form";
import ListTasks from "./ListTasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  {id: 1, content: "przejść na Reacta", done: false},
  {id: 2, content: "zjeść kolacje", done: true},
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
       <Header title="Lista zadań"/>
        <Section 
         title="Dodaj nowe zdanie" 
         body={<Form />} 
    />

    <Section 
      title="Lista zadań"
      body={<ListTasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
      extraHeaderContetnt={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>} 
     />
</Container>
  );
}

export default App;
