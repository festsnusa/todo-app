import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import TodoList from './components/TodoList.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [todos, setTodos] = useState([
    { "title": "Complete online Javascript course", "isCompleted": true, id: uuidv4() },
    { "title": "Jog around the park 3x", "isCompleted": false, id: uuidv4() },
    { "title": "10 minutes meditation", "isCompleted": false, id: uuidv4() },
    { "title": "Read for 1 hour", "isCompleted": false, id: uuidv4() },
    { "title": "Pick up groceries", "isCompleted": false, id: uuidv4() },
    { "title": "Complete Todo App on Frontend Mentor", "isCompleted": false, id: uuidv4() }
  ])

  const todosHandler = (text) => {
    const newTodo = {
      title: text,
      isCompleted: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo])
    // console.log(todos)
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((el) => el.id !== id))
    console.log('deleted')
  }

  const deleteTodosHandler = () => {
    setTodos(todos.filter((todo) => todo.isCompleted))
  }

  const incompletedTodosCounts = todos.filter(todo => !todo.isCompleted).length

  return (
    <div className="App">
      <Header />
      <Main addTodo={todosHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} incompletedTodosCounts={incompletedTodosCounts} />
      <Footer />
    </div>
  );
}

export default App;
