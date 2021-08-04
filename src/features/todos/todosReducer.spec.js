import todosReducer from './todosReducer'
import {todoAdd} from "./todosActions"

const initialState = [
    { id: 0, text: 'Test text', completed: false }
]

test('Toggles a todo based on id', () => {  
    const action = { type: 'todos/todoToggled', payload: 0 } 
    const result = todosReducer(initialState, action) 

    expect(result[0].completed).toBe(true)
})

test('Add a todo based on action function', () => {  
    const result = todosReducer(initialState, todoAdd("text")) 

    expect(result[1]).toEqual(expect.anything())
    expect(result[2]).toBeUndefined()
})