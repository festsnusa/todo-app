import styles from './TodoListHandler.module.css';

const TodoListHandler = ({
  filteredTodos,
  filterStatus,
  filterStatusHandler,
}) => {
  const toggleActiveClass = (num) => {
    let buttons = document.querySelectorAll('.button');
    console.log(buttons);
    buttons.forEach((button, i) => {
      if (i === num) {
        button.classList.add(styles.todolisthandler__active);
      } else {
        button.classList.remove(styles.todolisthandler__active);
      }
    });
  };

  return (
    <div className={styles.todolisthandler}>
      <button
        className={`button ${styles.todolisthandler__active}`}
        onClick={() => {
          filterStatusHandler('all');
          toggleActiveClass(0);
        }}
      >
        All
      </button>
      <button
        className="button"
        onClick={() => {
          filterStatusHandler('active');
          toggleActiveClass(1);
        }}
      >
        Active
      </button>
      <button
        className="button"
        onClick={() => {
          filterStatusHandler('completed');
          toggleActiveClass(2);
        }}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoListHandler;
