import {TodoList} from './TodoList';
import {TodoAdd} from './TodoAdd';
import {useTodos} from '../hooks/UseTodos';

export function TodoMain() {
    const { todos, handlenewtodo, onDelete, ontoggleTodo,countTodos,CounterPendientes } = useTodos();
  
    return (
      <>
      <h1 className='text-center display-4 animated-title'> List Todo: {countTodos()}, earrings: {CounterPendientes()} </h1>
        <hr />
  
        <div className="row justify-content-center">
          <div className="col-7">
              <TodoList todos={todos} onDelete={onDelete} ontoggleTodo={ontoggleTodo}/>
          </div>
            <TodoAdd onNewTodo={handlenewtodo} />   
        </div>
      </>
    )
  }
  