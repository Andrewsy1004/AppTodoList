export const TodoReducer = (state=[], action) => {
    switch (action.type) {
        case 'Add todo':
            return [
                ...state,
                action.payload
            ]
        
         case "remove todo":
            return state.filter(todo => todo.id !== action.payload)
         
         case "toggle todo":
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
            
        default:
         return state;    
    }
}