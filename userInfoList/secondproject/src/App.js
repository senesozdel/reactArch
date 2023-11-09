import './App.css';
import Counter from './components/Counter/Counter';
import Login from './components/Login/Login';
import Todolist from './components/TodoList/Todolist';



function App() {
  return (
    <div className="App">
      <Counter />
      <br/>
      <Todolist />
      <br/>
      <Login />
    </div>
  );
}

export default App;
