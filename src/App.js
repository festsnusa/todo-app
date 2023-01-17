import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import TodoList from './components/TodoList.jsx'
import Footer from './components/Footer.jsx'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoListHandler from './components/TodoListHandler.jsx'

function App() {

  const [todos, setTodos] = useState([
    { "title": "Complete online Javascript course", "isCompleted": true, id: uuidv4() },
    { "title": "Jog around the park 3x", "isCompleted": false, id: uuidv4() },
    { "title": "10 minutes meditation", "isCompleted": false, id: uuidv4() },
    { "title": "Read for 1 hour", "isCompleted": false, id: uuidv4() },
    { "title": "Pick up groceries", "isCompleted": false, id: uuidv4() },
    { "title": "Complete Todo App on Frontend Mentor", "isCompleted": false, id: uuidv4() }
  ])

  const [themeLight, setThemeLight] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const themeClass = themeLight ? "light" : "dark";

  useEffect(() => {
    const handleFilter = () => {
      switch (filterStatus) {
        case "active":
          console.log(filterStatus)
          return setFilteredTodos(todos.filter((todo) => !todo.isCompleted))
        case "completed":
          console.log(filterStatus)
          return setFilteredTodos(todos.filter((todo) => todo.isCompleted))
        default:
          console.log(filterStatus)
          return setFilteredTodos(todos)
      }

    }

    handleFilter()
    console.log(todos)
  }, [todos, filterStatus])

  const filterStatusHandler = (status) => {
    setFilterStatus(status)
  }

  const todosHandler = (text) => {
    const newTodo = {
      title: text,
      isCompleted: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodoHandler = (id) => {

    setTodos(
      todos.map((todo) =>
        todo.id === id ?
          { ...todo, isCompleted: !todo.isCompleted } :
          { ...todo }
      )
    )
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((el) => el.id !== id))
  }

  const deleteTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const incompletedTodosCounts = filteredTodos.filter(todo => !todo.isCompleted).length

  const [text, setText] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();
    todosHandler(text);
    setText('');
  }

  return (
    <div className="App">
      <Header />
      <Main>
        <form onSubmit={onSubmitHandler}>
          <div className="icon"></div>
          <input
            placeholder="Create a new todo..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </form>
        <TodoList todos={filteredTodos} deleteTodo={deleteTodoHandler} deleteTodos={deleteTodosHandler} toggleTodo={toggleTodoHandler} incompletedTodosCounts={incompletedTodosCounts} />
        <TodoListHandler filteredTodos={filteredTodos}
          filterStatus={filterStatus}
          filterStatusHandler={filterStatusHandler} />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
