import Todo from './Todo';

function TodoList({ todos, deleteTodo, toggleTodo, incompletedTodosCounts }) {
  console.log(todos);
  return (
    <div>
      {todos.length === 0 ? (
        <h2>List is empty</h2>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
      )}
    </div>
    // <div>
    //   {todos.map((todo) => (
    //     <Todo key={todo.id} todo={todo} />
    //   ))}
    //   <div>
    //     {incompletedTodosCounts > 0 && (
    //       <p>{incompletedTodosCounts} item(s) left</p>
    //     )}
    //     <p>Clear Completed</p>
    //   </div>
    //   <div>
    //     <span>All</span>
    //     <span>Active</span>
    //     <span>Completed</span>
    //   </div>
    // </div>
  );
}

export default TodoList;
