import styles from './Todo.module.css';

function Todo({ todo, deleteTodo }) {
  return (
    <div className={styles.todo}>
      <div className={styles.todo__left}>
        {todo.isCompleted ? (
          <img className={`${styles.todo__icon} ${styles.todo__completed}`} />
        ) : (
          <div
            className={`${styles.todo__icon} ${styles.todo__incomplete}`}
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
