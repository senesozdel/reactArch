import './App.css';
import Counter from './components/Counter/Counter';
import Todolist from './components/TodoList/Todolist';



function App() {
  return (
    <div className="App">
      <Counter />
      <br/>
      <Todolist />
    </div>
  );
}

export default App;
