import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todo}>
      <div className={styles.todo__left}>
        {todo.isCompleted ? (
          <img
            className={`${styles.todo__icon} ${styles.todo__completed}`}
            alt="toggle"
            onClick={() => toggleTodo(todo.id)}
          />
        ) : (
          <div
            className={`${styles.todo__icon} ${styles.todo__incomplete}`}
            onClick={() => toggleTodo(todo.id)}
          ></div>
        )}
        <p
          className={`${
            todo.isCompleted ? styles.todo__completed_paragraph : ''
          }`}
        >
          {todo.title}
        </p>
      </div>
      <img
        className={styles.todo__close}
        alt="cross"
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
