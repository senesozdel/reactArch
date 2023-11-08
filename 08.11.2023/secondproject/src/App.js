import './App.css';
import Counter from './components/Counter/Counter';
import Product from './components/ProductList/Product';
import Todolist from './components/TodoList/Todolist';



function App() {
  return (
    <div className="App">
      <Counter />
      <br/>
      <Todolist />
      <br/>
      <Product />
    </div>
  );
}

export default App;
