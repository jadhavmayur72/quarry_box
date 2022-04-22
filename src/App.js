
import './App.css';
import { AddTodoForm } from './components/FormsSubmit';
import { TodoList } from './components/TodoList';
import { TotalCompleteItem } from './components/TotalComp';

function App() {
  return (
    <div className="App">
      <AddTodoForm/>
      <TodoList/>
      <TotalCompleteItem/>

    </div>
  );
}

export default App;
