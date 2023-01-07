import styles from './Main.module.css'
import TodoList from './TodoList'

function Main({todos}) {
  return (
    <div className={styles.main}>
      <input placeholder="Create a new todo..."></input>
      <TodoList todos={todos}/>
    </div>
  )
}

export default Main