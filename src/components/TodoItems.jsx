export const TodoItems = ({ todo, onDelete,ontoggleTodo }) => {
    return (
      <>
       <li key={todo.id} className="list-group-item d-flex justify-content-between">
            <span 
              className={`align-self-center  ${todo.done ? 'text-decoration-line-through' : ''}`}
              onClick={() => ontoggleTodo(todo.id)}
             >{todo.description}</span>
            <button className="btn btn-danger btn-sm mr-2" onClick={() => onDelete(todo.id)}>Borrar</button>
       </li>
      </>
    )
  }
  