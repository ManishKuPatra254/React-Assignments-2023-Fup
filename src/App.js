
import { Provider } from 'react-redux';
import './App.css';
import { StoreData } from './Components/Store';
import { TodoListMainApp } from './Components/Main Todo/Main-todo-list';

function App() {
  return (
    <div className="App">
      <h1>TodoList Using Redux</h1>
      <Provider store={StoreData}>
        <TodoListMainApp />
      </Provider>
    </div>
  );
}

export default App;
