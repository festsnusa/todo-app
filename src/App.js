import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
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

  console.log(todos)

  return (
    <div className="App">
      <Header />
      <Main todos={todos} />
      <Footer />
    </div>
  );
}

export default App;
