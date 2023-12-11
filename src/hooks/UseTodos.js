import { useEffect, useReducer } from "react";
import {TodoReducer} from '../helpers/TodoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
  const [todos, dispatch] = useReducer(TodoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [] );
    }, [todos])
  
    const handlenewtodo = (todo) => {
      const action = {
          type: 'Add todo',
          payload: todo
      }
      dispatch(action)
    }
  
    const onDelete = (id) => {
      const action = {
          type: 'remove todo',
          payload: id
      }
      dispatch(action)
    }
    
    const ontoggleTodo = (id) => {
      const action = {
          type: 'toggle todo',
          payload: id
      }
      dispatch(action)
    }
    
    const countTodos = () => {
      return todos.length
    }
    
    const CounterPendientes = () => {
      return todos.filter(todo => !todo.done).length
    }

    return {
        todos,
        handlenewtodo,
        onDelete,
        ontoggleTodo,
        countTodos,
        CounterPendientes
    };      
}

