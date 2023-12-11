import {TodoItems} from './TodoItems'

export const TodoList = ({ todos = [], onDelete, ontoggleTodo }) => {    
    return (
      <>
        <ul className="list-group">
          {todos.map((todo) => (
            <TodoItems key={todo.id} todo={todo} onDelete={onDelete} ontoggleTodo={ontoggleTodo} />
          ))}
        </ul>
      </>
    );
};
  