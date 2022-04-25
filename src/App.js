
import './App.css';
import { AddTodoForm } from './components/FormsSubmit';
import { TodoList } from './components/TodoList';
import { TotalCompleteItem } from './components/TotalComp';

function App() {
  return (
    <div className="App">
      <h1 id='main_title'> TODO app</h1>
      <AddTodoForm/>
      <TotalCompleteItem/>
      <TodoList/>
     

    </div>
  );
}

export default App;
