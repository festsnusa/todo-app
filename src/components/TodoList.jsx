import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({
  todos,
  deleteTodo,
  deleteTodos,
  toggleTodo,
  incompletedTodosCounts,
}) {
  console.log(todos);
  return (
    <div className={styles.todolist}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}

      <div className={styles['todolist__completed-section']}>
        {incompletedTodosCounts > 0 && (
          <p>{incompletedTodosCounts} item(s) left</p>
        )}
        <button onClick={deleteTodos}>Clear Completed</button>
      </div>
    </div>
  );
}

export default TodoList;
