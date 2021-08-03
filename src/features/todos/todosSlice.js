const initialState = [
        { id: 0, text: "Buy some bread", completed: true },
        { id: 1, text: "Bake cookies", completed: false, color: "purple" },
        { id: 2, text: "Do homework", completed: false, color: "blue" }
    ]

function nextTodoId(todos) {  
    const maxId = todos.reduce((maxId, todo) => {
        Math.max(todo.id, maxId)
    }, -1)  
    
    return maxId + 1
}
    
export default function todosReducer(state = initialState, action) {
    switch (action.type) {    
        // Add a new todo entry based on the text the user entered
        case "todos/todoAdded": {
            return [
                ...state,
                {
                    id: nextTodoId(state.todos),
                    text: action.payload,
                    completed: false
                }
            ]
        }
        // Toggle the completed status of a todo
        case "todo/todoToggled": {
            return [
                state.map(todo => {
                    if(todo.id !== action.payload) {
                        return todo
                    }
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                })
            ]
        }
        // Select a color category for a todo
        case "todos/colorSelected": {
            return [
                state.map(todo => {
                    if(todo.id !== action.payload.id) {
                        return todo
                    }
                    return {
                        ...todo,
                        color: action.payload.color
                    }
                })                
            ]
        }
        // Delete a todo
        case "todos/todoDeleted": {
            return [
                state.map(todo => {
                    if(todo.id !== action.payload.id) {
                        return todo
                    }
                    return {
                        ...todo,
                        
                    }
                })
            ]
        }
        // Mark all todos as completed

        // Clear all completed todos

        default:      
            return state  
    }
}