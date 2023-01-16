import { useState } from 'react';
import styles from './Main.module.css';

function Main({ addTodo, incompletedTodosCounts }) {
  const [text, setText] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <div className={styles.main}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Create a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export default Main;
