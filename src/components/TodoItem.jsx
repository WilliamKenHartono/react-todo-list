export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
        <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
          Delete
        </button>
        {title}
        <button className="btn btn-edit" onClick={() => editTodo(id)}>
          Edit
        </button>
      </label>
    </li>
  );
}
