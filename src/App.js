import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść kolacje", done: true },
];

const hideDone = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zdanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={<TaskList tasks={tasks} hideDone={hideDone} />}
        extraHeaderContetnt={
          <Buttons tasks={tasks} hideDone={hideDone} />
        }
      />
    </Container>
  );
}

export default App;
