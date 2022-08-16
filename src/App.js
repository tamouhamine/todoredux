import 'bootstrap/dist/css/bootstrap.css';
import ToDoList from './app/features/todomodule/todolist/ToDoList';
import NewToDo from './app/features/todomodule/newtodo/NewToDo';
function App() {
  return (
    <div className="container">
      <NewToDo />
      <ToDoList />
    </div>
  );
}

export default App;
